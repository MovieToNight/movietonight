import React, {Component, useState} from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from 'axios';


class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            smShow: false,
            setSmShow: false,
            message: ''
        }
    }

    saveFeedback = () => {
        axios.post('http://localhost:8080/feedback',
            {
                'message': this.state.message
            }
        ).then(r => {

        })
        this.hide();
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    showBox = () => this.setState({
        setSmShow: true,
        smShow: true
    })

    hide = () => this.setState({
            setSmShow: false,
            smShow: false

        })


    render() {
        return (
            <ButtonToolbar>
                <Button onClick={this.showBox}>Feedback</Button>

                <Modal
                    size="md"
                    show={this.state.smShow}
                    onHide={this.hide}
                    aria-labelledby="example-modal-sizes-title-sm">

                    <Container>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                                Feedback/Suggestion
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.saveFeedback}>
                                <Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows="4"  onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Button variant="primary"  type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                    </Container>
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default Feedback;
