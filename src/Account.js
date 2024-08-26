import React, { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import { ClassNames } from "@emotion/react";
const Account=()=>{
        const userid=localStorage.getItem('saved_userid')
        const[mydata,setMydata]=useState(null)

        const[userdata,setUserdata]=useState(JSON.parse(localStorage.getItem('saved_userid')))
        console.log(userdata.first_name)

        useEffect(()=>{
        if(userid){
            FetchData()

        }
    },[])
    const FetchData=async()=>{
        const data=new FormData()
        data.append("user_id",userid)
        const response=await axios.post("https://gist.manojkoravangi.com/get-account.php",data,{headers:{"Content-type":"multipart/form-data"}})
        if(response){
            console.log(response.user_data)
            setMydata(response.data.user_data)
        }
    }
    const logout=()=>{
        localStorage.setItem('saved_userid',null)
        window.location.reload()

    }

    return(<div>
        <div className="w-50 d-flex ">
            <div className="col-3 w-50 d-block border d-flex ms-5 mt-5">
                <img className="d-flex ms-2 mt-2"src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"></img>
                <div className="ms-3 mt-2">
                <h6>Your Orders</h6>
                <p>Track,return,buythings again</p>
                </div>
            </div>
            <div className="col-3 w-50 d-block border d-flex ms-5 mt-5">
                <img className="d-flex ms-2 mt-2"src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png"></img>
                <div className="ms-3 mt-2">
                <h6>Login&security</h6>
                <p>Edit login,name and moblie number</p>
                
                </div>
            </div>
            <div className="col-3 w-50 d-block border d-flex ms-5 mt-5">
                <img className="d-flex ms-2 mt-2"src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png"></img>
                <div className="ms-3 mt-2">
                <h6>Prime</h6>
                <p>View benefits and payment settings</p>
                
                </div>
            </div>
        </div>
        <div className="w-50 d-flex ">
            <div className="col-3 w-50 d-block border d-flex ms-5 mt-5 mb-4">
                <img className="d-flex ms-2 w-25 mt-2 mb-4"src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png"></img>
                <div className="ms-4 mt-2">
                <h6>Your Addresses</h6>
                <p>Edit addresses for ordersand gifts</p>
                </div>
            </div>
            <div className="col-3 w-50 d-block border d-flex ms-5 mt-5 mb-4">
                <img className="d-flex ms-2 w-25 mt-2 mb-4"src="https://m.media-amazon.com/images/G/31/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250268_.jpg"></img>
                <div className="ms-4 mt-2">
                <h6>Your   business account</h6>
                <p>Sign up for free to save up to 28% with GST invoice and bulk discounts and purchases on credit</p>
                </div>
            </div>
            <div className="col-3 w-50 d-block border d-flex ms-5 mt-5 mb-4">
                <img className="d-flex ms-2 w-25 mt-2"src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png"></img>
                <div className="ms-4 mt-2">
                <h6>Payment options</h6>
                <p>Edit or add payment methods</p>
                
                </div>
            </div>
        </div>
        <div className="col-3 w-25 d-block border d-flex ms-5 mt-5">
                <img className="d-flex ms-2 w-25 mt-2 mb-4"src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png"></img>
                <div className="ms-3 mt-2">
                <h6>Your Addresses</h6>
                <p>Edit addresses for ordersand gifts</p>
                </div>
            </div>
        
    </div>

    )
}
        export default Account
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        /**<div>
    {userdata?
    <div>
        <h1>{userdata.first_name}</h1>
        <h1>{userdata.user_id}</h1>
        <h1>{userdata.last_name}</h1>
        </div>:null}
{mydata?
<div>
    <h1>{mydata.first_name}</h1>
    <h1>{mydata.email}</h1>
    <button class="btn btn-warning w-100 mt-3" onClick={()=>{logout()}}>Next</button>
    
    </div>:null}
    </div> */
