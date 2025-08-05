import React, { useEffect, useState } from "react";

function ApiCall(){

  const [data,setData] =useState([])

  useEffect(()=>{
    
    const fetchUser = async ()=>{

     let res = await  fetch("https://jsonplaceholder.typicode.com/users")
     let data1 = await res.json()
     setData(data1)
    }

    fetchUser()

  },[])
 return(
  <div>

   {data.map(d=>(
    <p>{d.name}</p>

 )) 

   }


  </div>



 )



}

export default ApiCall