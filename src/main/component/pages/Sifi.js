import React, {Component} from 'react';
import Header from "../../header/Header";
import {Provider} from "react-redux";
import store from "../../redux/store";

class Sifi extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Header message='Movie2Night'/>
                    <h1>Hello Its SI-FI page</h1>
                </Provider>
            </div>
        );
    }
}

export default Sifi;
