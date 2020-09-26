import React, { Component } from 'react'
import {makeStyles} from "@material-ui/styles"
import MaterialTable from 'material-table'

const useStyles = makeStyles(theme => ({
    
}))


export default (props) => {
    const classes = useStyles();
    let tableProps = { ...props, className: "" }
    return <div><MaterialTable

        {...tableProps}
    /></div>;
}