import React from 'react';

const ShowAllReviews = (props) => {
    let productReviews = props.productReviews
    return ( 
        <div> {console.log(productReviews)}
        {productReviews.map((review) =>{
            return (
                <div>
                <tr>{review.description}</tr>
                <tr>{review.rating}</tr>
                </div>
            )
        })}
        </div>
     );
} 
export default ShowAllReviews;