import logo1 from "./images/logo1.jpeg"
import cart from "./images/cart.jpeg"
import React from "react"
import { Link } from "react-router-dom"

function Header(){
    return(<div class="header1">
        <div class="header">
        <Link to="/Login">login</Link>
        <Link to="/Sign">sign</Link>
        <img className="logo" src={logo1}></img>
           <div>
            <p>Delivery to Hyderabad</p>
            <p>update location</p>
            </div>
            <div className="search-bar">
                    <select>
                        <option>ALL</option>
                        <option>Toys</option>
                        <option>Home</option>
                        <option>Fashion</option>
                        <option>Games</option>
                        <option>Gifts</option>
                        <option>decor</option>
                    </select>
                    <input placeholder="Search amazon.in"></input>
                    <button>search</button>
            </div>
            <div>
            <p>Hello,sign in</p>
            <p> Accounts and Lists</p>
            </div>
            <div >
            <p>Returns</p>
            <p>& orders</p>
            </div>
            <div class="cart">
            <img className="cart" src={cart}></img>
            <p>cart</p>
            </div>
        </div>
        
    </div>)
}
export default Header
