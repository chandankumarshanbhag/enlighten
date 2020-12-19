import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles, fade } from "@material-ui/core/styles"
import { Button, Typography, Divider, Drawer, List, ListItem, ListItemText, MenuItem } from "@material-ui/core";
import { TextField, Grid, Toolbar, IconButton } from "@material-ui/core";
import Icon from '@mdi/react';
import router from "next/router";
import ConsoleSidebarItems from "common/Console/ConsoleSidebarItems"
import { useState } from "react";
import TableIcons from "common/DataTable/TableIcons"
import { mdiPlus, mdiCheck, mdiDelete, mdiSchool, mdiLabel, mdiBookOpenPageVariant, mdiBookOpenBlankVariant, mdiPen, mdiPencil } from '@mdi/js';
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
import Http, { ResponseCodes } from "utils/http"
import { useSnackbar } from 'notistack';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from '@material-ui/core/Select';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Menu from '@material-ui/core/Menu';
import useInstitutions from "utils/institution"



const StyledTreeItem = withStyles((theme) => ({
    root: {
        '&:hover > $content': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:focus > $content, &$selected > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        },
        '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
            backgroundColor: 'transparent',
        },
    },
    content: {
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        // padding: theme.spacing(0.3),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightMedium,
        },
    },
    iconContainer: {
        '& .close': {
            opacity: 0.3,
        },
    },
    group: {
        marginLeft: 7,
        paddingLeft: 18,
        borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
    expanded: {},
    selected: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
        '&:hover > $content': {
            backgroundColor: "transparent",
        },
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
    },
}))((props) => <TreeItem {...props} />);



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
        justifyContent: "space-between"
    },
    detailsContainer: {
        height: "100%",
        overflowY: "scroll",
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.dark,
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
    },
    headerContainer: {
        margin: theme.spacing(2)
    },
    header: {
        flexGrow: 1,
        display: "flex",
        overflowX: "auto",
        justifyContent: "space-between"
    },
    treeviewContainer: {
        backgroundColor: theme.palette.background.dark,
        borderRadius: "4px",
        padding: theme.spacing(2),
        userSelect: "none"
    }
}));


