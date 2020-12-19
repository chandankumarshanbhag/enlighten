

import React, { useState } from "react"
import DefaultLayout from "layouts/default"
import { makeStyles } from "@material-ui/styles"
import { Button, Typography, MenuItem, Divider, TextField, Grid, Toolbar, IconButton, Stepper, Step, StepLabel, StepContent, StepButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import { Icon } from "@mdi/react"
import { mdiDelete, mdiArrowLeft, mdiArrowRight, mdiContentSave, mdiContentSaveMove } from '@mdi/js';
import CountriesData from "data/countries";
import Autocomplete from '@material-ui/lab/Autocomplete';
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
    const [activeStep, setActiveStep] = useState(0)

    return <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
            console.log(values)
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
                <Typography variant="h6" className={classes.title}></Typography>
                <Button variant="contained" className={classes.menuButton} startIcon={<Icon path={mdiContentSaveMove} size={1} />} color="default">Save Draft</Button>
                <Button variant="contained" className={classes.menuButton} disabled={isSubmitting} onClick={handleSubmit} startIcon={<Icon path={mdiContentSave} size={1} />} color="primary">Save</Button>
                <IconButton onClick={resetForm} edge="start" className={classes.menuButton} aria-label="menu">
                    <Icon path={mdiDelete}
                        size={1} />
                </IconButton>
            </Toolbar>
            <Divider />

            <div className={classes.formContainer}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Stepper orientation="vertical" activeStep={activeStep}>
                        <Step onClick={() => setActiveStep(0)}>
                            <StepLabel>
                                Student Info
                            </StepLabel>
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
                                    <Grid item md={2} xs={12}>
                                        <TextField
                                            type="text"
                                            name="nationality"
                                            label="Nationality"
                                            fullWidth
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nationality}
                                            error={errors.nationality && touched.nationality}
                                            helperText={errors.nationality}
                                            select
                                        >
                                            {CountriesData.map(x => <MenuItem key={x.name} value={x.name}> <img width="20px" src={"../../assets/country_flags/" + x.code.toLowerCase() + ".svg"} /> &nbsp;{x.name}</MenuItem>)}
                                        </TextField>
                                    </Grid>
                                </Grid>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Button variant="contained">Prev</Button>
                                    <Button color="primary" variant="contained">Next</Button>
                                </div>
                            </StepContent>
                        </Step>
                        <Step onClick={() => setActiveStep(1)}>
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
                        <Step onClick={() => setActiveStep(2)} completed={false}>
                            <StepLabel error={true}>Parent Info</StepLabel>
                        </Step>
                        <Step onClick={() => setActiveStep(3)}>
                            <StepLabel>Qualification</StepLabel>
                        </Step>
                        <Step onClick={() => setActiveStep(4)}>
                            <StepLabel>Course Details</StepLabel>
                        </Step>
                        <Step onClick={() => setActiveStep(5)}>
                            <StepLabel>Documents</StepLabel>
                        </Step>
                        <Step onClick={() => setActiveStep(6)}>
                            <StepLabel>Scholarship and Schemes</StepLabel>
                        </Step>
                    </Stepper>
                </form>
            </div>

        </div>)}
    </Formik>;
}