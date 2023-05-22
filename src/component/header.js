import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Nav, NavDropdown} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Banner from './banner';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { fetchProducts } from '../app/callapi/productSlice';

function Headernav() {
  
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const [cat,setCat] = useState ([]);

const handleCategory = () => 
{
    axios.get('https://fakestoreapi.com/products/categories')
        .then(function (response) {
          console.log(response.data);
          setCat(response.data);
          
        })
        .catch(error => {
          console.log(error);
        });
}

const catHandler = (product) => {
  dispatch(fetchProducts(product));
} 

  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={require('../component/logo.png')} width='50px' alt=''></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Link to='/' className='nav-link navbar-brand'>Product</Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" onClick={handleCategory}>
              
              {
                cat.map((item,index) => {
                  return(
                    <NavDropdown.Item key={index} value={item}  onClick={() => catHandler(item)}>{item}</NavDropdown.Item>
                  )
                })
              
              }
            </NavDropdown>
          </Nav>
          <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-danger" >Search</Button>
          </Form> 
          <Link to='/cart' className='navbar-brand'><FaShoppingCart/> Cart </Link>
          <Link to='/cart' className='btn btn-danger'>{cart.length}</Link> 
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <Banner/>
    </>
  );
}

export default Headernav;