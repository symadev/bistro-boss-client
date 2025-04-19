import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../Components/UseAuth/UseAxiosSecure";
import UseCart from "../../../../Components/UseAuth/UseCart";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    //user log-in kora thakbe tai amra aikahne axiosSecure use korbo
const axiosSecure = UseAxiosSecure()
const [cart ]= UseCart()
const totalPrice = cart.reduce((total,item )=>total+item.price,0);



    //now we send the data to the backend 
    useEffect(() =>{
        axiosSecure.post('/create-payment-intent',{price: totalPrice})
        .then (res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })

    },[axiosSecure,totalPrice])


//     useEffect এর কারণে এই call শুধু component mount হওয়ার পর একবারই হবে।

// যখন checkout form শুরু হবে, তখনই Stripe-এর জন্য server-side থেকে clientSecret তৈরি করে আনা হবে,
//  যেটা Stripe পেমেন্ট authorize করার জন্য দরকার।

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }


        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }



        // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setErrorMessage(errorMessage.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setErrorMessage('');
      }
    };
  


   

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md space-y-4">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                type="submit"
                disabled={!stripe||! clientSecret}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            >
                Pay
            </button>
            <><p>{errorMessage}</p>
            </>
        </form>
    );
};


export default CheckoutForm;
