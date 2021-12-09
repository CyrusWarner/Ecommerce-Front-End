import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { filterArrayOfProducts } from "../../Helpers/FilterData";
const SearchBar = ({setSearchFilteredProducts, getAllProducts, allProducts}) => {
  // handles the search when a user enters a search term
  const handleSearch = (searchTerm) => {
    let filteredProducts = filterArrayOfProducts(allProducts, searchTerm)
    if(searchTerm){
        setSearchFilteredProducts(filteredProducts);
    }
    else {
        getAllProducts();
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <input
              name="search"
              onChange={(event) => handleSearch(event.target.value)}
              placeholder="Search By Product Name..."
              className="form-control mb-3"
            ></input>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SearchBar;
