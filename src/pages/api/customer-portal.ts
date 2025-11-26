import { CustomerPortal } from "@dodopayments/astro";

export const prerender = false;

export const GET = CustomerPortal({
  bearerToken: import.meta.env.DODO_PAYMENTS_API_KEY,
  environment: import.meta.env.DODO_PAYMENTS_ENVIRONMENT,
});