export default function Custom404() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);
    const { institutions } = useInstitutions();
    const [sectionsEdit, setSectionsEdit] = useState(null);
    const [subjectsEdit, setSubjectsEdit] = useState(null);
    const [selectedInstitution, setSelectedInstitution] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);
    // const [combinationMenuAnchorEl, setCombinationMenuAnchorEl] = useState(null);
    const [selectedNode, setSelectedNode] = React.useState(false);
    const [editSections, setEditSections] = React.useState(false);
    const [editSubjects, setEditSubjects] = React.useState(false);
    const [newCourse, setNewCourse] = React.useState(null);
    const [courses, setCourses] = React.useState([
        {
            id: 0,
            name: "Bachelor of commerce",
            shortName: "BCOM",
            combinations: [
                {
                    name: "BCOM",
                    sections: ["C1", "C2", "C3", "C4"],
                    subjects: [
                        {
                            name: "A",
                            code: "A",
                            type: "THEORY"
                        },
                        {
                            name: "B",
                            code: "B",
                            type: "THEORY"
                        },
                        {
                            name: "C",
                            code: "C",
                            type: "THEORY"
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            name: "Bachelor of management",
            shortName: "BBM",
            combinations: [
                {
                    name: "BBM",
                    sections: ["BBM"],
                    subjects: [
                        {
                            name: "A",
                            code: "A",
                            type: "THEORY"
                        },
                        {
                            name: "B",
                            code: "B",
                            type: "THEORY"
                        },
                        {
                            name: "C",
                            code: "C",
                            type: "THEORY"
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Bachelor of Arts",
            shortName: "BA",
            combinations: [
                {
                    name: "HEK",
                    sections: ["HEK"],
                    subjects: [
                        {
                            name: "A",
                            code: "A",
                            type: "THEORY"
                        },
                        {
                            name: "B",
                            code: "B",
                            type: "THEORY"
                        },
                        {
                            name: "C",
                            code: "C",
                            type: "THEORY"
                        }
                    ]
                },
                {
                    name: "HEP",
                    sections: ["HEP"],
                    subjects: [
                        {
                            name: "A",
                            code: "A",
                            type: "THEORY"
                        },
                        {
                            name: "B",
                            code: "B",
                            type: "THEORY"
                        },
                        {
                            name: "C",
                            code: "C",
                            type: "THEORY"
                        }
                    ]
                },
                {
                    name: "HSP",
                    sections: ["HSP"],
                    subjects: [
                        {
                            id: 10,
                            name: "A",
                            code: "A",
                            type: "THEORY"
                        },
                        {
                            name: "B",
                            code: "B",
                            type: "THEORY"
                        },
                        {
                            name: "C",
                            code: "C",
                            type: "THEORY"
                        }
                    ]
                }
            ]
        }
    ])

    function nodeChange(nodeIds) {
        setSelectedNode(nodeIds)
        if (nodeIds.length > 0) {
            if (nodeIds[0].search("sections") == -1) {
                setEditSections(false);
            }
            else {
                setEditSections(true);
            }
            if (nodeIds[0].search("subjects") == -1) {
                setEditSubjects(false);
            }
            else {
                setEditSubjects(true);
            }
        }
        else {
            setEditSections(false);
            setEditSubjects(false);
        }
    }

    function updateCourses() {
        new Http("/console/course?list")
            .onResponse(({ data: response }) => {
                if (response.code == ResponseCodes.OK) {
                    
                }
                else {
                    
                }
            }).onError(() => {
                enqueueSnackbar("Something went wrong", { variant: "error" })
            });
    }

    function addCourse() {
        if (newCourse) {
            if (newCourse.name == "") {
                enqueueSnackbar("Please enter the name", { variant: "error" })
            } else if (newCourse.shortName == "") {
                enqueueSnackbar("Please enter the short name", { variant: "error" })
            } else if (newCourse.duration == "") {
                enqueueSnackbar("Please enter the duration", { variant: "error" })
            } else if (newCourse.status == "") {
                enqueueSnackbar("Please enter the status", { variant: "error" })
            } else {
                new Http("/console/course?addCourse", newCourse)
                    .onResponse(({ data: response }) => {
                        if (response.code == ResponseCodes.OK) {
                            enqueueSnackbar("Course added successfully", { variant: "success" })
                            setNewCourse(null);
                        }
                        else {
                            enqueueSnackbar("Something went wrong", { variant: "error" })
                        }
                    }).onError(() => {
                        enqueueSnackbar("Something went wrong", { variant: "error" })
                    });
            }
        }
    }


    return <DefaultLayout topbar={{
        title: "Console",
        alert: ConsoleAlert
    }} sidebar={{ items: ConsoleSidebarItems }}>

        <InstitutionSelection onSelection={(institution) => {
            setSelectedInstitution(institution);
        }} institutions={institutions}>

            <div className={classes.titleBarContainer}>
                <Toolbar className={classes.titleBar}>
                    <Typography variant="h5" className={classes.title}>
                        Courses
                            </Typography>
                    <div>

                        <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiPlus} size={1} />} color="primary" onClick={() => setNewCourse({ name: "", shortName: "", duration: "", status: "INACTIVE" })}>Add Course</Button>
                    </div>
                </Toolbar>
            </div>
            <Divider />
            <div className={classes.detailsContainer}>
                {courses && courses.map((course, key) => {
                    return <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{course.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ display: "block", width: "100%" }}>
                            <div className={classes.headerContainer}>
                                <Grid container spacing="2">
                                    <Grid item md={5}>
                                        <TextField label="Full Name" fullWidth value={course.name}></TextField>
                                    </Grid>
                                    <Grid item md={3}>
                                        <TextField label="Short Name" fullWidth value={course.shortName}></TextField>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField label="Course duration" fullWidth select>
                                            <MenuItem value={10}>6 Months</MenuItem>
                                            <MenuItem value={20}>1 Year</MenuItem>
                                            <MenuItem value={30}>2 Year</MenuItem>
                                            <MenuItem value={30}>3 Year</MenuItem>
                                            <MenuItem value={30}>5 Year</MenuItem>
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.headerContainer}>


                                <div className={classes.treeviewContainer}>
                                    <div className={classes.header}>
                                        <Typography>Combinations</Typography>
                                        <div>
                                            <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiPlus} size={1} />} color="primary">Add Combination</Button>
                                            <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiPlus} size={1} />} color="primary" onClick={() => setSectionsEdit({})}>Add Section</Button>
                                            <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiPlus} size={1} />} color="primary" onClick={() => setSectionsEdit({})}>Add Subject</Button>
                                            <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiPencil} size={1} />} color="primary" disabled={!editSections} onClick={() => setSectionsEdit({})}>Edit</Button>
                                            <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiDelete} size={1} />} color="primary" disabled={!editSubjects} onClick={() => setSectionsEdit({})}>Delete</Button>

                                        </div>
                                    </div>

                                    <TreeView
                                        defaultCollapseIcon={<ExpandMoreIcon />}
                                        defaultExpandIcon={<ChevronRightIcon />}
                                        selected={selectedNode}
                                        multiSelect
                                        onNodeSelect={(e, nodeIds) => {
                                            nodeChange(nodeIds);
                                        }}
                                    >
                                        {course.combinations.map((combination, key) => {
                                            return <StyledTreeItem nodeId={combination.name} label={combination.name} icon={<Icon path={mdiSchool} size={1} />} color="primary">
                                                <StyledTreeItem nodeId={key + combination.name + "-sections"} label="Sections" icon={<Icon path={mdiLabel} size={1} />} color="primary">
                                                    {combination.sections.map((section, sectionKey) => {
                                                        return <TreeItem nodeId={key + combination.name + "-section" + section + "-" + sectionKey} label={section} unselectable={true} />
                                                    })}

                                                </StyledTreeItem>
                                                <StyledTreeItem nodeId={key + combination.name + "-subjects"} label="Subjects" icon={<Icon path={mdiBookOpenBlankVariant} size={1} />} color="primary">
                                                    {combination.subjects.map((subject, subjectKey) => {
                                                        return <TreeItem nodeId={key + combination.name + "-subject" + subject + "-" + subjectKey} label={subject.name} unselectable={true} />
                                                    })}
                                                </StyledTreeItem>
                                            </StyledTreeItem>
                                        })}
                                    </TreeView>
                                </div>
                            </div>




                        </AccordionDetails>
                        <Divider />
                        <AccordionDetails style={{ display: "block", width: "100%" }}>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiDelete} size={1} />}>Delete</Button>
                                <Button variant="text" className={classes.menuButton} startIcon={<Icon path={mdiCheck} size={1} />} color="primary">Save</Button>

                            </div>

                        </AccordionDetails>
                    </Accordion>
                })}

            </div>


        </InstitutionSelection>

        <Dialog
            open={Boolean(sectionsEdit)}
            onClose={() => setSectionsEdit(null)}
            PaperComponent={PaperComponent}
            aria-labelledby="drag"
            maxWidth="md"
        >
            <DialogTitle style={{ cursor: 'move' }} id="drag">
                Sections
            </DialogTitle>
            <DialogContent style={{ minWidth: "500px" }}>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setSectionsEdit(null)} color="primary">
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>

        {newCourse && <Dialog
            open={Boolean(newCourse)}
            onClose={() => setNewCourse(null)}
            PaperComponent={PaperComponent}
            aria-labelledby="drag"
            maxWidth="lg"
        >
            <DialogTitle style={{ cursor: 'move' }} id="drag">
                New Course
            </DialogTitle>
            <DialogContent style={{ minWidth: "600px" }}>
                <Grid container spacing="2">
                    <Grid item md={12}>
                        <TextField label="Full Name" fullWidth value={newCourse.name} onChange={({ target: { value } }) => setNewCourse({ ...newCourse, name: value })}></TextField>
                    </Grid>
                    <Grid item md={5}>
                        <TextField label="Short Name" fullWidth value={newCourse.shortName} onChange={({ target: { value } }) => setNewCourse({ ...newCourse, shortName: value })}></TextField>
                    </Grid>
                    <Grid item md={4}>
                        <TextField label="Course duration" fullWidth select value={newCourse.duration} onChange={({ target: { value } }) => setNewCourse({ ...newCourse, duration: value })}>
                            <MenuItem value={10}>6 Months</MenuItem>
                            <MenuItem value={20}>1 Year</MenuItem>
                            <MenuItem value={30}>2 Year</MenuItem>
                            <MenuItem value={30}>3 Year</MenuItem>
                            <MenuItem value={30}>5 Year</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Switch onChange={({ target: { checked } }) => setNewCourse({ ...newCourse, status: checked ? "ACTIVE" : "INACTIVE" })} />} label="Active" value={newCourse.status == "ACTIVE"}></FormControlLabel>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setNewCourse(null)} color="primary">
                    Cancel
                </Button>
                <Button onClick={addCourse} color="primary">
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