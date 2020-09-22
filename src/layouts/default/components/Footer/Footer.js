import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Popover, Avatar, Grid, Card, CardHeader, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Drafts, Phone } from "@material-ui/icons"
//import Facebook from "icons/Facebook"
//import Chandan from "assets/imgs/chandan.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = props => {
  const { className, ...rest } = props;
  const [anchorEl1, setanchorEl1] = React.useState(null);
  const [anchorEl2, setanchorEl2] = React.useState(null);
  // const handleClick = event => {
  //   setanchorEl1(event.currentTarget);
  // };
  const handleClose = () => {
    setanchorEl1(null);
    setanchorEl2(null);
  };


  const classes = useStyles();
return <div></div>;
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

      <Typography variant="body2">
        &copy;{' '} Developed by



        <Link
          component="a"
          href="#"
          onClick={({ target }) => setanchorEl1(target)}
        > Chandan kumar
        </Link>
        <Popover
          open={Boolean(anchorEl1)}
          anchorEl={anchorEl1}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Card style={{ minWidth: "250px" }}>
            <List>
              <ListItem >
                <ListItemIcon>
                  <Avatar src={Chandan}></Avatar>
                </ListItemIcon>
                <ListItemText primary="Chandan kumar" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary="+91 9902226106" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="chandankumarshanbhag@gmail.com" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Facebook />
                </ListItemIcon>
                <ListItemText primary="/chandankumarshanbhag" />
              </ListItem>
            </List>
          </Card>
        </Popover>

      </Typography>
      <Typography variant="caption">
        Concept by
        <Link
          component="a"
          href="#"
          onClick={({ target }) => setanchorEl2(target)}
        >
          Amar Sequeira
        </Link>
        <Popover
          open={Boolean(anchorEl2)}
          anchorEl={anchorEl2}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Card style={{ minWidth: "250px" }}>
            <List>
              <ListItem >
                <ListItemIcon>
                  <Avatar>AM</Avatar>
                </ListItemIcon>
                <ListItemText primary="Amar Sequeira" />
              </ListItem>
              {/* <ListItem button>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary="+91 9902226106" />
              </ListItem> */}
              <ListItem button>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="msamar25@gmail.com" />
              </ListItem>
            </List>
          </Card>
        </Popover>
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
