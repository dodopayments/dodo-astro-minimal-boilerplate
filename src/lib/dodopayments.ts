import DodoPayments from "dodopayments";

export const dodopayments = new DodoPayments({
  bearerToken:
        import.meta.env.NODE_ENV === "development"
      ? import.meta.env.DODO_API_KEY_TEST
      : import.meta.env.DODO_API_KEY_LIVE, // This is the default and can be omitted if env is named as DODO_PAYMENTS_API_KEY
  environment:
    import.meta.env.NODE_ENV === "development" ? "test_mode" : "live_mode", // defaults to 'live_mode'
});
