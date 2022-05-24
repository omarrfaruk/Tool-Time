import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleReview = e => {
        e.preventDefault()
        const reviewValue = e.target.Review?.value;
        const review = {
            name: user?.displayName,
            review: reviewValue
        };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (

        <div className='h-screen'>
            <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className='text-xl bold text-center'>Share Your Opinion</h2>
                    <form
                        onSubmit={handleReview}
                        className='grid gap-5'>
                        <input type="text" value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                        <textarea type="text" name='Review' placeholder="Write Your Opinion" class="textarea input-bordered w-full max-w-xs" required />
                        {/* <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div> */}
                        <input type="submit" class="input btn btn-outline input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddReview;