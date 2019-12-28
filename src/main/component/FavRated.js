import React, {Component} from 'react';
import {Rating} from 'semantic-ui-react'

class FavRated extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fav: this.props.fav
        }
    }

    render() {
        return (
            <div>

                <Rating icon='heart' defaultRating={this.state.fav} maxRating={1}/>
            </div>
        );
    }
}

export default FavRated;
