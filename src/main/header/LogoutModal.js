import {useState} from "react";

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Cookies from "universal-cookie";


function LogoutModel() {
    const [show, setShow] = useState(false);

    const handleClose = () =>{
        setShow(false);
    }


    const handleLogout = () =>{
        const cookies = new Cookies();
        cookies.remove('movie_2_night_user')
        setShow(false);
        window.location.reload(false);
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Logout
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you want to logout?</Modal.Title>
                </Modal.Header>
                <Modal.Body>We will not able to persist your liked movies!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button to={'/'} variant="primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default LogoutModel;
