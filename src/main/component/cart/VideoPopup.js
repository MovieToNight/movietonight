import React, {Component, useState} from 'react'
import {Button, Embed} from 'semantic-ui-react'
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {blue} from "@material-ui/core/colors";

function VideoPopup() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Movie Info
            </Button>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar>
    );
}


function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size={'lg'} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Guardians of the Galaxy Vol. 2
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
                                    placeholder={"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"}
                                    source='youtube'
                                />
                            </code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>
                                The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.
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
                                <b>Genre</b>: Action, Adventure, Comedy, Sci-Fi
                            </code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>
                                <b>Actors</b>: Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel
                            </code>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <code>
                                <b>IMDB</b>: 5.5
                            </code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>
                                <b>Rotten Tomatoes</b> : 55
                            </code>
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VideoPopup;
