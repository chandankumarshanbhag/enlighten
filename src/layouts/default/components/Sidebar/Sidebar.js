import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, List, ListItem } from '@material-ui/core';
import Link from "next/link";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalance from '@material-ui/icons/AccountBalance';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import StorageOutlined from '@material-ui/icons/StorageOutlined';
import Assignment from "@material-ui/icons/Assignment";
import FolderShared from '@material-ui/icons/FolderShared';
import DeleteOutline from '@material-ui/icons/Delete';

import { SidebarNav, SidebarNavMini } from './components';

import NewButton from './components/NewButton';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  drawerMini: {
    width: 60,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    // padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  },

}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <StorageOutlined />
    },
    {
      title: 'Report',
      href: '/report',
      icon: <Assignment />
    },
    // {
    //   title: 'Institution',
    //   href: '/institution',
    //   icon: <AccountBalance />
    // },
    // {
    //   title: 'Academic',
    //   href: '/academic',
    //   icon: <AccountBalance />
    // },
    // {
    //   title: 'Products',
    //   href: '/products',
    //   icon: <ShoppingBasketIcon />
    // },
    // {
    //   title: 'Authentication',
    //   href: '/sign-in',
    //   icon: <LockOpenIcon />
    // },
    // {
    //   title: 'Typography',
    //   href: '/typography',
    //   icon: <TextFieldsIcon />
    // },
    // {
    //   title: 'Icons',
    //   href: '/icons',
    //   icon: <ImageIcon />
    // },
    // {
    //   title: 'Account',
    //   href: '/account',
    //   icon: <AccountBoxIcon />
    // },
    // {
    //   title: 'Settings',
    //   href: '/settings',
    //   icon: <SettingsIcon />
    // }
  ];


  if (!props.sidebar) {
    return <></>;
  }
  return (
    <Drawer
      anchor="left"
      classes={{ paper: props.sidebar.mini ? classes.drawerMini : classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        {/* <Profile /> */}
        {/* <Divider className={classes.divider} /> */}
        {/* <List>
          <Link href="/scan">
        <ListItem>
          <NewButton />
        </ListItem>
          </Link>
      </List> */}

        {props.sidebar.mini ? <SidebarNavMini
          className={classes.nav}
          pages={props.sidebar.items} /> : <SidebarNav
          className={classes.nav}
          pages={props.sidebar.items}
        />}
        {/* <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={[{
            title: "Settings",
            href: "/settings",
            icon: <SettingsIcon />
          }]}
        /> */}
        {/* <UpgradePlan /> */}
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
