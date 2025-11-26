export type Product = {
  product_id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
};

// Replace these product IDs with your actual product IDs from Dodo Payments dashboard
export const products: Product[] = [
  {
    product_id: "pdt_001",
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
  {
    product_id: "pdt_002",
    name: "Premium Plan",
    description: "Get access to premium features and support",
    price: 19999, // in cents
    features: [
      "Access to all features",
      "Priority 24/7 support",
      "Unlimited team members",
      "Advanced analytics",
      "Custom integrations",
    ],
  },
];
