import React from 'react'

export default function Products() {
  const products = [
    {
      image:"src/assets/fried bucket.webp",
      name:"Bucket chicken",
      price:"$20.00"
    },
    {
      image:"src/assets/fries.webp",
      name:"Chef's choice",
      price:"$8.00"
    },
    {
      image:"src/assets/strips.webp",
      name:"Strips",
      price:"$10.00"
    },
    {
      image:"src/assets/pepsi.webp",
      name:"Pepsi",
      price:"$15.00"
    },
    {
      image:"src/assets/masala fries.jpg",
      name:"Masala Fries",
      price:"$5.00"
    },
    {
      image:"src/assets/loaded fries.jpg",
      name:"Loaded Fries",
      price:"$50.00"
    },
    {
      image:"src/assets/fried.jpg",
      name:"Fried chicken",
      price:"$20.00"
    },
    {
      image:"src/assets/boxed-meal.jpg",
      name:"Boxed Meal",
      price:"$17.00"
    },
  ]
  return (
   

      <div className='product-session'>
        <h1 className='product-title'>SAVOR THE FLAVOR</h1>
        <div className='product-row'>


      {products.map((items,index)=>(
        <div className='product-card' key={index}>
          <img className='product-images' src={items.image}  /> 
          <p className='product-names'>{items.name}</p>
          <p className='product-price'>{items.price}</p>
        </div>
      )
      )}

        </div>
         
      </div>

      
      
  
  )
}
