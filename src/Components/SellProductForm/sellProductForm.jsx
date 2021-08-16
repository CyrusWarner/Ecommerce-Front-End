import axios from 'axios';
import './sellProductForm.css'
import React, {useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Categories from '../Categories/categories';
//if (intPriceProductdata == NaN || intPriceProductData == 0){} ADD LOGIC HERE FOR ALERTING A USER THAT THEY NEED TO ENTER AN INTEGER
const SellProductForm = (props) => {
    let id;
    let currentToken = props.currentToken;
    let getAllProducts = props.getAllProducts;
    let userCurrentCategoryId = props.userCurrentCategoryId;
    let currentCategoryId = props.currentCategoryId;
    if(props.currentUser !== undefined) {
        id = props.currentUser.user.id; 
    }
    const initialInput = {
        AverageRating: 5,
        CategoryId: currentCategoryId,
        Description: "",
        Name: "",
        Price: 0,
        UserId: id
    }
    const [eachEntry, setEachEntry] = useState(initialInput)
    const [nameError, setNameError] = useState({})
    const [descriptionError, setDescriptionError] = useState({})
    const [productPriceError, setProductPriceError] = useState({})

    const sellProductFormValidation = () => {
        eachEntry.CategoryId= currentCategoryId;
        let intPriceProductData = Number(`${eachEntry.Price}`)
        eachEntry.Price = intPriceProductData
        const nameError = {};
        const descriptionError = {};
        const productPriceError = {};
        let isValid = true;
        if (eachEntry.Name.trim().length == 0) {
            nameError.productNameEmpty = "Product name is required"
            isValid = false;
        }
        if (eachEntry.Description.trim().length == 0) {
            descriptionError.descriptionEmpty = "Product description is required"
            isValid = false;
        }
        if (eachEntry.Price == 0) {
            productPriceError.productPriceCannotEqualZero = "Product price cannot be 0"
            isValid = false;
        }
        setNameError(nameError);
        setDescriptionError(descriptionError);
        setProductPriceError(productPriceError);
        return isValid;
    }
    const handleChange = (event) => {
        setEachEntry({...eachEntry, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        submitProduct();
    }

    const submitProduct = async () => {
        let productData = eachEntry
        const isValid = sellProductFormValidation();
        if(isValid){
            await axios.post("https://localhost:44394/api/product", productData, { headers: {Authorization: 'Bearer ' + currentToken}})
            getAllProducts();
            setEachEntry(initialInput)
        }
        
    }
    return (
        <React.Fragment>
        <Container>
            <Row>
                <Col sm={4}>
                <h1 className="title mb-3">Sell A Product</h1>
                </Col>
                <Col sm={8}></Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col sm={4}>        
                    <Form onSubmit={handleSubmit}>
                        <div>
                    <h5 className="title"> Product Name</h5>
                    <input className=" form-control" value={eachEntry.Name} onChange={handleChange} name="Name" placeholder="Product name..."></input>
                    {Object.keys(nameError).map((key) => {
                        return <div style={{color: "yellow"}}>{nameError[key]} </div>
                    })}
                    </div>
                    <div>
                    <h5 className="title"> Product Description</h5>
                    <input className=" form-control" value={eachEntry.Description} onChange={handleChange} name="Description"placeholder="Product description..."></input>
                    {Object.keys(descriptionError).map((key) => {
                        return <div style={{color: "yellow"}}>{descriptionError[key]} </div>
                    })}
                    </div>
                    <div>
                    <h5 className="title"> Product Price</h5>
                    <input className=" form-control" value={eachEntry.Price} onChange={handleChange} name="Price" placeholder ="Product Price"></input>
                    {Object.keys(productPriceError).map((key) => {
                        return <div style={{color: "yellow"}}>{productPriceError[key]} </div>
                    })}
                    </div>
                    <Categories categories={props.categories} userCurrentCategoryId={userCurrentCategoryId}/>
                    <Button style={{backgroundColor: "crimson", borderColor: "crimson"}} className="mt-2" type="submit">Submit New Product</Button>
                    </Form>
                </Col>
                <Col sm={4}></Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
        </React.Fragment>
    )
}

export default SellProductForm