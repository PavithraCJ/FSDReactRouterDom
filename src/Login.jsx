import { useNavigate } from "react-router-dom";

function Login()
{
    let navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/Home')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName:</label>
                <input type="text" id="username" name="username"></input><br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
export default Login;