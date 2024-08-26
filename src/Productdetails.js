import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const parameters=useParams()
  const[details,setDetails]=useState(null)
  const productid=parameters.itemid
  const GetDetails=async()=>{
    const data=new FormData()
    data.append("product_id",productid)
    const response=await axios.post("https://gist.manojkoravangi.com/get-product-details.php",data,{header:{"content-type":"multipart/form-data"}})
    if(response){
      if(response.data.status==="success"){
        setDetails(response.data.data)
      }
    }
  }
  useEffect(()=>{
    GetDetails()
 },[])

    const AddToCart=async(product_id)=>{
        const data=new FormData()
        data.append("user_id",4)
        data.append("quantity",6)
        data.append("product_id",product_id)
        const response=await axios.post("https://gist.manojkoravangi.com/insert-cart.php",data,{header:{"content-type":"multipart/form-data"}})
        if(response){
          if(response.data.status==="success"){
            alert("Added to cart successfully")
          }
          else{
            alert("Error") 
          }
        }  
      }

      const[products,setProducts]=useState(null)
      useEffect(()=>{
        GetProducts()
     })
      const GetProducts=async()=>{
        const data=new FormData()
        const response=await axios.post("https://gist.manojkoravangi.com/get-products.php",data,{header:{"content-type":"multipart/form-data"}})
        if(response){
          setProducts(response.data.products)
        }  
      }

  return (
    <div>
      {products?
        <div className="category flex-wrap mt-5 d-flex w-100">
        {products.map((item)=>(
         <div className="parent d-flex">

         <div className="div d-flex w-100 mt-5">
            <div className="left w-40">
         <img className="w-100 pt-2 " src={item.images}></img>
         </div>
        <div className="right ml-4 pl-4 mt-5">
         <div className="box border-0 rounded rounded-0 m-1 mb-2 p-5 w-100">
         <h6>{item.name}</h6>
            <a href="#">Visit the Panasonic Store</a>
            <p className='boxx mt-5'>800+ bought in past month</p><hr></hr>
            <h4><span className="text-danger">{item.discount}%</span> ₹{item.price}</h4>
            <p>M.R.P.: <span className="rate">₹{item.cutoff_price}</span></p>
            <p>Inclusive of all taxes</p>
            <p>EMI starts at ₹271. No Cost EMI available <span className="text-danger">Emi options</span></p><hr></hr>
         </div>
         </div>

         <div className="w-25 box border border-1 mt-5">
            <h3>₹{item.price}</h3>
            <p className="px-4">FREE scheduled delivery as soon as Thursday, 13 June, 7 AM - 9 PM. Order within 23 hrs 32 mins. Details</p>
            <h6>Delivering to Nellore 524004 - Update location</h6>
            <h4 className="text-success ">In stock</h4>
         <button onClick={()=>AddToCart()} className="btn btn-warning fs-6 me-1">Add to Cart</button>
         </div>
         </div>
         </div>
  ))}
  </div>:null}
  </div>
  )
}
export default ProductDetails