import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState} from 'react';
function Header()
{
    let[category,setCategory]=useState([])
    async function getAllCategory()
    {
        try
        {
            let response = await fetch("https://fakestoreapi.com/products/categories")
            let data = await response.json();
            setCategory(data);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAllCategory()
    },[])
    return(
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">React DEMO NAVBAR</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/Services">Services</Link></Nav.Link>
                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                        <Nav.Link><Link to ="/fetchprod">Fetch Products</Link></Nav.Link>
                        <Nav.Link><Link to="/NameForm">NameForm</Link></Nav.Link>
                        <Nav.Link><Link to="/GreetUser/:name"></Link></Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">

                            {category && category.map((value)=><NavDropdown.Item><Link to={`/category/${value}`}>{value}</Link></NavDropdown.Item>)}
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}
export default Header;