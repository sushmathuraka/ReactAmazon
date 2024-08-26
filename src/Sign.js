import React, {useState} from "react"
import logo1 from "./images/logo1.jpeg"
import axios from "axios"
import Modal from "react-modal";

const Sign=()=>{
const[username,setUsername]=useState(null)
const[Fname,setFName]=useState(null)
const[Lname,setLName]=useState(null)
const[email,setEmail]=useState(null)
const[password,setPassword]=useState(null)
const[phonenumber,setPhonenumber]=useState(null)
const[address,setAddress]=useState(null)
console.log("username" +username) 
console.log("fname" +Fname) 
console.log("lname" +Lname) 
console.log("email" +email)
console.log("password" +password)
console.log("phonenumber" +phonenumber)
console.log("address" +address) 
const createaccount=async()=>{
const data=new FormData()
data.append("username",username)
data.append("first_name",Fname)
data.append("last_name",Lname)
data.append("email",email)
data.append("password",password)
data.append("phone_number",phonenumber)
data.append("address",address)
const response=await axios.post("https://gist.manojkoravangi.com/insertuserdata.php",
    data,{header:{"Content-type":"multipart/form-data"}})
    
if(response){
    console.log("responnse is recevied" +response.data.start)
    if( response.data.status==="success"){
        alert("account created")
    }else{
        alert("account failed")
    }
}

} 
return(<div>
    <div className="col-4 mx-auto mt-4 rounded p-3 border">
    <div>
    <img className="logo1" src={logo1}></img>
    </div>
    <h4>Create account</h4>
    <input onChange={(event)=>{setUsername(event.target.value)}} placeholder="usernam" class="form-control mb-3"></input>
    <input onChange={(event)=>{setFName(event.target.value)}} placeholder="fname" class="form-control mb-3" ></input>
    <input onChange={(event)=>{setLName(event.target.value)}} placeholder="lname" class="form-control mb-3" ></input>
    <input onChange={(event)=>{setEmail(event.target.value)}} placeholder="email" class="form-control mb-3" ></input>
    <input onChange={(event)=>{setPassword(event.target.value)}}placeholder="password" class="form-control mb-3" ></input>
    <input onChange={(event)=>{setPhonenumber(event.target.value)}}placeholder="phonenumber" class="form-control mb-3" ></input>
    <input onChange={(event)=>{setAddress(event.target.value)}}placeholder="address" class="form-control mb-3" ></input>
    <button class="btn btn-warning w-100 mt-3" onClick={()=>{createaccount()}}>Next</button>

    </div>
   

</div>)
}

export default  Sign