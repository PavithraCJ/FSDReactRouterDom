import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import FetchProducts from './FetchProducts';
import NameForm from './NameForm';
import GreetUser from './GreetUser';
import Layout from './Layout';
import NotFound from './NotFound';
import ProductByCategory from './ProductByCategory';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      {/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">React DEMO NAVBAR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Services">Services</Link></Nav.Link>
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            <Nav.Link><Link to ="/fetchprod">Fetch Products</Link></Nav.Link>
            <Nav.Link><Link to="/NameForm">NameForm</Link></Nav.Link>
            <Nav.Link><Link to="/GreetUser/:name"></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}


          <Routes>
            <Route path="/" element={<Layout></Layout>}>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Services" element={<Services></Services>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/fetchprod" element={<FetchProducts></FetchProducts>}></Route>
            <Route path="/NameForm" element={<NameForm></NameForm>}></Route>
            <Route path="/GreetUser/:name" element={<GreetUser></GreetUser>}></Route>
            <Route path="/category/:category" element={<ProductByCategory></ProductByCategory>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
