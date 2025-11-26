import { Webhooks } from "@dodopayments/astro";

export const prerender = false;

export const POST = Webhooks({
  webhookKey: import.meta.env.DODO_PAYMENTS_WEBHOOK_KEY,
  // Event handlers
  onSubscriptionActive: async (payload) => {
    console.log("Subscription activated:", payload);
    // Handle active subscription
  },

  onSubscriptionCancelled: async (payload) => {
    console.log("Subscription cancelled:", payload);
    // Handle cancelled subscription
  },
});
