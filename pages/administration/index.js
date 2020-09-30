import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import SidebarItems from "common/Administration/AdministrationSidebarItems"

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


export default function Custom404() {
    const classes = useStyles();


    return <DefaultLayout topbar={true} sidebar={{
        items: SidebarItems
    }} institutionSeletion={true}>
    </DefaultLayout>
}