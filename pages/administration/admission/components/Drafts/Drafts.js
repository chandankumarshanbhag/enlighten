

import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography, Tab, Tabs, Divider } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    root: {
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        flexDirection: "column"
    },
    img: {
        width: "300px"
    }
}));


export default function NewAdmission() {
    return <div>Drafs</div>
}