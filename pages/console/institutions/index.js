import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography, Divider, Drawer, List, ListItem, ListItemText, MenuItem } from "@material-ui/core";
import { TextField, Grid, Toolbar, IconButton } from "@material-ui/core";
import Icon from '@mdi/react';
import router from "next/router";
import ConsoleSidebarItems from "common/Console/ConsoleSidebarItems"
import { useState } from "react";
import TableIcons from "common/DataTable/TableIcons"
import { mdiPlus, mdiCheck, mdiDelete } from '@mdi/js';
import DataGrid from "common/DataTable/DataTable"
import ConsoleAlert from "common/Console/ConsoleAlert"
import InstitutionSelection from "../components/InstitutionSelection"
import { Formik } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Institution as InstitutionConfig } from "config/index"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Http from "utils/http"
import { useSnackbar } from 'notistack';




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
    titleBarContainer: {
        display: "block"
    },
    titleBar: {
        height: "64px",
        width: "100%",
        flexGrow: 1,
        display: "flex",
        overflowX: "auto",
        justifyContent: "space-between",
        // position: "absolute",
        // top: 0,
        // left: 0,
        // backgroundColor: "#fff"

    },
    detailsContainer: {
        height: "calc(100% - 64px)",
        overflowY: "scroll"
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
    form: {
        margin: theme.spacing(3)
    }
}));


