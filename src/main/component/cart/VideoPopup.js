import React, {Component, useState} from 'react'
import {Button, Embed} from 'semantic-ui-react'
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function VideoPopup(props) {

    const [modalShow, setModalShow] = useState(false);

    return (
        <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Movie Info
            </Button>
            <MydModalWithGrid value = {props} show={modalShow} onHide={() => setModalShow(false)}/>
        </ButtonToolbar>
    );
}


const MydModalWithGrid = (props) => {
    return (
        <div>
            {console.log("Before model tag",props.value)}
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size={'lg'} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.value.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <code>
                                    <Embed
                                        autoplay={true}
                                        color='white'
                                        hd={false}
                                        id='-AJ7cLi1Jfk'
                                        iframe={{
                                            allowFullScreen: true,
                                            style: {
                                                padding: 1,
                                            },
                                        }}
                                        placeholder={props.type}
                                        source='youtube'
                                    />
                                </code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>

                                    {console.log("Description:", props.value.description)}
                                    {props.value.description}
                                </code>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={6} md={4}>
                                <code>
                                    <b>Runtime</b>: 136 min
                                </code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>
                                    <b>Genre</b>: {props.value.genre}
                                </code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>
                                    <b>Actors</b>: {props.value.actors}
                                </code>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={6} md={4}>
                                <code>
                                    <b>IMDB</b>: {props.value.imdbRating}
                                </code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>
                                    <b>Can use this..</b>
                                </code>
                            </Col>
                        </Row>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VideoPopup;
