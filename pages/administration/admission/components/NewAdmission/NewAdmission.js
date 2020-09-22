

import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography, Tab, Tabs, Divider } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    root: {
        
    }
}));


export default function NewAdmission() {
    const classes = useStyles();

    return <div className={classes.root}>

    </div>
}