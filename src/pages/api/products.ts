import { dodopayments } from "../../lib/dodopayments";


import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    try {
        const products = await dodopayments.products.list();
        return new Response(JSON.stringify(products.items), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
};

  