export default function Custom404() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);
    const [institutions, setInstitutions] = useState([]);
    const [newInstitution, setNewInstitution] = useState(null);
    const [selectedInstitution, setSelectedInstitution] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);

    function addInstitution() {
        new Http("/console/institution?addInstitution", newInstitution)
            .onResponse((data) => {
                updateInstitutions();
            }).onError(() => {
                updateInstitutions();
            });
        setNewInstitution(null);

    }


    function updateInstitutions() {
        new Http("/console/institution?list")
            .onResponse(({ data: { data } }) => {
                setInstitutions(data);
            }).onError((e) => {
                console.log(e)
            });
    }

    React.useEffect(() => {
        updateInstitutions();
    }, [])

    function instituteStatusChange(instituteId, status) {
        new Http("/console/institution?instituteStatusChange", { instituteId, status })
            .onResponse(({ data: { data } }) => {
                updateInstitutions();
                enqueueSnackbar("Update successful.", { variant: "success" });
            }).onError((e) => {
                updateInstitutions();
                enqueueSnackbar("Update error.", { variant: "error" });
            });
    }


    function save(data) {
        new Http("/console/institution?save", data)
            .onResponse(({ data: { data } }) => {
                updateInstitutions();
                enqueueSnackbar("Save successful.", { variant: "success" });
            }).onError((e) => {
                updateInstitutions();
                enqueueSnackbar("Save error.", { variant: "error" });
            });
    }

    function deleteInstitution() {
        new Http("/console/institution?delete", selectedInstitution)
            .onResponse(({ data: { data } }) => {
                setDeleteModal(null);
                setSelectedInstitution(null);
                updateInstitutions();
                enqueueSnackbar("Delete successful.", { variant: "success" });
            }).onError((e) => {
                setDeleteModal(null);
                updateInstitutions();
                enqueueSnackbar("Delete error.", { variant: "error" })
            });
    }


    return <DefaultLayout topbar={{
        title: "Console",
        alert: ConsoleAlert
    }} sidebar={{ items: ConsoleSidebarItems }}>
        <Toolbar className={classes.topBar}>
            <Typography variant="h6" className={classes.title}>

            </Typography>
            <Button variant="contained" onClick={() => setNewInstitution({ name: "" })} className={classes.menuButton} startIcon={<Icon path={mdiPlus} size={1} />} color="primary">Add Institution</Button>
        </Toolbar>
        <Divider />
        <InstitutionSelection onSelection={(institution) => {
            setSelectedInstitution(institution);
        }} institutions={institutions}>
            {selectedInstitution && <Formik
                initialValues={selectedInstitution}
                key={selectedInstitution.id}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Name is required';
                    }
                    else if (!/^[a-zA-Z',.\(\)\- ]+$/.test(values.name)) {
                        errors.name = 'Name should contain characters only.';
                    }
                    if (!values.shortName) {
                        errors.shortName = 'Short Name field is required';
                    }
                    else if (!/^[a-zA-Z',.\(\)\- ]+$/.test(values.shortName)) {
                        errors.shortName = 'Short should contain characters only.';
                    }
                    if (!values.address) {
                        errors.address = 'Address field is required';
                    }
                    if (!values.type) {
                        errors.type = 'Institution type field is required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                    save(values);
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
                    setValues,
                    isValid,
                    validateForm
                    /* and other goodies */
                }) => (
                    <>
                        <div className={classes.titleBarContainer}>
                            <Toolbar className={classes.titleBar}>
                                <Typography variant="h5" className={classes.title}>
                                    Institution Details
                            </Typography>
                            <div>
                                <FormControlLabel
                                    control={<Switch name="status" />}
                                    label="Active"
                                    checked={values.status == "ACTIVE"}
                                    onChange={async (e, checked) => {
                                        if (isValid && Object.keys(await validateForm()).length == 0) {
                                            if (checked) {
                                                instituteStatusChange(selectedInstitution.id, "ACTIVE");
                                                setValues({ ...values, status: "ACTIVE" })
                                            }
                                            else {
                                                instituteStatusChange(selectedInstitution.id, "INACTIVE");
                                                setValues({ ...values, status: "INACTIVE" })
                                            }
                                        }
                                        else {
                                            enqueueSnackbar("Invalid inputs.", { variant: "error" })
                                        }
                                    }}
                                />
                                <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiCheck} size={1} />} color="primary" onClick={handleSubmit}>Save</Button>
                                <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiDelete} size={1} color="primary" />} color="default" onClick={() => setDeleteModal({})}>Delete</Button>
                                </div>
                            </Toolbar>
                        </div>
                        <Divider />
                        <div className={classes.detailsContainer}>

                            <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                                <Grid container spacing="2">
                                    <Grid item md={8}>
                                        <TextField
                                            type="text"
                                            name="name"
                                            label="Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            error={errors.name}
                                            helperText={errors.name}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField
                                            type="text"
                                            name="shortName"
                                            label="Short Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.shortName}
                                            error={errors.shortName}
                                            helperText={errors.shortName}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item md={9}>
                                        <TextField
                                            type="text"
                                            name="address"
                                            label="Address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address}
                                            error={errors.address}
                                            helperText={errors.address}
                                            fullWidth
                                            multiline
                                            required
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <TextField
                                            type="text"
                                            name="institutionFor"
                                            label="Institution For"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.institutionFor}
                                            error={errors.institutionFor}
                                            helperText={errors.institutionFor}
                                            fullWidth
                                            multiline
                                            select
                                            required
                                        >
                                            <MenuItem value="ALL">All</MenuItem>
                                            <MenuItem value="MALE">Only Male</MenuItem>
                                            <MenuItem value="FEMALE">Only Female</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            type="text"
                                            name="type"
                                            label="Type"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.type}
                                            error={errors.type}
                                            helperText={errors.type}
                                            fullWidth
                                            select
                                            required
                                        >
                                            {InstitutionConfig.types.map((x, key) => {
                                                return <MenuItem value={x}>{x}</MenuItem>;
                                            })}
                                        </TextField>
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            type="text"
                                            name="universityBoardAuthority"
                                            label="University / Board / Authority"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.universityBoardAuthority}
                                            error={errors.universityBoardAuthority}
                                            helperText={errors.universityBoardAuthority}
                                            fullWidth
                                            required
                                        ></TextField>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </>
                )}
            </Formik>}


        </InstitutionSelection>

        {newInstitution && <Dialog
            open={Boolean(newInstitution)}
            onClose={() => setNewInstitution(null)}
            PaperComponent={PaperComponent}
            aria-labelledby="newInstitution"
            maxWidth="md"
        >
            <DialogTitle style={{ cursor: 'move' }} id="newInstitution">
                New Institution
            </DialogTitle>
            <DialogContent style={{ minWidth: "500px" }}>
                <Grid container spacing="2">
                    <Grid item md={12}>
                        <TextField fullWidth label="Institution Name" value={newInstitution.name} onChange={({ target: { value } }) => setNewInstitution({ name: value })} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setNewInstitution(null)} color="primary">
                    Cancel
                </Button>
                <Button onClick={addInstitution} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>}


        {deleteModal && <Dialog
            open={deleteModal}
            onClose={() => setDeleteModal(null)}
            PaperComponent={PaperComponent}
            aria-labelledby="deleteModal"
            maxWidth="sm"
        >
            <DialogTitle style={{ cursor: 'move' }} id="drag">
                Delete
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setDeleteModal(null)} color="primary">
                    Cancel
                </Button>
                <Button onClick={deleteInstitution} color="danger">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>}


    </DefaultLayout>
}










function PaperComponent(props) {
    return (
        <Draggable handle="#drag" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}


function Form() {

}