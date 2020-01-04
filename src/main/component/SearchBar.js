import React from 'react';
import {Dropdown} from 'semantic-ui-react'
import axios from "axios";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [],
            movies: []
        }
    }


    componentDidMount() {
        axios.get("http://localhost:8080/movieWithPoster")
            .then(res => {
                console.log("In API", res.data)
                this.setState({
                    movies: res.data
                })
            })
            .catch(val => {
                console.log(val)
            })
    }

    render() {
        return (
            <Dropdown
                placeholder='Search Similar Movies'
                fluid
                search
                selection
                options={this.state.movies}
                onSearchChange={this.fetchData}
                onClose={this.handleAddItem}
            />
        );
    }

    fetchData = () => {

    }

    handleAddItem = () => {
        console.log("On done")
    }
}

export default SearchBar;
