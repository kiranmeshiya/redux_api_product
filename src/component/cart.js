import React from 'react';
import Headernav from './header';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { removeToCart, increment, decrement } from '../app/callapi/cartSlice';
export default function Cart() {
  
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    console.log(products)
    // const quntity = useSelector((state) => state.quntity)

    const handleRemove = (productId) => {
        dispatch(removeToCart(productId));
    };
  
    const handleAdd = (itemId, originalPrice) => {
        dispatch(increment({ itemId, originalPrice }));
      };

      const handleDel= (itemId,originPrice) =>
      {
        dispatch(decrement({itemId,originPrice}))
      }
  
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
                                <th>Quntity</th>
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
                                <td><div className='d-flex align-items-center'><Button className='btn btn-danger btn-qty'    onClick={() => handleAdd(item.id,item.originPrice)}>+</Button><h6>{item.quantity}</h6><Button className='btn btn-danger btn-qty'   onClick={item.quantity>1?() => handleDel(item.id,item.originPrice) : () => handleRemove(item.id)}>-</Button></div></td>
                                <td><h5 className='text-danger'>{item.price.toFixed(2)}</h5></td>
                                <td><Button className='btn btn-danger '   onClick={() => handleRemove(item.id)}>
                                    Delete</Button></td>  
                                    {/* {total = total+item.price} */}
                                </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan={4}></td>
                            <td><strong className='text-danger'>Total Price : {products.reduce((sum,item) => sum + parseFloat(item.price),0)}</strong></td>
                        </tr>
                        </tbody>
                        
                    </Table>
                </Row>
            </div>
           </Container>
        </div>
    )
}
