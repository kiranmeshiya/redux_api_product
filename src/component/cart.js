import React from 'react';
import Headernav from './header';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { removeToCart } from '../app/callapi/cartSlice';
export default function Cart() {
    let total = 0;
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    
    const handleRemove = (productId) => {
        dispatch(removeToCart(productId));
    };

    return (
        <div>
            <Headernav />
           <Container>
           <div>
                <div className='py-4 pb-3 text-center '>
                    <h1>My Cart </h1>
                </div>
            </div>
            <div>
                <Row>
                    <Col xl={12}>
                    </Col>
                    <Table table-bordered border-danger hover className='align-middle text-center' style={{border:'1px solid black'}}>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                           products.map((item, index) => {
                                return (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td><img src={item.image} alt='' width='120px' height='100px' style={{border:'1px solid black'}}></img></td>
                                <td><h6>{item.title}</h6></td>
                                <td><h5 className='text-danger'>$ {item.price}</h5></td>
                                <td><Button className='btn btn-danger'   onClick={() => handleRemove(item.id)}>
                                    Delete</Button></td>  
                                    {/* {total = total + item.price} */}
                                </tr>
                                )
                            })
                        }
                            
                            
                        </tbody>
                        
                    </Table>
                </Row>
            </div>
           </Container>
        </div>
    )
}
