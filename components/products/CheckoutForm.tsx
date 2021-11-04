import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements?.getElement(CardElement);
    if (!cardElement) return;

    const res = await stripe?.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!res) return console.log("no res");

    const { paymentMethod, error } = res;
    if (error) console.log(error);
    console.log(paymentMethod);
  };
  return (
    <Form onSubmit={onSubmit}>
      <ProductCard />
      <CardElement />
      <button type="submit">buy</button>
    </Form>
  );
};

const Form = styled.form`
  width: 50%;
  border: 1px solid #aaa;
  border-radius: 10px;
`;
