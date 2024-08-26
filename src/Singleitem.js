import React from "react";
import Rating from '@mui/material/Rating';
import styled from "styled-components";
const Singleitem=({data})=>{
    return(
    
        <div className=" col-4 w-30  shadow p-3">
            <img className="w-50"src={data.images}></img>
            <hr></hr>
            
            <h6>name:{data.name}</h6>
            <Rating readOnly={true} name="no-value" defaultValue={3.5} precision={0.5} value={data.Rating} />
            <h6>brand:{data.brand}</h6>
            <h6>{data.description}</h6>
            <h6>price $:{data.price}</h6>
            <button class="btn btn-warning w-50 mt-3 ms-2" >Addtocart</button>
            <Design>
            <button class="btn btn-warning w-50 mt-3 ms-2">Buynow</button>
            </Design>
   
        </div>

    )

}
export default Singleitem
const Design=styled.div`
.btn{
    background-color:red;
}`