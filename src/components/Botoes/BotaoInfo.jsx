/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function BotaoInfo(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Info
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Informações do fornecedor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div> <strong>Identificador:</strong> {props.fornecedorInfo.id}</div>
                    <div><strong>Nome:</strong> {props.fornecedorInfo.nome}</div>
                    <div><strong>E-mail:</strong> {props.fornecedorInfo.email}</div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                </Modal.Footer>
            </Modal>
        </>
          
    )
  }
  
  export default BotaoInfo;
