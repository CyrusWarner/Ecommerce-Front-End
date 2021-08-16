import axios from 'axios';
import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
const ReviewForm = (props) => {
    const currentToken = props.currentToken;
    const currentProductId = props.currentProduct.productId;
    const userId = props.currentUser.user.id;
    const getProductReviews = props.getProductReviews
    const initialReview = {
        description: "",
        rating: "",
        userId: userId,
        productId: currentProductId
    }
    const [eachEntry, setEachEntry] = useState(initialReview)

    const handleChange = (event) => {
        setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        submitReview();
    }  
    const submitReview = async () => {
        let review = eachEntry
        let intRating = Number(`${review.rating}`)
        review.rating = intRating
        await axios.post("https://localhost:44394/api/reviews/", review, { headers: {Authorization: 'Bearer ' + currentToken}})
        getProductReviews(currentProductId)
    }
    return ( 
        <Container >
            <div>
            <Row>
            <Col sm={8}>
            <div>
        <form onSubmit={handleSubmit}>
            <div>
        <input type="text" name="description" placeholder="Review Comment" onChange={handleChange} />
        </div>
        <input  type="text" name="rating" placeholder="1-5" onChange={handleChange} />
        <div>
        <button type="submit"> submit </button>
        </div>
        </form>
        </div>
            </Col>
            <Col sm={4}></Col>
        
            </Row>
            </div>
        </Container>
     );
}
 
export default ReviewForm;