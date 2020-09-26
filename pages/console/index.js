import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import ConsoleSidebarItems from "common/ConsoleSidebarItems"

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


    return <DefaultLayout topbar={{
        title: "Console"
    }} sidebar={{ items: ConsoleSidebarItems }}>
        <div className={classes.root}>
            <div>
                <img src="assets/icons/undraw/svg/undraw_Process_re_gws7.svg" className={classes.img} />
            </div>
            <br />
            <Typography variant="h2" component="h1">Work in progress</Typography>
            <br />
            <Button variant="outlined"
                onClick={router.back}
                startIcon={<ArrowBack />}>Go Back</Button>
        </div>
    </DefaultLayout>
}