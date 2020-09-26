import React from "react"
import DefaultLayout from "layouts/default"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, Typography, Tab, Tabs, Divider } from "@material-ui/core";
import { TextField, Grid, Toolbar, IconButton } from "@material-ui/core";
import Icon from '@mdi/react';
import { ArrowBack } from "@material-ui/icons";
import router from "next/router";
import ConsoleSidebarItems from "common/ConsoleSidebarItems"
import { useState } from "react";
import MaterialTable from 'material-table'
import TableIcons from "common/DataTable/TableIcons"
import { DataGrid } from '@material-ui/data-grid';
import { mdiUndo, mdiRedo, mdiDelete, mdiArrowLeft, mdiArrowRight, mdiContentSave, mdiContentSaveMove } from '@mdi/js';

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
    topBar: {
        height: "64px",
        width: "100%",
        flexGrow: 1,
        display: "flex",
        overflowX: "auto",
        justifyContent: "flex-end"
    },
    toolbarButtons: {
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            display: "block"
        },
    },
    img: {
        width: "300px"
    },
    table: {
        paper: {
            rounded: {
                borderRadius: "0"
            }
        }
    }
}));


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''
            }`,
    },
];

const rows = [
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export default function Custom404() {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);


    return <DefaultLayout topbar={true} sidebar={{ items: ConsoleSidebarItems }}>
        <Toolbar className={classes.topBar}>
            <Typography variant="h6" className={classes.title}>

            </Typography>
            <Button variant="contained" className={classes.menuButton} startIcon={<Icon path={mdiContentSave} size={1} />} color="primary">Add</Button>

        </Toolbar>
        <Divider />
        <DataGrid rows={rows} columns={columns} autoHeight />
    </DefaultLayout>
}