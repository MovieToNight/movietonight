import React, {Component} from 'react';
import './a.jpg';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import SearchBar from "../component/SearchBar";
import {connect} from "react-redux";
import headerDropDownAction from "../redux/header/headerDropdownActions";

class Header extends Component {


    constructor(props) {
        super(props);

        const cookies = new Cookies();
        this.state = {
            username: cookies.get('movie_2_night_user') ? cookies.get('movie_2_night_user') : '',
            password: '',
            email: '',
            isSignUpClicked: false,
            isLoggedIn: !!cookies.get('movie_2_night_user'),
            curTime: new Date().toLocaleString(),
        };
        this.inputRef = React.createRef()
    }

    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">

                <Navbar.Brand href="/">
                    {/*{<img src={require("./logo.svg")} color={'red'} alt = "logo" width="250" height="70"/>}*/}
                    Home
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto" onSelect={this.headerDropDownAction1}>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/action">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/sifi">Si-fi</NavDropdown.Item>
                            <NavDropdown.Item href="/something">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <SearchBar
                            data={["a", 'b', 'c', "a", 'b', 'c', "a", 'b', 'c', "a", 'b', 'c', "a", 'b', 'c', "a", 'b', 'c']}/>
                    </Nav>


                    {/*Sign up form*/}
                    <Form inline={true} onSubmit={this.signUpHandler}
                          hidden={!this.state.isSignUpClicked || this.state.isLoggedIn}>
                        <Form.Group controlId="signUpForm">
                            <FormControl type="text" name="username" placeholder="Enter Username"
                                         value={this.state.username} onChange={this.changeHandler}
                                         required={true} minLength={5} className="mr-sm-2"/>
                            <FormControl type="text" name="password" placeholder="Enter Password"
                                         value={this.state.password} onChange={this.changeHandler}
                                         required={true} minLength={5} className="mr-sm-2"/>
                            <FormControl type="text" name="email" placeholder="Enter Mail" value={this.state.email}
                                         onChange={this.changeHandler} required={true}
                                         minLength={5} className="mr-sm-2"/>
                        </Form.Group>
                        <Button variant="outline-success" type='submit' onClick={this.hideMe}>SignUp</Button>
                    </Form>

                    {/* Logged in form*/}

                    <Form inline={true} onSubmit={this.onSubmitHandler}
                          hidden={this.state.isSignUpClicked || this.state.isLoggedIn}>
                        <Form.Group controlId="loginForm">
                            <FormControl type="text" name="username" placeholder="Enter Username"
                                         ref={this.inputRef}
                                         required
                                         value={this.state.username} onChange={this.changeUsername}
                                         className="mr-sm-2"/>
                            <FormControl type="password" placeholder="Enter Password" required
                                         value={this.state.password}
                                         onChange={this.changePassword} className="mr-sm-2"/>
                        </Form.Group>

                        <ButtonToolbar>
                            <Button variant="outline-success" type={"submit"}> Login</Button>
                            <Button variant="outline-success" type='button' onClick={this.hideMe}> SignUp</Button>
                        </ButtonToolbar>

                    </Form>

                    <Form hidden={!this.state.isLoggedIn}>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="mr-auto">
                                <Navbar.Text>
                                    Signed in as:
                                </Navbar.Text>
                                <NavDropdown title={this.state.username} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Form>


                </Navbar.Collapse>
            </Navbar>
        );
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    signUpHandler = e => {
        e.preventDefault();
        this.setState({
            isLoggedIn: true
        })
    };


    changeUsername = (event) => {
        this.setState({
                username: event.target.value
            }
        )
    };

    changePassword = (event) => {
        this.setState({
                password: event.target.value
            }
        )
    };
    onSubmitHandler = event => {
        event.preventDefault();
        this.setState({
            isLoggedIn: true
        });
        const cookies = new Cookies();
        cookies.set('movie_2_night_user', this.state.username, {path: '/'});

    };

    hideMe = () => {
        this.setState({
                isSignUpClicked: true
            }
        )
    };

    headerDropDownAction1 = () => {
        this.props.dispatch(headerDropDownAction());
    }

}

export const mapStateToProps = state => {
    return {
        selectedType: state.selectedType
    };
};

export default connect(mapStateToProps)(Header);
