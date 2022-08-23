import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Editproduct =  () => {

    const [price , setprice] = useState()

    const {productId} = useParams();
    console.log(productId);
    const handleupdate = async () =>{
        const payload = {
            price,
        }
        await fetch(`https://calm-lowlands-98798.herokuapp.com/${productId}/edit` ,{
            method : "PATCH",
            mode :'cors',
            body: JSON.stringify(payload),
            headers :{
                'Content-Type' : 'application/json',
                'authorization' : `bearer ${localStorage.getItem("user_token")}`
            }
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    
  return (
    <div>
        <input type="number" value={price} onChange={(e)=> setprice(e.target.value)} />
        <button onClick={handleupdate}>Update</button>
    </div>
  )
}

export default Editproduct