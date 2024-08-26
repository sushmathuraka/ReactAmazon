import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style.css"
import Footer from"./Footer"
import Header from "./Header"
import Login from "./Login"
import Home from "./Home"
import Content from "./Content";
import Sign from "./Sign";
import Product from "./Product";
import { useEffect } from "react";
import { useState } from "react";
import Account from "./Account";
import ProductList from "./ProductList";
import Search from "./Search";
import Boxcomponent from "./Boxcomponent";
import Paymentspage from "./Paymentspage";
import ProductDetails from "./Productdetails";
import Addcart from  "./Addcart";


function App() {
  const [logggedin,setLoggedin]=useState(false)
  const[saved_userid,setSaved_userid]=useState(null)
  const[userdata,setUserdata]=useState(JSON.parse(localStorage.getItem('saved_userid')))
  useEffect(()=>{
    const userid=localStorage.getItem('Saved_userid')
    if(userid){
      setSaved_userid(userid)
      console.log("user already logged")
    }
    else{
      console.log("user not logged")
    }
  })
  return(<div>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Account" element={<Account/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/sign" element={<Sign/>}></Route>
     <Route path="/search" element={<Search/>}></Route>
     <Route path="/Productdetails" element={<ProductDetails/>}></Route>
     <Route path="/ProductList" element={<ProductList/>}></Route>
     <Route path="/Product" element={<Product/>}></Route>
     <Route path="/Addcart" element={<Addcart/>}></Route>
     <Route path="/Product-details/:item_id" element={<Product/>}></Route>
     <Route path="/Paymentspage" element={<Paymentspage  design={<Boxcomponent/>} data={userdata}/>}></Route>

     
    </Routes>
    </BrowserRouter>

  </div>)
}

export default App;