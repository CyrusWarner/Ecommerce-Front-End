import React, {useState} from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";
import SearchBar from "../SearchBar/searchBar";
import "./showAllProducts.css";

const ShowAllProducts = (props) => {
  const stars = Array(5).fill(0);
  let allProducts = props.allProducts;
  let createCurrentProduct = props.createCurrentProduct;
  let getAllProducts = props.getAllProducts;
  let getProductReviews = props.getProductReviews;
  let categories = props.categories;
  let setSearchFilteredProducts = props.setSearchFilteredProducts;
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
        <h5 className="title"> Search By Category</h5>
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
      </Container> 
      <Container fluid>
        <Row className="d-flex justify-content-center">
          {filteredProducts.map((product) => {
            var image = new Image(),
            containerWidth = null,
            containerHeight = null;
        
          image.onload=function(){
            containerWidth = image.width;
            containerHeight = image.height;
            }
          image.src = product.image; 
            return (
              <Card
                className="customCard card-container border"
                style={{ width: "18rem", margin: "1rem" }}
              >
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">{product.name}</Card.Title>
                  <hr className="titleSeperator"></hr>
                  <Card.Img src={image.src} ></Card.Img>
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
