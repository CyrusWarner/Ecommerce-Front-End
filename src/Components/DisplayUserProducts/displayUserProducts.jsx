import React from 'react';  
import UserProductEdit from '../UserProductEdit/userProductEdit';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { FaStar, FaDollarSign } from "react-icons/fa";
import DeleteProductModal from '../DeleteProductModal/deleteProductModal';
import { useEffect } from 'react';

const DisplayUserProducts = (props) => {
    const {userProducts, getUsersProducts, getAllProducts, deleteProduct, currentUser} = props

    useEffect(() => {
        getUsersProducts();
    }, [])
    
    const stars = Array(5).fill(0);
    return (
        <React.Fragment>
            <Container className="d-flex justify-content-center">
                <Row>
        {userProducts.map((product) => {
            return (
                <Card className="customCard card-container border m-3"  style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                      <div>{product.description}</div>
                  </Card.Text>
                  <Card.Text className="fs-5"><FaDollarSign />{product.price}</Card.Text>  
                  <Card.Text>{stars.map(
                    (star, index) =>
                      index < product.averageRating && (
                        <FaStar color={starColors.orange} />
                      )
                  )}</Card.Text>
                  <div>
                      <Row>
                  <UserProductEdit product={product} getUsersProducts={getUsersProducts} getAllProducts={getAllProducts}/>
                  <DeleteProductModal product={product} deleteProduct={deleteProduct}/>
                  </Row>
                  </div>

                </Card.Body>
              </Card>
            )

        })}
        </Row>
        </Container>
        </React.Fragment>
    )
}

const starColors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

export default DisplayUserProducts;