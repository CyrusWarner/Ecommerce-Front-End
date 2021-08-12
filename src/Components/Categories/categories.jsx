import React, {useState} from 'react';
import axios from 'axios';

const Categories  = (props) => {
    let categories = props.categories
    const [category, setCategory] = useState([]);
  

    const handleChange = (event) => {
        event.persist();
        setCategory({[event.target.name]: event.target.value});
        props.userCurrentCategoryId(category);

    }

    return(
        <React.Fragment>
                <label>Categories</label>
                    <select name="categoriesId" onChange={handleChange}>
                        {categories.map((category, categoryId) => {
                            <option key={categoryId}>{categoryId}</option>
                            return (
                                <option value={categoryId}>
                                    {category.categoryName}
                                </option>
                            )
                        })}
                    </select>
        </React.Fragment>
    )
}

export default Categories;