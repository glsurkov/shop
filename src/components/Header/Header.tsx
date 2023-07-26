import React from 'react';
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Offcanvas} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
// @ts-ignore
import styles from "./Header.module.scss";
// @ts-ignore
import brandLogo from "../../assets/shirt-svgrepo-com2.svg"

const Header:React.FC = () => {
    return (
        <>
            <Navbar expand={false} className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            alt="brand"
                            src={brandLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}ShopS</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link className={styles.link} to="/">Main</Link>
                                <Link className={styles.link} to="/store">Store</Link>
                                <Link className={styles.link} to="/cart">Cart</Link>
                                <Link className={styles.link} to="/profile">Profile</Link>
                            </Nav>
                            {/*<Form className="d-flex">*/}
                            {/*    <Form.Control*/}
                            {/*        type="search"*/}
                            {/*        placeholder="Search"*/}
                            {/*        className="me-2"*/}
                            {/*        aria-label="Search"*/}
                            {/*    />*/}
                            {/*    <Button variant="outline-success">Search</Button>*/}
                            {/*</Form>*/}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;