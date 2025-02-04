# Astro - Dodo Payments Minimal Boilerplate

A minimal boilerplate to integrate [Dodo Payments](https://dodopayments.com/) with [Astro](https://astro.build/).

## 🚀 Getting Started

Follow these steps to set up and run the project.

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/dodopayments/dodo-astro-minimal-boilerplate.git
cd dodo-astro-minimal-boilerplate
```

### 2️⃣ Get API Credentials
Obtain the **API Key** and **Webhook Signing Key** from your Dodo Payments dashboard while in Test Mode:
- **API Key:** [Get it here](https://app.dodopayments.com/developer/api-keys)
- **Webhook Key:** [Get it here](https://app.dodopayments.com/developer/webhooks)

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory (where `.env.example` exists):
```sh
touch .env
```
Copy the contents from `.env.example` and update the following values with your keys from Dodo Payments:
```ini
DODO_API_KEY_TEST=your_api_key_here
DODO_PAYMENTS_WEBHOOK_KEY=your_webhook_key_here
```

When you are testing webhooks locally, you would expose your localhost to the web using tools similar to [Ngrok](https://ngrok.com/).
Please add the url provided by ngrok to the allowed_hosts list in astro.config.mjs for the webhooks to be delivered.


### 4️⃣ Install Dependencies
```sh
npm install
```

### 5️⃣ Run the Project
```sh
npm run dev
```

## 🎉 You're all set!
Your Astro project is now configured with Dodo Payments. Happy coding! 🚀
