import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3YPwIPu9QtKCLZn4S5a9mXsv4pTGnQGWY3ZqBrO3zrhn67c5Lf1ri3xtu6ybCeQPnd3ghA5gZ3Y33lZYqN0Ie600boPsNvxB');


const Payment = () => {
    const { id } = useParams()

    const { data, isLoading } = useQuery(['orders', id], () => fetch(`http://localhost:5000/orders/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>payment for {id}</h2>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hello{data?.customerName}</h2>
                    <p>Please Pay for {data?.productName} ${data.price}</p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;