import React from 'react'
import Navbar from '../Components/Home/Navbar/Navbar'
import Swal from 'sweetalert2'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

    // const id = useParams();
    const data = useLoaderData();
    // console.log(data)
    const navigate = useNavigate()

    const updateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const brand_name = form.brand_name.value.toLowerCase();

        const updateProduct = { name, image, price, brand_name, category, rating }

        fetch(`https://brand-shop-zeta.vercel.app/update/${data._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateProduct),
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                Swal.fire(
                    'Successfully!',
                    'Product Update successfully!',
                    'success'
                )
                navigate('/')
            }
        )
    }

    return (
        <div>
            <div className='bg-[#4b2b1f] mb-10'>
                <Navbar />
            </div>
            <div className='container mx-auto mb-10 bg-[#4b2b1f] p-4 lg:p-20 rounded-lg bg-blend-overlay bg-opacity-70'>
                <div className='text-center mb-10'>
                    <h1 className='text-5xl font-thin font-primary text-[white] drop-shadow-2xl'>Update Existing Product</h1>
                    <p className='text-lg font-thin mt-4'></p>
                </div>
                <form onSubmit={updateProduct}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Name</label>
                            <input type="text" name='name' defaultValue={data?.name} placeholder="Enter product name" className="input input-bordered w-full border-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Image</label>
                            <input type="text" name='image' defaultValue={data?.image} placeholder="Enter product image link" className="input input-bordered w-full border-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Brand Name</label>
                            <select name="brand_name" type="text" className='select text-gray-500 select-bordered w-full border-none'>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>Microsoft</option>
                                <option>Google</option>
                                <option>HP</option>
                                <option>Intel</option>
                                <option>Sony</option>
                                <option>Lenovo</option>
                            </select>
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Price</label>
                            <input type="text" name='price' defaultValue={data?.price} placeholder="Enter price in taka" className="input input-bordered w-full border-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Category</label>
                            <input type="text" name='category' defaultValue={data?.category} placeholder="Enter product category" className="input input-bordered w-full border-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Rating</label>
                            <input type="text" name='rating' defaultValue={data?.rating} placeholder="Enter rating" className="input input-bordered w-full border-none" required />
                        </div>
                    </div>
                    <div className='space-y-4 mt-10'>
                        <input type="submit" value="Update Product" className="input text-white capitalize btn text-2xl font-thin input-bordered w-full font-primary bg-[#4b2b1f] hover:bg-[#4b2b1f] border-black" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct