import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

  const [product , setProduct] = useState([])

  const getproduct = () =>{
    fetch("https://calm-lowlands-98798.herokuapp.com/product" ,{
      method :"GET",
      headers :{
        'Content-Type' :'application/json',
        'authorization' : `bearer ${localStorage.getItem("user_token")}`
      }
    })
    .then((res) => res.json())
    .then((res) =>{
      //console.log(res);
     setProduct(res)
    })
    .catch((err) => console.log(err))
  }

  useEffect(()=>{

    getproduct()
  },[])

  return (
    <div>
     <div>
       <Link to='create'>Create New Product</Link>
     </div>
     <div>
      { product.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <img src={item.img} alt="" />
          <h4>₹{item.price}</h4>
          <Link to={`/product/${item._id}/edit`}>edit</Link>
          <Link to={`/product/${item._id}/delete`}>Delete</Link>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Product