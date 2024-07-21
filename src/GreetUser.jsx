import { useParams } from "react-router-dom";

function GreetUser()
{
    let {name}=useParams()
    return(
        <b>Welcome {name}</b>
    )
}
export default GreetUser;