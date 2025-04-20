import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../Components/UseAuth/UseAxiosSecure";
import UseCart from "../../../../Components/UseAuth/UseCart";
import UseAuth from "../../../../Components/UseAuth/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const { user } = UseAuth()
    //user log-in kora thakbe tai amra aikahne axiosSecure use korbo
    const axiosSecure = UseAxiosSecure()
    const [cart, refetch] = UseCart()
    const navigate = useNavigate()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);



    //now we send the data to the backend 
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure, totalPrice])


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
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorMessage(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErrorMessage('');
        }



        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            }
        );

        if (confirmError) {
            console.log('confirmError', confirmError.message);
            setErrorMessage(confirmError.message);
        }
        else {
            console.log(' paymentIntent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)




                //now save the payment to the database
                //client code
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),//utc date convert,use moment js to 
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending",

                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                refetch()
                if (res.data?.paymentResult?.insertedId) {
                   
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for your payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory');
                }
            }

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
                disabled={!stripe || !clientSecret}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            >
                Pay
            </button>
            <><p>{errorMessage}</p>
                {transactionId && <p className="text-green-400"> your transaction id:{transactionId}</p>

                }
            </>
        </form>
    );
};


export default CheckoutForm;
