import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles"
import { Button, Typography, Divider, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import Http from "utils/http"

const useStyles = makeStyles(theme => ({
    institutionContainer: {
        position: "relative",
        // height: "calc(100% - 64px)",
        height: "100%",
        width: "100%",
        // display: "flex"
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
        position: "relative",
        width: "100%",
        height: "calc(100% - 64px)",
        // overflowY: "scroll",
        paddingLeft: "336px"
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
    const [selectedInstitution, setSelectedInstitution] = useState(null);

    return <div className={classes.institutionContainer}>
        <Drawer variant="permanent" className={classes.institutionDrawerContainer} classes={{
            paper: classes.institutionListContainer,
        }}>
            <List className={classes.institutionList}>
                <ListItem className={classes.institutionTitle}>
                    <ListItemText primary="   " secondary="Institutions"></ListItemText>
                </ListItem>
                <Divider />
                {props.institutions && props.institutions.map((x, key) => {
                    return <>
                        <ListItem button className={selectedInstitution==key?classes.institutionActive:null}  onClick={() => {
                            setSelectedInstitution(key)
                            if(props.onSelection){
                                props.onSelection(x);
                            }
                        }}>
                            <ListItemText primary={x.name} secondary={x.address}></ListItemText>
                        </ListItem>
                        <Divider />
                    </>;
                })}

            </List>
        </Drawer>
        <div className={classes.institutionDetails}>
            {props.children}
        </div>
    </div>
}