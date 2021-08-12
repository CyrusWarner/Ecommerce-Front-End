import React from 'react';

const ShowAllReviews = (props) => {

    let productReviews = props.productReviews
    console.log(productReviews)

    return ( 
        <div> {console.log(productReviews)}
        {productReviews.map((review) =>{
            return (
                <div>
                <tr>{review.Description}</tr>
                <tr>{review.Rating}</tr>
                <tr>{console.log(productReviews)}</tr>
                </div>
            )
        })}
        
        
        
        </div>
        
     );
}
 
export default ShowAllReviews;