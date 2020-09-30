import React from "react";
import { makeStyles } from "@material-ui/styles"
import { Button, Typography, Divider, Drawer, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    institutionContainer: {
        position: "relative",
        height: "calc(100% - 64px)",
        width: "100%",
        display: "flex"
    },
    institutionDrawerContainer: {
        width: "336px"
    },
    institutionListContainer: {
        position: "absolute",
        width: "336px"
    },
    institutionDetails: {
        display: "block",
        width: "100%",
        // margin: theme.spacing(2)
    },
    institutionActive: {
        backgroundColor: theme.palette.action.selected
    },
    institutionList: {
        padding: "0px"
    },
    institutionTitle: {
        height: "64px"
    }
}));

export default (props) => {
    const classes = useStyles();

    return <div className={classes.institutionContainer}>
        <Drawer variant="permanent" className={classes.institutionDrawerContainer} classes={{
            paper: classes.institutionListContainer,
        }}>
            <List className={classes.institutionList}>
                <ListItem className={classes.institutionTitle}>
                    <ListItemText primary="   " secondary="Institutions"></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button className={classes.institutionActive}>
                    <ListItemText primary="Bhandarkars Arts and Science College" secondary="Kundapura, Udupi DIST - 576201"></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Bhandarkars PU College" secondary="Kundapura, Udupi DIST - 576201"></ListItemText>
                </ListItem>
                <Divider />
            </List>
        </Drawer>
        <div className={classes.institutionDetails}>
            {props.children}
        </div>
    </div>
}