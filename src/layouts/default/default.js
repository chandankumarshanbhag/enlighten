import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { IconButton, useMediaQuery, List, ListItem, ListItemIcon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import WhereToVote from '@material-ui/icons/WhereToVote';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

import { Sidebar, Topbar } from './components';



const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        overflow: "hidden",
        paddingTop: 64,
        height: '100% !important',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        },
        // backgroundColor: '#F4F6F8'
    },
    shiftContent: {
        paddingLeft: 240
    },
    content: {
        position: "relative",
        height: 'calc(100vh - 64px)',
        // overflow: "scroll"
    }
}));

const DefaultLayout = props => {
    const { children } = props;

    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    });

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };
    const handleSidebar = () => {
        console.log(openSidebar)
        setOpenSidebar(!openSidebar);
    };

    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };

    const shouldOpenSidebar = isDesktop ? true : openSidebar;
    return (
        <div
            className={props.sidebar ? clsx({
                [classes.root]: true,
                [classes.shiftContent]: isDesktop
            }) : classes.root}
        >
            {props.topbar && <Topbar onSidebarOpen={handleSidebar} {...props.topbar} />}
            {props.sidebar && <Sidebar
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                variant={isDesktop ? 'persistent' : 'temporary'}
                sidebar={props.sidebar}
            />}

            <main className={classes.content}>
                {children}
                {/* <Footer /> */}
            </main>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node,
    institutionSeletion: PropTypes.bool,
    alert: PropTypes.object
};

export default DefaultLayout;
