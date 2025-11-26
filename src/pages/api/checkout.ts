import { Checkout } from "@dodopayments/astro";

export const prerender = false;

export const GET = Checkout({
  bearerToken: import.meta.env.DODO_PAYMENTS_API_KEY,
  returnUrl: import.meta.env.DODO_PAYMENTS_RETURN_URL,
  environment: import.meta.env.DODO_PAYMENTS_ENVIRONMENT,
  type: "static", // for static checkout links
});

// Using checkout sessions (POST)
export const POST = Checkout({
  bearerToken: import.meta.env.DODO_PAYMENTS_API_KEY,
  returnUrl: import.meta.env.DODO_PAYMENTS_RETURN_URL,
  environment: import.meta.env.DODO_PAYMENTS_ENVIRONMENT,
  type: "session", // for checkout sessions
});
