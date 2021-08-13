import axios from "axios";
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
      // alignItems: "center"
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
    productId: currentProductId,
  };
  const [eachEntry, setEachEntry] = useState(initialReview);

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
    let review = eachEntry;
    review.rating = currentRating;
    debugger
    await axios.post("https://localhost:44394/api/reviews/", review, {
      headers: { Authorization: "Bearer " + currentToken },
    });
    getProductReviews(currentProductId);
  };
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="description"
                  placeholder="Review Comment"
                  onChange={handleChange}
                />
              </div>
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
              <div>
                <button type="submit"> submit </button>
              </div>
            </form>
          </div>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};

export default ReviewForm;
