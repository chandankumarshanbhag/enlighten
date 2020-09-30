import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography, Divider, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { TextField, Grid, Toolbar, IconButton } from "@material-ui/core";
import Icon from '@mdi/react';
import router from "next/router";
import ConsoleSidebarItems from "common/Console/ConsoleSidebarItems"
import { useState } from "react";
import TableIcons from "common/DataTable/TableIcons"
import { mdiPlus,mdiCheck,mdiDelete } from '@mdi/js';
import DataGrid from "common/DataTable/DataTable"
import ConsoleAlert from "common/Console/ConsoleAlert"
import InstitutionSelection from "../components/InstitutionSelection"
import { Formik } from 'formik';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        flexDirection: "column"
    },
    topBar: {

        // maxHeight: "64px !important",
        // minHeight: "unset !important",
        height: "64px",
        width: "100%",
        flexGrow: 1,
        display: "flex",
        overflowX: "auto",
        justifyContent: "space-between"
    },
    toolbarButtons: {
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            display: "block"
        },
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    detailsContainer: {
        margin: theme.spacing(3)
    }
}));


export default function Custom404() {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);


    return <DefaultLayout topbar={{
        title: "Console",
        alert: ConsoleAlert
    }} sidebar={{ items: ConsoleSidebarItems }}>
        <Toolbar className={classes.topBar}>
            <Typography variant="h6" className={classes.title}>

            </Typography>
            <Button variant="contained" className={classes.menuButton} startIcon={<Icon path={mdiPlus} size={1} />} color="primary">Add Institution</Button>

        </Toolbar>
        <Divider />
        <InstitutionSelection>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <div>
                        <Toolbar className={classes.topBar}>
                            <Typography variant="h5" className={classes.title}>
                                Institution Details
                            </Typography>
                            <div>
                                <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiCheck} size={1} />} color="primary">Save</Button>
                                <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiDelete} size={1} color="primary" />} color="default">Delete</Button>
                            </div>
                        </Toolbar>
                        <Divider />
                        <form onSubmit={handleSubmit} className={classes.detailsContainer}>
                            <Grid container spacing="2">
                                <Grid item md={8}>
                                    <TextField
                                        type="text"
                                        name="name"
                                        label="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={4}>
                                    <TextField
                                        type="text"
                                        name="shortname"
                                        label="Short Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        type="text"
                                        name="address"
                                        label="Address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                        fullWidth
                                        multiline
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                )}
            </Formik>

        </InstitutionSelection>
    </DefaultLayout>
}