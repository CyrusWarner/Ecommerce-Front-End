import React, {useState} from 'react';
import { Container } from 'react-bootstrap';

const FilteredCategories  = (props) => {
    // let setFilteredCategories = props.setFilteredCategories;
    const allProducts = props.allProducts;
    let categories = props.categories
    console.log(categories)
    const onChangeComboBox = (event) => {
        const selectedId = event.target.value
        // props.userCurrentCategoryId(selectedId);
    //     let filteredProducts = [];
    //     allProducts.forEach((product) => {
    // if (product.categoryId.includes(selectedId)) {
    //     filteredProducts.push(product);
    //   }
    // });
    // console.log(filteredProducts)
    // if(currentSearchText !== ""){
    //     setSearchFilteredProducts(filteredProducts);
    // }
    // else {
    //     getAllProducts();
    // }
    // }
    return(
        <React.Fragment>
                <Container>Categories
                    <select className="custom-select" onChange={(event) => {onChangeComboBox(event);}} >
                            {categories.map((category) => {
                                return(
                                <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
                                )
                            })}
                    </select>
                    </Container>
        </React.Fragment>
    )
}
}

export default FilteredCategories;