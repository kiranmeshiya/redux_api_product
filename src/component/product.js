import React, { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row } from 'react-bootstrap';
import Headernav from './header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../app/callapi/productSlice';
import { STATUSES } from '../app/callapi/productSlice';
import Loader from './Loader';

export default function Product() {

  //  const [val, setVal] = useState();
  //  const [status, setStatus] = useState(false);

   const dispatch = useDispatch();
   const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
     dispatch(fetchAllProducts());
  
  },[])
  
  if (status === STATUSES.LOADING) {
    return <Loader/>
}

if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
}

   if(status) {
    return (
      <div>
        <Headernav/>       
          <Container fluid >
            <div className='pt-5 pb-3 text-center '>
                <h1>All Products</h1>
            </div>
        <Row>
            
             {
                    products.map((data,index) => {
                      return (
                      
                        <Card style={{ width: '275px' }} key={index} className='card-formate'>
                       <Card.Img variant="top" src={data.image} className='img-fluid' />
                          <Card.Body>
                            <Card.Title>{data.title.slice(0,40)}</Card.Title>
                            <Card.Text>$ {data.price}</Card.Text>
                          </Card.Body>
                          <Link to={`/singleproduct/${data.id}`}  className='btn btn-danger'>
                            View Product</Link>
                          
                        </Card>
                      )
                    })
               }
             
         
        </Row>
        </Container>
       
      </div>
    )
  }
  else {
    <h1>Loading......</h1>
  }
}
