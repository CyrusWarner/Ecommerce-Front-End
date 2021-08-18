import React, { useEffect } from 'react';  
import UserProductEdit from '../UserProductEdit/userProductEdit';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaDollarSign } from "react-icons/fa";
import DeleteProductModal from '../DeleteProductModal/deleteProductModal';

const DisplayUserProducts = (props) => {
    const {userProducts, getUsersProducts, getAllProducts, deleteProduct, currentUser} = props
    let userName = currentUser.user.username
    useEffect(() => {
        getUsersProducts();
    }, [])
    
    const stars = Array(5).fill(0);
    return (
        <React.Fragment>
          <React.Fragment>
            <Container>
              <Row>
                <Col sm={8}>
                  <h1 className="title">{userName}'s Products</h1>

                </Col>
                <Col sm={4}></Col>
              </Row>
            </Container>
          </React.Fragment>
          {userProducts.length === 0 &&
          <React.Fragment>
            <Container>
              <Row>
                <Col sm={3}></Col>
                <Col sm={6}>
              <h2 className=" d-flex justify-content-center text-center title">You Currently Have No Products</h2>
              </Col>
              <Col sm={3}></Col>
              </Row>
            </Container>
             </React.Fragment>
          }
            <Container>
                <Row className="d-flex justify-content-center g-0">
        {userProducts.map((product) => {
          var image = new Image()
              if(product.image === null || product.image === ""){
                image.src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
              }
              else{
                image.src = product.image; 
              }
            return (
                <Card className="customCard card-container border m-4"  style={{ width: '25rem' }}>
                <Card.Body>
                <Card.Img className="image" src={image.src} style={{height: '20rem'}}/>
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
                  <DeleteProductModal product={product} deleteProduct={deleteProduct} getAllProducts={getAllProducts}/>
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