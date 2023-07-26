import React, {useState} from 'react';
import {Modal, Button, Form, Col, Row} from "react-bootstrap";

interface CenteredModalProps{
    show: boolean,
    onHide: () => void,
    onClick: (username: string, password: string) => void
}

const CenteredModal:React.FC<CenteredModalProps> = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4>Login</h4>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Username" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {props.onClick(username, password)}}>Login</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CenteredModal;