import React from 'react';

const AddProduct = () => {



    const handleAddProduct = e => {
        e.preventDefault()
        const product = {
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
            available: e.target.quantity.value,
            Minimum: e.target.minimum.value,
            img: e.target.img.value
        }

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })



    }

    return (
        <div className='mt-5'>
            <h1 className='text-2xl uppercase text-center mb-3'>write product details </h1>
            <form
                onSubmit={handleAddProduct}
                className='grid grid-cols-1 justify-items-center  gap-3'>
                <input type="text" name='name' placeholder="PRODUCT NAME" required class="input input-bordered w-full max-w-xs" />
                <textarea type="text" name='description' placeholder="DESCRIPTION" required class="textarea input-bordered w-full max-w-xs" />
                <input type="text" name='price' placeholder="PRICE" required class="input input-bordered w-full max-w-xs" />
                <input type="text" name='quantity' placeholder="AVAILABLE QUANTITY" required class="input input-bordered w-full max-w-xs" />
                <input type="text" name='minimum' placeholder="MINIMUM ORDER" required class="input input-bordered w-full max-w-xs" />
                <input type="text" name='img' placeholder="Type here" required class="input input-bordered w-full max-w-xs" />
                <input type="submit" value='ADD' class="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddProduct;