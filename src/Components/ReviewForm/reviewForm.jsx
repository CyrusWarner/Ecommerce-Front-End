import axios from "axios";
import './reviewForm.css';
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const ReviewForm = (props) => {
  const starColors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
  };
  const stars = Array(5).fill(0);
  const [currentRating, setCurrentRating] = useState(1);
  const [hoverValue, setHoverValue] = useState(undefined);
  const currentToken = props.currentToken;
  const currentProductId = props.currentProduct.productId;
  const userId = props.currentUser.user.id;
  const getProductReviews = props.getProductReviews;
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
      <Row>
      <Col sm={2}></Col>
        <Col sm={8}>
          <div>
            <form onSubmit={handleSubmit}>
              <div >
                <input
                  class="monitor"
                  type="text"
                  name="description"
                  placeholder="Review Comment"
                  onChange={handleChange}/>
              </div>
              <div>
              <div class="starRating">
                  {Object.keys(reviewError).map((key) => {
                        return <div style={{color: "yellow"}}>{reviewError[key]} </div>
                    })}
              <div style={styles.container}></div>
              <div style={styles.stars}></div>
              {stars.map((_, index) => {
                return (
                  <FaStar
                    name="rating"
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
                );
              })}
              </div>
              <div>
                <button class="button" type="submit"> Submit </button>
              </div>
              </div>
            </form>
          </div>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Container>
  );
};

export default ReviewForm;
