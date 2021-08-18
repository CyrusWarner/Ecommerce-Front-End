import axios from 'axios';
import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
const UserProductEdit = (props) => {
    const {product, getUsersProducts, getAllProducts} = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const initialInputState = {
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image
    }
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader()
      try{
      reader.readAsDataURL(file)
      }
      catch{
          eachEntry.image = ""
      }   
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
  })
    const handleFile = async (event) => {
      let file = event.target.files[0]
      let response = await toBase64(file);
      eachEntry.image = response
      debugger
  }
    const handleChange = (event) => {
        setEachEntry({...eachEntry, [event.target.name]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        updateProduct();
    }


    const updateProduct = async () => {
        const {averageRating, categoryId, userId, productId} = product
        const data = {
            averageRating: averageRating,
            categoryId: categoryId,
            description: eachEntry.description,
            name: eachEntry.name,
            price: eachEntry.price,
            userId: userId,
            image: eachEntry.image
        }
        await axios.put(`https://localhost:44394/api/product/${productId}`, data)
        getUsersProducts();
        getAllProducts();
        
    }

    return (
        <React.Fragment>
        <Button className="mb-2" variant="primary" onClick={handleShow}>
          Update Product
        </Button>
        <Modal  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update a product</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <label className="mb-1"
                    >Product Title:</label>
                    <Form.Control
                    name="name"
                    type="text"
                    defaultValue={product.name}
                    onChange={handleChange}
                    >
                    </Form.Control>
                    <label className="mb-1">Product Price:</label>
                    <Form.Control
                    name="price"
                    type="text"
                    defaultValue={product.price}
                    onChange={handleChange}
                    ></Form.Control>
                    <label className="mb-1">Product Description:</label>
                    <textarea 
                    className="form-control"
                    name="description"
                    type="text"
                    defaultValue={product.description}
                    onChange={handleChange}
                    >
                    </textarea>
                    <label className="mb-1">Product Image:</label>
                    <Form.Control type="file" onChange={(event) => handleFile(event)} name="image"></Form.Control>
                </Form.Group>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(event) => [handleSubmit(event), handleClose()]}>
              Update Product
            </Button>
          </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default UserProductEdit;