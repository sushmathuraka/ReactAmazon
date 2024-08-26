
import React, {useState} from "react"
import axios from "axios"
import { Modal } from "bootstrap"
import { useEffect } from "react"
import CircularProgress from '@mui/material/CircularProgress';


const Login=()=>{
    const[phonenumber,setPhonenumber]=useState(null)
    const[password,setPassword]=useState(null)
    const[loading,setLoading]=useState(null)
    useEffect(()=>{
        const userid=localStorage.getItem('saved_userid')
        if(userid){
            window.location.replace("/Account")
        }
    },[])
    const account=async()=>{
    setLoading(true)
    
    const data=new FormData()
    const saved_userid=localStorage.getItem('saved_userid')
    data.append("phone_number",phonenumber)
    data.append("password",password)
    const response=await axios.post("https://gist.manojkoravangi.com/login.php",
        data,{header:{"Content-type":"multipart/form-data"}})
        if(response){
            setLoading(true)
            console.log(response.data.login_data.user_id)
            if( response.data.status==="success"){
                localStorage.setItem('saved_userid',JSON.stringify(response.data.login_data))
                window.location.replace("/Account")
            }else{
                alert(response.data.title)
            }
        }
        
}


return(<div>
    <div className="col-4 mx-auto mt-4 rounded p-3 border">
    <h2>signin</h2>
    <input onChange={(event)=>{setPhonenumber(event.target.value)}} placeholder="phonenumber" class="form-control mb-3"></input>
    <input onChange={(event)=>{setPassword(event.target.value)}} placeholder="password" class="form-control mb-3"></input>
    <button class="btn btn-warning w-100 mt-3" onClick={()=>{account()}} >{loading?<CircularProgress/>:"Login"}</button>

    </div>
   

</div>)
}
export default  Login