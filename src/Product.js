import React, { useEffect, useState } from "react"
import logo5 from "./images/logo5.jpg"
import logo6 from "./images/logo6.png"
import logo7 from "./images/logo7.png"
import logo8 from "./images/logo8.png"
import logo9 from "./images/logo9.png"
import logo10 from "./images/logo10.png"
import { useParams } from "react-router-dom"
import axios from "axios"




function Product(){
     const parameters= useParams()
    console.log(parameters.item_id)
    const [details,setDetails]=useState(null)
    const product_id=(parameters.item_id)
    const Details=async()=>{
        const data=new FormData()
        data.append("product_id",product_id)
        const response= await axios.post("https://gist.manojkoravangi.com/get-product-details.php",
            data,{headers:{"Content-type":"multipart/form-data"}})
            if(response){
            if(response.status==="success"){
                     setDetails(response.data.data)
            }
    }
}
    useEffect(()=>{
        Details()
    })
    
    return (<div>
        {details?<div>
            <div className="container">
            {details.map((details)=>(
           <div className=" col-12 shadow p-3">
            <img src={details.images}></img>
            <hr></hr>
            <h6>ratings:{details.ratings}</h6>
            <h6>brand:{details.brand}</h6>
            <h6>{details.name}</h6>
            <h6>price $:{details.price}</h6>



            
             
        </div>))}
        </div>
        

        </div>
        :null}
    </div>)}

        
   /**  <div class="product">
        <div className="div d-flex w-100 mt-5">
            <div className="left  w-40">
            <img className="logo5 w-100 pt-2" src={logo5}></img>
            </div>
                <div className="right   ml-4 pl-4 d-flex">
                    <div clasName="left1 mt-2 ">
                        <h4>OnePlus 12 (Glacial White, 12GB RAM, 256GB Storage)</h4>
                        <div className="hp">
                        <p>Visit the OnePlus Store</p>
                        <p>Search this page/</p>
                        </div>
                        <div className="hp1">
                        <p>500+ bought in past month</p>
                        </div>
                        <hr></hr>
                        <p>₹64,999</p>
                        <p>Inclusive of all taxes</p>
                        <p>EMI starts at ₹3,151. No Cost EMI available EMI options</p>
                        <hr></hr>
                        <div className="boox  d-flex  ">
                            <div class="boox1 d-block w-40 border ml-2 mt-2 pt-2 ">
                            <h6>No Cost EMI</h6>
                            <p>Upto ₹6,526.40 EMI </p>
                            <p>interest savings on..</p>
                            <p class="bo1 mt-2">1 offer</p>
                            </div>
                            <div class="boox1 d-block w-40 border ml-2 mt-2 pt-2">
                            <h6>Bank Offer</h6>
                            <p>Upto ₹3,000.00</p> 
                            <p>discount on select</p>
                            <p> Credit Cards, HDFC..</p> 
                            <p class="bo1 mt-2">39 offers</p>
                            </div>
                            <div class="boox1 d-block w-40 border ml-2 mt-2 pt-2">
                            <h6>Partner Offers</h6>
                            <p>Get GST invoice and</p> <p>save up to 28% on </p>
                            <p class="bo1 mt-2">1 offer</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                        <div className="block1 d-flex">
                            <div class="bo  w-20 ">
                            <img className="logo6 " src={logo6}></img>
                            <p>7 days Service</p>
                            <p> Centre </p>
                            <p>Replacement</p>
                            </div>
                            <div class="bo  w-20 ">
                            <img className="logo6 " src={logo7}></img>
                            <p>Free Delivery</p>
                            </div>
                            <div class="bo  w-20 ">
                            <img className="logo6 " src={logo8}></img>
                            <p>1 Year </p>
                            <p>Warranty</p>
                            </div>
                            <div class="bo  w-20 ">
                            <img className="logo6 " src={logo9}></img>
                            <p>Top Brand</p>
                            </div>
                            <div class="bo w-20 ">
                            <img className="logo6 " src={logo10}></img>
                            <p>Amazon </p>
                            <p>Delivered</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="brand d-flex">
                            <div className="brand1 mt-1">
                            <p>Style Name:</p>
                            <h6>Brand</h6>
                            <h6>Operating System </h6>
                            <h6>RAM Memory</h6> 
                            <h6>Installed Size</h6>	
                            <h6>CPU Model</h6>	
                            <h6>Memory Storage 	</h6>
                            <h6>Capacity	</h6>
                            </div>
                            <div className="brand2">
                            <h6>Glacial White, 12GB RAM, 256GB Storage</h6>
                            <p>One plus</p>
                            <p>OxygenOS</p>
                            <p>12 GB</p>
                            <p>Snapdragon</p>
                            <p>256 GB</p>
                            </div>
                        </div>
                           
                    </div>
                
                    </div>
                    </div>
                    <div className="thirdd border">
                        <div className="nav1 ">
                            <h6>With Exchange</h6>
                            <p>Up to 50,900.00 off</p>
                            <hr></hr>
                            <h6>With Exchange</h6>
                            <p>Up to 50,900.00 off</p>
                        </div>
                        <div className="nav1">
                        <p>FREE delivery Saturday, 15</p>
                        <p> June. Details</p>
                        <p>Or fastest delivery Tomorrow,</p>
                        <p>14 June. Order within 7 hrs 36 mins.</p>
                        <p> Details</p>
                        </div>
                        <p>Delivering to Nellore 524004 -</p> 
                        <p>Update location</p>
                        <div>
                        <button class="btn btn-warning w-50 mt-3 "  >Addcart</button>
                        </div>
                        <div>
                        <button class="btn btn-warning w-50 mt-3 " >Buynow</button>
                        </div>
                    </div>
                
            

        </div>

    </div>)

} */
export default  Product