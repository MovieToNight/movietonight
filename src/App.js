import React, {Component} from 'react';
import store from "./main/redux/store";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./main/component/home/Home";
import MovieType from "./main/component/pages/MovieType";
import Movie from "./main/component/cart/Movie";
import SimilarMovies from "./main/component/pages/SimilarMovies";


class App extends Component {

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
            <div style={{backgroundColor: '#f2f2f2'}}>

                <Router>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={'/:genre'} component={MovieType}/>
                        <Route exact path={'/m2n/admin'} component={Movie}/>
                        <Route exact path={'/similarMovies/:movie'} component={SimilarMovies}/>

                    </Switch>
                </Router>
            </div>

        );
    }
}

export default App;
