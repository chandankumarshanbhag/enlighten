import React, { useState } from 'react';

import Link from "next/link";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
//import Logo from "assets/imgs/logo.png"
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import { useUI } from "utils/ui"
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';
import ListSubheader from '@material-ui/core/ListSubheader';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { red } from '@material-ui/core/colors';
import Head from 'next/head'

const Logo = null;

const RemovedUnderlineTextField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      border: 'none',
    }
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    height: 64,
    boxShadow: 'none',
    borderBottom: "1px solid rgba(200,200,200,0.5)",
    zIndex: 1230
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  title: {
    minWidth: "calc(240px - 48px)"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  search: {
    position: 'relative',
    zIndex: 9998,
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: "#f1f3f4",
    '&:hover': {
      // backgroundColor: "#f1f3f4",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // minHeight: "64px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  popover: {
    zIndex: 9999
  },
  popoverContainer: {
    padding: theme.spacing(1),
    minWidth: "360px",
    maxHeight: "480px"
  },
  alert: {
    // width: "80%",
    height: "62px"
  }
}));

const Topbar = props => {

  const { setCurrentTheme, getThemes, getCurrentThemeIndex } = useUI();
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);
  const [popover, setPopover] = React.useState({ anchorEl: null });

  const openPopover = (event, View) => {
    setPopover({ anchorEl: event, View });
  };

  const closePopover = () => {
    setPopover({ anchorEl: null, View: null });
  };

  return (
    <>
      <Head><title>{typeof props.title == "string" ? props.title + " | Enlighten" : "Enlighten"}</title></Head>
      <AppBar
        {...rest}
        color="white"
        className={clsx(classes.root, className)}
        position="fixed"
      >
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" onClick={() => onSidebarOpen()}>
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography className={classes.title} variant="h4" noWrap>
              {props.title ? props.title : "Enlighten"}
            </Typography>
          </Link>

          {/* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div> */}
          <div className={classes.search}>
            {/* <center>
          <img src="assets/logos/topbar.jpg" style={{width: "300px",height: "100%"}} />
          </center> */}
            {props.institutionSelection?<RemovedUnderlineTextField
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              select
              value={10}
            >
              <ListSubheader>Institutions</ListSubheader>
              <MenuItem value={10}>Bhandarkars' Arts and Science College</MenuItem>
              <MenuItem value={20}>Bhandarkars' PU College</MenuItem>
            </RemovedUnderlineTextField>:null}
            {props.alert? <Alert {...props.alert} className={classes.alert}>{props.alert.message}</Alert>:null}
          </div>
          <div className={classes.flexGrow} />
          <Hidden mdDown>
            <IconButton color="inherit" onClick={(event) => {
              openPopover(event.currentTarget, getThemes().map((theme, key) => {
                return <div key style={{ padding: "12px 24px", border: getCurrentThemeIndex() == key ? "2px solid " + theme.selectedColor : "none", margin: "6px 0px", borderRadius: "8px", backgroundColor: theme.backgroundColor, color: theme.fontColor }} onClick={() => { closePopover(); setCurrentTheme(key) }}><center>{theme.name}</center></div>;
              }));
            }}>
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <InvertColorsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={(event) => {
              openPopover(event.currentTarget, <h1>hi</h1>);
            }}>
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <AppsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={(event) => {
              openPopover(event.currentTarget, <h1>hi</h1>);
            }}>
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              className={classes.signOutButton}
              color="inherit" onClick={(event) => {
                openPopover(event.currentTarget, <div style={{ minHeight: "300px" }}></div>);
              }}
            >
              <Avatar />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <Avatar />
          </Hidden>
        </Toolbar>
        <Popover

          open={Boolean(popover.anchorEl)}
          anchorEl={popover.anchorEl}
          onClose={closePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          // className={classes.popover}
          style={{ zIndex: 9999 }}
        >
          <div className={classes.popoverContainer}>
            {popover.View}
          </div>
        </Popover>

      </AppBar>
    </>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
