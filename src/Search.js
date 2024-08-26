import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const [result,setresult] = useState(null)
    const [names,setnames] = useState(null)
    const[limit,setlimit]=useState(10)
    const Search = async (names)=>{

        const data= new FormData()
        data.append("name",names)
        data.append("limit",10)
        

        const response = await axios.post("https://gist.manojkoravangi.com/search-products.php",data,{header:{"content-type":"multi-part/form-data"}})

        if(response){
            console.log(response.data.result)
            setresult(response.data.result)
        }


    }
  return (
    <div>
    <button onClick={()=>setlimit(3)}>3</button>
    <button onClick={()=>setlimit(4)}>4</button>
    <button onClick={()=>setlimit(6)}>6</button>
    <input onChange={(event)=>{Search(event.target.value)}} placeholder='search' ></input>


    {result?<div className='d-flex flex-wrap'>

        {result.map((item)=>(
            <div className=" col-3 shadow border p-3">
        <img className="w-50 p-3"src={item.images}></img>
            <h4>{item.brand}</h4>
            <p>{item.name}</p>
            <p>price:{item.price}</p>
            <p>product id:{item.product_id}</p>
            <div className="d-flex  w-100">
            <button class="btn btn-warning  w-50 " >Addcart</button>
            <button class="btn btn-warning  w-50 bg-info ms-3 " >Buynow</button>
            
            
            </div>

            
            
        
        </div>
        ))}



    
    </div>:<div></div>
}
    </div>
  )
}

export default Search