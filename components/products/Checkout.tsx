import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";
const stripePromise = loadStripe(String(process.env.GATSBY_STRIPE_PUBLISH_KEY));

export const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CheckoutForm />
      </div>
    </Elements>
  );
};
