import React from 'react'
import Navbar from '../Home/Navbar/Navbar'

const AddProduct = () => {

    const addProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const brand_name = form.brand_name.value;
        const description = form.description.value;

        const product = { name, image, price, brand_name, category, rating, description }
        console.log(product)

    }


  return (
      <div>
          <div className='bg-[#4b2b1f] mb-10'>
              <Navbar />
          </div>
          <div className='container mx-auto mb-10 bg-[#FF6617] p-4 lg:p-20 rounded-lg bg-blend-overlay bg-opacity-70'>
              <div className='text-center mb-10'>
                  <h1 className='text-5xl font-thin font-primary text-[#374151] drop-shadow-2xl'>Add New Product</h1>
                  <p className='text-lg font-thin mt-4'></p>
              </div>
              <form onSubmit={addProduct}>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                      <div className='space-y-4'>
                          <label className='text-xl font-bold'>Name</label>
                          <input type="text" name='name' placeholder="Enter product name" className="input input-bordered w-full border-none" required />
                      </div>
                      <div className='space-y-4'>
                          <label className='text-xl font-bold'>Image</label>
                          <input type="text" name='image' placeholder="Enter product image link" className="input input-bordered w-full border-none" required />
                      </div>
                      <div className='space-y-4'>
                          <label className='text-xl font-bold'>Brand Name</label>
                          <input type="text" name='brand_name' placeholder="Enter brand name" className="input input-bordered w-full border-none" required />
                      </div>
                      <div className='space-y-4'>
                          <label className='text-xl font-bold'>Price</label>
                          <input type="text" name='price' placeholder="Enter price in taka" className="input input-bordered w-full border-none" required />
                      </div>
                      <div className='space-y-4'>
                          <label className='text-xl font-bold'>Category</label>
                          <input type="text" name='category' placeholder="Enter product category" className="input input-bordered w-full border-none" required />
                      </div>
                      <div className='space-y-4'>
                          <label className='text-xl font-bold'>Rating</label>
                          <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered w-full border-none" required />
                      </div>
                  </div>
                  <div className='space-y-4 mt-6'>
                      <label className='text-xl font-bold'>Descrtption</label>
                      <input type="text" name='description' placeholder="Enter product short description" className="input input-bordered w-full border-none " required />
                  </div>
                  <div className='space-y-4 mt-10'>
                      <input type="submit" value="Add Product" className="input capitalize btn text-2xl font-thin input-bordered w-full font-primary bg-[#FF6617] hover:bg-[#FF6617] border-black" />
                  </div>
              </form>
          </div>
      </div>
  )
}

export default AddProduct