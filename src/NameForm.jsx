import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NameForm()
{
    let[name,setName]=useState('')
    let navigate=useNavigate()
    const handleSubmit=()=>{
        navigate(`/GreetUser/${name}`)
    }
    return(
        <div>
            <lable htmlFor="name">Enter Your Name:</lable>
            <input type="text" id="name"  value={name} onChange={(event)=>setName(event.target.value)}></input>
            <button onClick={handleSubmit} value="Submit">Submit</button>
        </div>
    )
}
export default NameForm;