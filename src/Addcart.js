import React, { useState } from "react";
import axios  from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Singleitem from "./Singleitem";
const ProductList=()=>{
    const [Products,setProducts]=useState(null)
    const Product=async()=>{
        const data=new FormData()
        const response=await axios.post("https://gist.manojkoravangi.com/get-products.php",
            data,{headers:{"Content-type":"multipart/form-data"}})
            if(response){
                console.log(response.data)
                if(response.data.status==="success")
                    {
                        setProducts(response.data.products)
                    }
            }

    }
    useEffect(()=>{
        Product()
    })
    const saved_userid=localStorage.getItem('saved_userid') 
    const cart=async(product_id)=>{
        const data=new FormData()
        data.append("user_id",saved_userid)
        data.append("quantity",1)
        data.append("productid",product_id)
        const response=await axios.post("https://gist.manojkoravangi.com/insert-cart.php",
            data,{headers:{"Content-type":"multipart/form-data"}})
            if(response){
                console.log(response.data)
                if(response.data.status==="success")
                    {
                        alert("added to cart successfully")
                    }
                    else{
                        alert("error")
                    }
            }
        
    }
    
    return(<div>
        {Products?<div className=" conta d-flex flex-wrap">
            
            {Products.map((value)=>(
                <Singleitem data={value}/>
            ))}
        </div>
    
        :null}
    </div>)}
export default ProductList

