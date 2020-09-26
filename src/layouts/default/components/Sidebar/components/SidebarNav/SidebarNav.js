/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import Link from "next/link";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from "next/router"
import { List, ListItem, Button, colors, Fab, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import Add from "@material-ui/icons/Add"

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  },
  item: {
    // display: 'flex',
    // paddingTop: 0,
    // paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  newBtn: {
    background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
    color: "#fff",
    width: "100%"
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    // width: 24,
    // height: 24,
    // display: 'flex',
    // alignItems: 'center',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  divider: {
    margin: "3px 0px"
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
  const router = useRouter();

  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => {

        return <><Link href={page.href}>
          <a href={page.href} style={{textDecoration: "none",color: "inherit"}}>
          <ListItem
            className={clsx(classes.item)}

            // disableGutters
            key={page.title}
            button
            // component={Link}
            selected={router.route == page.href}
          >
            <ListItemIcon className={classes.icon}>{page.icon}</ListItemIcon>
            <ListItemText primary={page.title}></ListItemText>
            {/* <Link href={page.href}>
            <Button
              activeClassName={classes.active}
              className={classes.button}
            >
              <div className={classes.icon}>{page.icon}</div>
              <></>
            </Button>
          </Link> */}
          </ListItem>
        </a>
        </Link>
        {page.divider && <Divider className={classes.divider} />}
        </>
      })}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
