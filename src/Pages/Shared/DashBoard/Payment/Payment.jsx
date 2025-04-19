import { loadStripe } from "@stripe/stripe-js";
import Titles from "../../../../Components/Titles/Titles";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
    return (
        <div>
            <Titles
                heading="---Ready for Reservation?---" subHeading="PAYMENT" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>


            </div>

        </div>

    );
};

export default Payment;
