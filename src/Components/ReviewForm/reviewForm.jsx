import axios from "axios";
import './reviewForm.css';
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const ReviewForm = (props) => {
  const {currentToken, currentProduct, currentUser, getProductReviews} = props;
  const starColors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const stars = Array(5).fill(0);
  const [currentRating, setCurrentRating] = useState(1);
  const [hoverValue, setHoverValue] = useState(undefined);
  const currentProductId = currentProduct.productId;
  const userId = currentUser.user.id;
  const initialReview = {
    description: "",
    userId: userId,
    productId: null,
  };
  const [eachEntry, setEachEntry] = useState(initialReview);
  const [reviewError, setReviewError] = useState({});
  const reviewFormValidation = () => {
    let reviewError = {};
    let isValid = true;
    if (eachEntry.description.trim().length === 0){
      reviewError.descriptionError = "Please enter a description for your rating";
      isValid=false;
    }
    setReviewError(reviewError);
    return isValid;
  }
  

  const handleChange = (event) => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
  };
  const handleClick = (value) => {
    setCurrentRating(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitReview();
  };
  const submitReview = async () => {
    const isValid = reviewFormValidation()
    let review = eachEntry;
    review.rating = currentRating;
    review.productId = currentProductId
    if (isValid){
      await axios.post("https://localhost:44394/api/reviews/", review, {
        headers: { Authorization: "Bearer " + currentToken },
      });
      getProductReviews(currentProductId);
    }

  };
  return (
    <Container>
            <form onSubmit={handleSubmit}>
              <Container>
                <Row>
                  <Col sm={1}>
                  </Col>
                  <Col sm={10}>
                  <div className="d-flex justify-content-center">
                <div className="monitorTerminal">
                <input
                  className="monitor"
                  type="text"
                  name="description"
                  placeholder="Review Comment"
                  onChange={handleChange}/>
                  </div>
              </div>
       
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col sm={1}></Col>
                  <Col  sm={10}>
                  <div className="d-flex justify-content-center">
                <div className="terminal d-flex justify-content-center">
                  {Object.keys(reviewError).map((key) => {
                        return <div style={{color: "yellow"}}>{reviewError[key]} </div>
                    })}
              {stars.map((_, index) => {
                return (
                  <React.Fragment>
                  <div className="starRating"> 
                  <FaStar
                    key={index}
                    style={{ cursor: "pointer" }}
                    color={
                      (hoverValue || currentRating) > index
                        ? starColors.orange
                        : starColors.grey
                    }
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                  </div>
                  </React.Fragment>
                );
              })}
               </div>
              </div>
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col sm={1}></Col>
                  <Col className="d-flex justify-content-center" sm={10}> 
                  <div className="terminal">
                  <button className="button" type="submit" > Submit </button>
                  </div>
                  
                  </Col>
                  <Col sm={1}></Col>
                </Row>
              </Container>

            </form>
    </Container>
  );
};

export default ReviewForm;
