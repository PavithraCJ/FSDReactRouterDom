import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProductByCategory()
{
// let{category}=useParams()
// return(
//     <div>
//         <b>You have selected {category} category.</b>
//     </div>
// )
let {category}=useParams()
let [products,setproducts]=useState([])
async function getcategory(){
  
    try{
        let response=await fetch(`http://fakestoreapi.com/products/category/${category}`)
        let data=await response.json()
        setproducts(data)
    }catch(err){
        console.log(err)
    }
}
useEffect(()=>{
    getcategory()
},[category])
return(
<div>
            <b>You clicked the caterogry of {category}</b>
            {/* {JSON.stringify(products)} */}
            {products && products.map((p)=>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={p.image} />
            <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
                {p.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            
)}
</div>
)}

export default ProductByCategory;