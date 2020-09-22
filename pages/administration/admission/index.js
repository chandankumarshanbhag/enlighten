import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography, Tab, Tabs, Divider } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import SidebarItems from "common/AdministrationSidebarItems"
import { useState } from "react";
import NewAdmission from "./components/NewAdmission/NewAdmission"
import Drafts from "./components/Drafts/Drafts"
import ReAdmission from "./components/ReAdmission/ReAdmission"

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


    return <DefaultLayout topbar={true} sidebar={{ items: SidebarItems }}>
        <Tabs value={currentTab} onChange={(e, tab) => setCurrentTab(tab)}>
            <Tab label="New Admission"></Tab>
            <Tab label="Readmission"></Tab>
            <Tab label="Drafts"></Tab>
        </Tabs>
        <Divider />
        {currentTab==0 && <NewAdmission />}
        {currentTab==1 && <ReAdmission />}
        {currentTab==2 && <Drafts />}
        
    </DefaultLayout>
}