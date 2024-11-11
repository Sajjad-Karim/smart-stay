import { useEffect, useState } from 'react';
import { useStripe, Elements } from '@stripe/react-stripe-js';
import { Link, useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51N1DJEJRXQxu7LELfm2UsxelDgjTpa8UwL10niN2GVxhXPc5ChEJFf9gWBgmyPS52pVDpGBuFzJ8BfCR3yzdmJNd00oh1nvAll'
);

const CheckoutStatusPage = () => {
  const stripe = useStripe();
  const location = useLocation();
  const [status, setStatus] = useState(null);
  const [transactionDetails, setTransactionDetails] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    // const paymentIntentId = query.get('payment_intent');
    const clientSecret = query.get('payment_intent_client_secret');
    const redirectStatus = query.get('redirect_status');

    if (stripe && redirectStatus === 'succeeded') {
      setStatus('Payment successful!');

      if (clientSecret) {
        stripe
          .retrievePaymentIntent(clientSecret)
          .then(({ paymentIntent }) => {
            if (paymentIntent) {
              setTransactionDetails({
                amount: paymentIntent.amount / 100,
                currency: paymentIntent.currency.toUpperCase(),
                status: paymentIntent.status,
                created: new Date(
                  paymentIntent.created * 1000
                ).toLocaleString(),
                id: paymentIntent.id,
              });
            }
          })
          .catch((error) => {
            console.error('Error retrieving payment intent:', error);
            setStatus('Error retrieving payment status.');
          });
      }
    } else if (redirectStatus === 'failed') {
      setStatus('Payment failed. Please try again.');
    }
  }, [location, stripe]);

  return (
    <div className="mt-5 max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg font-mono">
      <h2 className="text-2xl font-bold text-[#20C36A] text-center mb-6">
        {status}
      </h2>
      {transactionDetails && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Transaction Details
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between text-gray-500 bg-gray-50 p-2 rounded-md">
              <strong>Transaction ID:</strong> {transactionDetails.id}
            </li>
            <li className="flex justify-between  text-gray-500 bg-gray-50 p-2 rounded-md">
              <strong>Amount:</strong> {transactionDetails.amount}{' '}
              {transactionDetails.currency}
            </li>
            <li className="flex justify-between  text-gray-500 bg-gray-50 p-2 rounded-md">
              <strong>Status:</strong> {transactionDetails.status}
            </li>
            <li className="flex justify-between  text-gray-500 bg-gray-50 p-2 rounded-md">
              <strong>Payment Date:</strong> {transactionDetails.created}
            </li>
          </ul>
          <p className=" text-gray-500 mt-4 text-center">
            Thank you for choosing SMART-STAY
          </p>
          <p className=" text-gray-500 mt-2 text-center">
            Have a Nice SMART-STAY
          </p>
          <hr />
          <Link to={'/'}>
            <div className="mt-4 flex justify-center items-center">
              <button
                type="button"
                className="bg-gray-300 text-gray-500 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
              >
                Explore More
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

const WrappedCheckoutStatusPage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutStatusPage />
  </Elements>
);

export default WrappedCheckoutStatusPage;
