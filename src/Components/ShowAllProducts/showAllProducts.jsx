import React, {useState} from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";
import SearchBar from "../SearchBar/searchBar";
import "./showAllProducts.css";

const ShowAllProducts = 
({
  allProducts,
  createCurrentProduct, 
  getAllProducts, 
  getProductReviews, 
  categories, 
  setSearchFilteredProducts,
  addItemToCart, 
  currentUser
}) => {

  const stars = Array(5).fill(0);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);

  const onChangeComboBox = (event) => {
    const id = event.target.value;
    let intSelectedId = Number(`${id}`);
    setCurrentCategoryId(intSelectedId)
  }
    const filteredProducts = allProducts.filter(function(product) {
      if (currentCategoryId === 0){
        return allProducts;
      }
      else{
        return product.categoryId === currentCategoryId;
      }
  })
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={4}>
            <h1 className="title">All Products</h1>
          </Col>
          <SearchBar
            allProducts={allProducts}
            setSearchFilteredProducts={setSearchFilteredProducts}
            getAllProducts={getAllProducts}
          />
          <Col sm={8}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
        <select
          className="form-select mb-2"
          onChange={(event) => {
            onChangeComboBox(event);
          }}
        >
          <option key={categories.length} value={0}>
            All
          </option>
          {categories.map((category) => {
            return (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </option>
            );
          })}
          
        </select>
        <Col sm={3}></Col>
        </Col>
        </Row>
      </Container> 
      <Container fluid>
        <Row className="d-flex justify-content-center m-1">
          {filteredProducts.map((product) => {
            let image = new Image()
            if(!product.image){
              image.src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
            }
            else{
              image.src = product.image; 
            }
            
            return (
              <Card
                className="customCard card-container border"
                style={{ width: "25rem", margin: "1rem" }}
              >
                <Card.Img className="prodImg" variant="top" src={image.src} />
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">{product.name}</Card.Title>
                  <hr className="titleSeperator"></hr>
                  
                  <Card.Text className="fs-5">{product.description}</Card.Text>
                  <Card.Text className="fs-5">
                    <FaDollarSign />
                    {product.price}
                  </Card.Text>
                  {stars.map(
                    (star, index) =>
                      index < product.averageRating && (
                        <FaStar color={starColors.orange} />
                      )
                  )}
                  <div className="mb-2"></div>
                  <div className="d-flex justify-content-center">
                  <Link to="/viewproduct">
                    <Button
                      style={{
                        backgroundColor: "crimson",
                        borderColor: "crimson",
                      }}
                      onClick={() => [
                        createCurrentProduct(product),
                        getProductReviews(product.productId),
                      ]}
                    >
                      View product
                    </Button> 
                  </Link>
                  {currentUser &&
                  <Button className="ms-1" onClick={() => addItemToCart(product)} style={{
                        backgroundColor: "crimson",
                        borderColor: "crimson",
                      }}>Add to Cart</Button>
                  }
                      </div>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};
const starColors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default ShowAllProducts;
