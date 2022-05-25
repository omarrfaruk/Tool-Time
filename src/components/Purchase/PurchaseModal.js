import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const PurchaseModal = ({ details, setDetails, orderQuantity }) => {
    const [user] = useAuthState(auth)

    const handleModal = (e) => {
        e.preventDefault()
        const orderDetails = {
            productName: details.name,
            customerName: user.displayName,
            customerEmail: user.email,
            orderQuantity,
            price: details.price * orderQuantity,
            address: e.target.address.value,
            phone: e.target.number.value

        }
        console.log(orderDetails);
        const url = 'https://secure-refuge-17271.herokuapp.com/orders'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setDetails('')
            })
    }


    return (
        <div>

            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box mx-auto">
                    <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center mb-5 text-2xl">{details?.name}</h3>
                    <form onSubmit={handleModal} className='grid grid-cols-1  justify-items-center'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" value={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' value={orderQuantity + 'pcs'} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Total Price</span>
                            </label>
                            <input type="text" name='price' value={'Price:$' + orderQuantity * details.price} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type="text" name='address' placeholder="Address" className="input my-3 input-bordered w-full   max-w-xs" />
                        <input type="text" name='number' placeholder="Contact Number" className="input mb-2 input-bordered w-full max-w-xs" />
                        <input type="submit" value='Place Order' className="input input-bordered  hover:bg-slate-400 hover:text-white font-bold w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default PurchaseModal;