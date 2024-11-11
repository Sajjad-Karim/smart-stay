/* eslint-disable react/prop-types */
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!elements) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    const res = await fetch('http://localhost:8000/api/user/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency: 'pkr' }), // Pass amount here
    });
    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'http://localhost:5173/checkout-status',
      },
    });

    if (error) setErrorMessage(error.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        className="p-3 px-10 mt-1 rounded-md bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold shadow-lg hover:from-green-600 hover:to-teal-600 transition duration-300 transform hover:scale-105"
        disabled={!stripe || !elements}
      >
        Pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
