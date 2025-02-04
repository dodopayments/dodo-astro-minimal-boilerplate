import type { APIRoute } from 'astro';
import { dodopayments } from '../../../lib/dodopayments';

export const GET: APIRoute = async ({ request }) => {
    try {
        const url = new URL(request.url);
        const params = new URLSearchParams(url.search);
        const productId = params.get('productId');
        const productWithQuantity = { product_id: productId!, quantity: 1 };

        const response = await dodopayments.payments.create({
            billing: {
                city: 'Sydney',
                country: 'AU',
                state: 'New South Wales',
                street: '1, Random address',
                zipcode: '2000',
            },
            customer: {
                email: 'test@example.com',
                name: 'Customer Name',
            },
            payment_link: true,
            product_cart: [productWithQuantity],
            return_url: import.meta.env.NEXT_PUBLIC_BASE_URL,
        });
        return new Response(JSON.stringify(response), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

