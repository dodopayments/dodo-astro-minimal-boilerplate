# Dodo Payments Astro Boilerplate

A minimal Astro boilerplate for integrating [Dodo Payments](https://dodopayments.com/) into your [Astro](https://astro.build/) application.

## Features

- **Quick Setup** - Get started in under 5 minutes
- **Payment Integration** - Pre-configured checkout flow using `@dodopayments/astro`
- **Modern UI** - Clean, dark-themed pricing page with Tailwind CSS
- **Webhook Handler** - Ready-to-use webhook endpoint for payment events
- **Customer Portal** - One-click subscription management
- **TypeScript** - Fully typed with minimal, focused types
- **Pre-filled Checkout** - Demonstrates passing customer data to improve UX

## Prerequisites

Before you begin, make sure you have:

- **Node.js LTS version** (required for Astro 5)
- **Dodo Payments account** (to access API and Webhook Keys from dashboard)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/dodopayments/dodo-astro-minimal-boilerplate.git
cd dodo-astro-minimal-boilerplate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Get API Credentials

Sign up at [Dodo Payments](https://dodopayments.com/) and get your credentials from the dashboard:

- **API Key:** [Dashboard → Developer → API Keys](https://app.dodopayments.com/developer/api-keys)
- **Webhook Key:** [Dashboard → Developer → Webhooks](https://app.dodopayments.com/developer/webhooks)

> Make sure you're in **Test Mode** while developing!

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the values with your Dodo Payments credentials:

```env
DODO_PAYMENTS_API_KEY=your_api_key_here
DODO_PAYMENTS_WEBHOOK_KEY=your_webhook_signing_key_here
DODO_PAYMENTS_RETURN_URL=http://localhost:4321/
DODO_PAYMENTS_ENVIRONMENT=test_mode
```

### 5. Add Your Products

Update `src/lib/products.ts` with your actual product IDs from Dodo Payments:

```typescript
export const products: Product[] = [
  {
    product_id: "pdt_001", // Replace with your product ID
    name: "Basic Plan",
    description: "Get access to basic features and support",
    price: 9999, // in cents
    features: [
      "Access to basic features",
      "Email support",
      "1 Team member",
      "Basic analytics",
    ],
  },
  // ... add more products
];
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see your pricing page!

## Project Structure

```
src/
├── components/
│   ├── Footer.astro           # Reusable footer
│   ├── Header.astro           # Navigation header
│   └── ProductCard.astro      # Product pricing card
├── layouts/
│   └── Layout.astro           # Root layout
├── lib/
│   └── products.ts            # Product definitions
├── pages/
│   ├── index.astro            # Pricing page (home)
│   └── api/
│       ├── checkout.ts        # Checkout session handler
│       ├── customer-portal.ts # Customer portal redirect
│       └── webhook.ts         # Webhook event handler
└── styles/
    └── global.css             # Global styles with Tailwind
```

## Customization

### Update Product Information

Edit `src/lib/products.ts` to modify:
- Product IDs (from your Dodo dashboard)
- Pricing
- Features
- Descriptions

### Pre-fill Customer Data

In `src/components/ProductCard.astro`, replace the hardcoded values with your actual user data:

```typescript
customer: {
  name: "John Doe",
  email: "john@example.com",
},
```

### Update Customer Portal Link

In `src/components/Header.astro`, replace the hardcoded customer ID with the actual customer ID from your auth system ordatabase:

```typescript
const CUSTOMER_ID = "cus_001"; // Replace with actual customer ID
```

## Webhook Events

The boilerplate demonstrates handling webhook events in `src/pages/api/webhook.ts`:

- `onSubscriptionActive` - Triggered when a subscription becomes active
- `onSubscriptionCancelled` - Triggered when a subscription is cancelled

Add your business logic inside these handlers:

```typescript
onSubscriptionActive: async (payload) => {
  // Grant access to your product
  // Update user database
  // Send welcome email
},
```

Add more webhook events as needed.

For local development, you can use tools like [ngrok](https://ngrok.com/) to create a secure tunnel to your local server.

## Deployment

This boilerplate uses static output with on-demand rendering for API routes. You'll need to install an adapter for your deployment platform:

| Platform | Guide |
|----------|-------|
| Vercel | [Deploy to Vercel](https://docs.astro.build/en/guides/deploy/vercel/) |
| Netlify | [Deploy to Netlify](https://docs.astro.build/en/guides/deploy/netlify/) |
| Cloudflare | [Deploy to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/) |

See [Astro's deployment guides](https://docs.astro.build/en/guides/deploy/) for all platforms.

### Update Webhook URL

After deploying, update your webhook URL in the [Dodo Payments Dashboard](https://app.dodopayments.com/developer/webhooks):

```
https://your-domain.com/api/webhook
```

Also remember to update the `DODO_PAYMENTS_WEBHOOK_KEY` environment variable in your production environment to match the webhook signing key for your deployed domain.

## Learn More

- [Dodo Payments Documentation](https://docs.dodopayments.com/)
- [Checkout Sessions Documentation](https://docs.dodopayments.com/developer-resources/checkout-sessions)
- [Webhooks Documentation](https://docs.dodopayments.com/developer-resources/webhooks)
- [Astro Documentation](https://docs.astro.build/)

## Support

Need help? Reach out:
- [Dodo Payments Discord](https://discord.gg/bYqAp4ayYh)
- [GitHub Issues](https://github.com/dodopayments/dodo-astro-minimal-boilerplate/issues)
