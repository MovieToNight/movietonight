import React from 'react';

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';




export default function FavRated() {
    const [selected, setSelected] = React.useState(false);

    return (
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
    );
}
