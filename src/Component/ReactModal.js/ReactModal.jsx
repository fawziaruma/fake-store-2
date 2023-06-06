import { useState } from "react"
import { Button, Modal } from "react-bootstrap"


const ReactModal = (props) => {

   const{title , image , description }= props.product
    const [show  , setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    

   

  return (
    <div>
        <Button variant="primary" onClick={handleShow} > Detalies </Button>

        <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>

          
        </Modal.Header>
        <img src={image} />
        <Modal.Title>{title}</Modal.Title>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ReactModal