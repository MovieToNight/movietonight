import React, {Component} from 'react';
import store from "../../redux/store";
import Header from "../../header/Header";
import MovieCard from "../cart/MovieCard";
import {Provider} from "react-redux";
import SearchBar from "../SearchBar";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: '',
        };

        store.subscribe(() => {
            // When state will be updated(in our case, when items will be fetched),
            // we will update local component state and force component to rerender
            // with new data.

            this.setState({
                items: store.getState().selectedType
            });
        });
    }
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Header message='Movie2Night'/>
                    <MovieCard name='Dabang'
                               releaseDate='20 Dec 2019'
                               info="Salman's latest movie"
                               rating='2'
                               imgaeUrl='./movie.jpeg'
                               store={store}

                    />
                </Provider>
            </div>
        );
    }
}

export default Home;
