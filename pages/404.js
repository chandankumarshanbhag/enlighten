import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";

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
        width: "400px"
    }
}));


export default function Custom404() {
    const classes = useStyles();
    

    return <DefaultLayout topbar={true}>
        <div className={classes.root}>
            <div>
                <img src="assets/icons/undraw/svg/undraw_not_found_60pq.svg" className={classes.img} />
            </div>
            <br />
            <Typography variant="h2" component="h1">404</Typography>
            <Typography variant="h6">Page not found</Typography>
            <br />
            <Typography variant="body1">It seems you've ended up at the wrong page.</Typography>
            <br />
            <Button variant="outlined"
            onClick={router.back}
                startIcon={<ArrowBack />}>Go Back</Button>
        </div>
    </DefaultLayout>
}