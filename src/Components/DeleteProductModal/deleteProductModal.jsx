import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const DeleteProductModal = (props) => {
    const {name, productId} = props.product
    const deleteProduct = props.deleteProduct
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    return (
        <>
      <Button className="btn btn-danger" onClick={handleShow}>
        Delete Product
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <h5 className="text-center">
              Are you sure you would like to delete this product?
            </h5>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="btn btn-danger"
            type="submit"
            onClick={() => [
              handleClose(),
              deleteProduct(productId),
            ]}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default DeleteProductModal