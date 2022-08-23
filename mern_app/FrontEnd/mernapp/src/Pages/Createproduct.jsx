import React,{useState} from 'react'

const Createproduct = () => {

    const [title , setTitle] = useState("")
    const [img , setImg] = useState("")
    const [price , setPrice] = useState("")

    const createproduct =async () =>{
        const payload = {
            title,
            img,
            price
        }

        await fetch("https://calm-lowlands-98798.herokuapp.com/product/create" ,{
            method :"POST",
            body : JSON.stringify(payload),
            headers :{
                'Content-Type' : 'application/json',
                'authorization' : `bearer ${localStorage.getItem("user_token")}`
            }
        })
        .then((res) => res.json())
        .then((res) =>{
            console.log(res);
            alert("Product Created successfully")
        })
        .catch((err) => console.log(err))
    }
  return (
    <div>
        <div>
            <label>Product Title</label>
            <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}/><br />
            <label>Product Image Url</label>
            <input type="text" value={img} onChange={(e)=>setImg(e.target.value)} /><br />
            <label>Price</label>
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} /><br />
        </div>
        <div>
            <button onClick={createproduct}>Create</button>
        </div>
    </div>
  )
}

export default Createproduct