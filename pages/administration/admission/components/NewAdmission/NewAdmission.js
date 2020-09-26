

import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography, Tab, Tabs, Divider, TextField, Grid, Toolbar, IconButton, Stepper, Step, StepLabel, StepContent } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import { useState } from "react";
import { Icon } from "@mdi/react"
import { mdiUndo, mdiRedo, mdiDelete, mdiArrowLeft, mdiArrowRight, mdiContentSave, mdiContentSaveMove } from '@mdi/js';

import { Formik } from 'formik';

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        height: "100%"
    },
    topBar: {
        // maxHeight: "64px !important",
        // minHeight: "unset !important",
        height: "64px",
        width: "100%",
        flexGrow: 1,
        display: "flex",
        overflowX: "auto"
    },
    toolbarButtons: {
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            display: "block"
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    formContainer: {
        height: "calc(100% - 50px) !important",
        position: "relative",
        display: "block",
        overflow: "scroll",
        margin: 0,
    },
    form: {
        // overflow: "hidden",
        zIndex: 3484,
        height: "100%",
        // padding: theme.spacing(2),
        margin: theme.spacing(1),
        // padding: theme.spacing(2)
    },
}));


export default function NewAdmission() {
    const classes = useStyles();

    return <Formik
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
        }}>
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm
            /* and other goodies */
        }) => (<div className={classes.root}>
            <Toolbar className={classes.topBar}>
                <Typography variant="h6" className={classes.title}>

                </Typography>
                {/* <div className={classes.toolbarButtons}> */}
                {/* <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                    <Icon path={mdiUndo}
                        size={1} />
                </IconButton>
                <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                    <Icon path={mdiRedo}
                        size={1} />
                </IconButton> */}
                <Button variant="contained" className={classes.menuButton} startIcon={<Icon path={mdiArrowLeft} size={1} />} color="default">Prev</Button>
                <Button variant="contained" className={classes.menuButton} startIcon={<Icon path={mdiArrowRight} size={1} />} color="default">Next</Button>
                <Button variant="contained" className={classes.menuButton} startIcon={<Icon path={mdiContentSaveMove} size={1} />} color="default">Save Draft</Button>
                <Button variant="contained" className={classes.menuButton} disabled={isSubmitting} onClick={handleSubmit} startIcon={<Icon path={mdiContentSave} size={1} />} color="primary">Save</Button>
                <IconButton onClick={resetForm} edge="start" className={classes.menuButton} aria-label="menu">
                    <Icon path={mdiDelete}
                        size={1} />
                </IconButton>
                {/* </div> */}
            </Toolbar>
            <Divider />

                <div className={classes.formContainer}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Stepper orientation="vertical">
                    <Step>
                        <StepLabel>Student Info</StepLabel>
                        <StepContent>
                            <Grid container spacing="2">
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        type="text"
                                        name="text"
                                        label="Application No."
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        type="text"
                                        name="text"
                                        label="REGD No."
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        type="text"
                                        name="text"
                                        label="Roll No."
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        type="text"
                                        name="text"
                                        label="Admission No."
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        type="text"
                                        name="text"
                                        label="TC No."
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        type="text"
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        type="name"
                                        name="text"
                                        label="Name"
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        type="date"
                                        name="dob"
                                        label="Date Of Birth"
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        type="email"
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        type="password"
                                        name="password"
                                        label="Password"
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        error={errors.password && touched.password}
                                        helperText={errors.password}
                                    />
                                </Grid>
                            </Grid>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Office</StepLabel>
                        <StepContent><Grid container spacing="2">
                            <Grid item md={3} xs={12}>
                                <TextField
                                    type="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={errors.email && touched.email}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <TextField
                                    type="password"
                                    name="password"
                                    label="Password"
                                    fullWidth
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={errors.password && touched.password}
                                    helperText={errors.password}
                                />
                            </Grid>
                        </Grid>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Parent Info</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Qualification</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Course Details</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Documents</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Scholarship and Schemes</StepLabel>
                    </Step>
                </Stepper>
            </form>
            </div>

        </div>)}
    </Formik>;
}