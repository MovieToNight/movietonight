import React, {Component} from 'react';
import Header from "../../header/Header";
import {Provider} from "react-redux";
import store from "../../redux/store";

class MovieType extends Component {

    constructor(props) {
        super(props);
        this.state ={
            match : this.props.match
        }
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Header message='Movie2Night'/>
                    <h1>Hello Its {this.state.match.params.genre} page</h1>
                </Provider>
            </div>
        );
    }
}

export default MovieType;
