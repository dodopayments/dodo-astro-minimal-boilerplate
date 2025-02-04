import type { APIRoute, APIContext } from 'astro';
import { dodopayments } from '../../lib/dodopayments';
import { Webhook } from 'standardwebhooks';

const webhook = new Webhook(import.meta.env.DODO_PAYMENTS_WEBHOOK_KEY!);
export const POST: APIRoute = async ({ request }: APIContext) => {
    const headersList = request.headers;
    try {
        const rawBody = await request.text();
        const webhookHeaders = {
            'webhook-id': headersList.get('webhook-id') || '',
            'webhook-signature': headersList.get('webhook-signature') || '',
            'webhook-timestamp': headersList.get('webhook-timestamp') || '',
        };
        await webhook.verify(rawBody, webhookHeaders);
        const payload = JSON.parse(rawBody);

        if (payload.data.payload_type === 'Subscription') {
            switch (payload.data.status) {
                case 'active':
                    const subscription = await dodopayments.subscriptions.retrieve(payload.data.subscription_id);
                    console.log(subscription);
                    break;
                case 'failed':
                    break;
                case 'cancelled':
                    break;
                case 'renewed':
                    break;
                case 'on_hold':
                    break;
                default:
                    break;
            }
        } else if (payload.data.payload_type === 'Payment') {
            switch (payload.data.status) {
                case 'succeeded':
                    break;
                default:
                    break;
            }
        }
        return Response.json({ message: 'Webhook processed successfully' }, { status: 200 });
    } catch (error) {
        console.log(' ----- webhoook verification failed -----');
        console.log(error);
        return Response.json({ message: 'Webhook processed successfully' }, { status: 200 });
    }
};
