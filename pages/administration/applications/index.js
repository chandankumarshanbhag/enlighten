import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography, Tab, Tabs, Divider } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import SidebarItems from "common/Administration/AdministrationSidebarItems"
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


export default function Custom404() {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0)


    return <DefaultLayout topbar={{
        title: "Administration",
        institutionSelection: true
    }} sidebar={{ items: SidebarItems }}>
        <Tabs value={currentTab} onChange={(e, tab) => setCurrentTab(tab)}>
            <Tab label="Applications"></Tab>
            <Tab label="Return Applications"></Tab>
        </Tabs>
        <Divider />
    </DefaultLayout>
}