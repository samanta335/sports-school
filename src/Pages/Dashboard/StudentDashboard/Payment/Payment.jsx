import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import UseSelectClass from "../../../../Hook/UseSelectClass";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  const [selectClass] = UseSelectClass();
  const total = selectClass.reduce((sum, Class) => sum + Class.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <h3 className="text-3xl mb-5  text-center">Payment</h3>
      <div className="max-w-screen-lg ms-auto ">
        <Elements stripe={stripePromise}>
          <CheckoutForm selectClass={selectClass} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
