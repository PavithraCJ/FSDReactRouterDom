import { useEffect, useState } from "react"
import BasicExample from "./CardComponent"

function FetchProducts()
{
    let[products,setProducts] = useState([])
    let[search,setSearch]=useState('')
    //when products  has to be initialized? - when the component gets rendered
    //from where? - from external API

    async function getAllproducts()
    {
        //call the function in useEffect callback
        try
        {
            let response = await fetch("https://fakestoreapi.com/products")
            let data = await response.json()
            console.log(data)
            setProducts(data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllproducts()
    },[])

    const handleSearch=(event)=>{
        setSearch(event.target.value)
    }

    let filteredProducts = search?products.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase())):products
    return(
        <div>
            {/* JSON.stringify - to convert json objects to String */}
            {/* {JSON.stringify(products)} */}

            {/* using cards using react-bootstrap */}
            {/* <div  className="card-container">
            {products && products.map((product)=><BasicExample product={product}></BasicExample>)}
            </div> */}
            <b>Search:</b>
            <input type="text" value={search} onChange={handleSearch}></input>
            <div className="card-container">
                {filteredProducts && filteredProducts.map((product)=><BasicExample product={product}></BasicExample>)}
            </div>
        </div>
    )
}

export default FetchProducts;