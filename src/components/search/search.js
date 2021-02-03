import React from 'react'
import Field from "./field"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: '.8rem',
        right: theme.spacing(8),
        zIndex: 1200,
    },
    search: {
        zIndex: 1300,
    },
}));


const Search = ({
                    searchText,
                    onSearchTextChange,
                    loading,
                }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Field
                className={classes.search}
                loading={loading}
                query={searchText}
                label={"Search a Term"}
                placeHolder={"Search"}
                helperText={"any word..."}
                onChange={(value) => onSearchTextChange(value)}
            />
        </div>
    )
};

export default Search;