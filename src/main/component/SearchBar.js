import React, {Component} from 'react';

import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015


class SearchBar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            minLength: 0,
            open: undefined,
            data : props.data
        };
    }


    changeEvent = (e) => {
        const {checked, name} = e.target;
        const newState = {[name]: checked};

        switch (name) {
            case 'minLength':
                newState[name] = checked ? 2 : 0;
                break;
            case 'open':
                newState[name] = checked ? true : undefined;
                break;
            default:
                break;
        }

        this.setState(newState);
    }

    render() {
        return (
            <Typeahead
                {...this.state}
                id="basic-example"
                onChange={this.changeEvent}
                options={this.state.data}
                placeholder="Movies like"
                maxVisible={0}

            />
        )

    }
}

export default SearchBar;
