import React, { useState } from 'react'
import Add from '@material-ui/icons/Add';
import { Fab, Menu, MenuItem } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Folder, InsertDriveFile,CenterFocusStrong } from "@material-ui/icons"
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
    newBtn: {
        background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
        color: "#fff",
        width: "100%"
    },
    menu: {
        width: "100%"
    },
    menuItem: {
        width: "200px"
    },
    menuItemIcon: {
        marginRight: theme.spacing(2),
        color: theme.palette.primary.main
    }
}))
export default function NewButton() {
    const classes = useStyles();
    return <Fab className={classes.newBtn} variant="extended">Scan &nbsp;&nbsp;&nbsp;&nbsp;<CenterFocusStrong /></Fab>;
}
