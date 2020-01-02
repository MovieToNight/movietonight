import React from 'react';

import 'isomorphic-fetch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


function sleep(delay = 0) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}
const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const redirectToSimilarMoviePage = (e) => {
    console.log(e.target)
}

export default function SearchBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('http://localhost:8080/allMovies');
            await sleep(1e3); // For demo purposes.
            const movieNames = await response.json();
            if (active) {
                setOptions(Object.keys(movieNames).map(key => movieNames[key]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <div>
            <Autocomplete
                id="Movies Like"
                style={{width: 300}}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                getOptionSelected={(option, value) => option.name === value.name}
                getOptionLabel={option => option.name}
                options={options}
                loading={loading}

                renderInput=
                    {
                        params => (
                            <TextField
                                {...params}
                                label="Movies Like"
                                placeholder={'Search Similar Movies'}
                                fullWidth
                                variant='outlined'
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <IconButton className={classes.iconButton} aria-label={'search'}>
                                            <SearchIcon/>
                                        </IconButton>
                                    ),
                                    startAdornment: (
                                        <React.Fragment>
                                            {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                        </React.Fragment>
                                    ),
                                }}
                                style={{width: 350}}
                                onBlur={redirectToSimilarMoviePage}
                            />
                        )}
            />
            {/* <Button>Search</Button>*/}
        </div>
    );
}
