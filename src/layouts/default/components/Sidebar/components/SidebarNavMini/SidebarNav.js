/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import Link from "next/link";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, Fab, IconButton } from '@material-ui/core';
import Add from "@material-ui/icons/Add"

const useStyles = makeStyles(theme => ({
  root: {
    padding: 6
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  newBtn: {
    background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
    color: "#fff",
    width: "100%"
  },
  button: {
    color: colors.blueGrey[800],
    // padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

// const CustomRouterLink = forwardRef((props, ref) => (
//   <div
//     ref={ref}
//     style={{ flexGrow: 1 }}
//   >
//     <Link {...props} />
//   </div>
// ));

const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Link href={page.href}>

            <IconButton>{page.icon}</IconButton>
            {/* <div className={classes.icon}>{page.icon}</div> */}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
