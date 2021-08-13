import React from 'react';
import { Container } from 'react-bootstrap';

const FilteredCategories  = (props) => {
    let categories = props.categories
    let allProducts = props.allProducts
    let setFilteredCategories = props.setFilteredCategories
    const onChangeComboBox = (event) => {
        let filteredProducts = [];
        const selectedId = event.target.value
        let intSelectedId = Number(`${selectedId}`)
        allProducts.forEach((product) => {
            if(product.categoryId === intSelectedId) {
              filteredProducts.push(product);
            } 
        })
        setFilteredCategories(filteredProducts)

    }
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

export default FilteredCategories;