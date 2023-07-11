import React, { useEffect, useState } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import Headernav from './header'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { addToCart } from '../app/callapi/cartSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
export default function Singleproduct() {

    const param = useParams();
    const navigate = useNavigate();
    const [single,setSingle] = useState();
    const [status,setStatus] = useState(false)
    const dispatch = useDispatch();

    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/${param.id}`)
        .then(function (response) {
        //   console.log(response.data);
          setSingle(response.data);
           setStatus(true);
      })
        .catch(error => {
          console.log(error);
        });
    },[param.id])

    const addHandler = (product) => {
         dispatch(addToCart(product));
         navigate('/cart')
    } 

    if(status)
    {
        return (
            <div>
              <Headernav/>
              <Container>
              <Row className='mb-5'>
              <div className='pt-5 pb-3 text-center '>
                <h1>Product View</h1>
            </div>
                <Col md={6} sm={12}>
                    <div className='img-div '>
                     <img src={single.image} alt="" className='img-full'></img>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                <div className='pro-details'>
                    <div className='pro-title'> 
                       <b> {single.title}</b>
                    </div>
                    <div className='pro-price'>
                        <button className="tag"> $ {single.price} </button>
                    </div>
                    <div className='pro-desc'> 
                        <div><b>Discription : </b>{single.description}</div>
                    </div>
                    <div className='pro-cat pro-desc'>
                        <b>Category : </b>  {single.category}
                    </div>
                    <div className='pro-rat pro-desc'>
                        <b>Rating: </b>  {single.rating.rate}
                    </div>
                    <div className='pro-rat pro-desc'>
                        <b>Stock: </b>  {single.rating.count} Pc.
                    </div>
                    <div className='add_cart'>
                        <button className='btn btn-cart btn-danger' onClick={() => addHandler(single)}>
                            Add to cart</button>
                    </div>
                  
                </div>
                </Col>
              </Row>
              </Container>
            </div>
          )
    }
    else
    {
    <h1>Loading....</h1>
    }
}
