import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Greetings from "./components/greetings"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DefaultLayout from "layouts/default"
import { Divider } from '@material-ui/core';
import Http, { ResponseCodes } from "utils/http"
import useAuth from "utils/auth/authcontext";
import ButtonBase from '@material-ui/core/ButtonBase';
import SidebarItems from "common/SidebarItems"
import { mdiAccount, mdiViewDashboard, mdiBank, mdiAccountGroup, mdiCurrencyInr, mdiTeach, mdiBookSearch, mdiLibrary, mdiBusSchool, mdiBed, mdiBriefcase, mdiAccountClock, mdiCogs, mdiPackageVariant } from '@mdi/js';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://enlighten.com/">
        Enlighten
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "90vh",
    verticalAlign: "middle"
  },
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  nothingHere: {
    minHeight: "30vh",
    padding: theme.spacing(5),
    // display: "flex",
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center"
  }
}));

function Index() {
  const classes = useStyles();
  const { login, isAuthenticated } = useAuth()
  console.log("isAuthenticated", isAuthenticated)

  // const data = useSWR('/test');
  // console.log("data", data)

  function validate(e) {
    e.persist();
    e.preventDefault();
    login({ username: "", password: "" })


  }

  return (
    <DefaultLayout sidebarItems={[]} topbar={{
      title: "Dashboard",
      leading: null,
      trailing: null,

    }} sidebar={isAuthenticated ? {
      // mini: true,
      items: SidebarItems
    } : null}>
      {!isAuthenticated ? <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={validate} action="." method="post">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container> :
        <Container maxWidth="md" style={{ minHeight: "80vh", marginTop: "5vh" }}>
          <div style={{ width: "100%" }}>
            <Typography variant="h3"><Greetings /></Typography>
          </div>
          <br />
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
          >
            <Tab label="Recent" />
            <Tab label="Pinned" />
          </Tabs>
          <Divider />
          <div className={classes.nothingHere}>
            <div>
              <img src="assets/icons/undraw/svg/undraw_Operating_system_re_iqsc.svg" style={{ height: "21vh", width: "100%" }} />
            </div>
            <br />
            <center><Typography variant="h4">No recent activities.</Typography></center>
          </div>
          <Divider />
          {/* <Paper>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <div style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }}>
                  <center>
                    <ButtonBase>
                      <img src="assets/icons/employment/svg/002-CV.svg" style={{ height: "100%", width: "100%" }} />
                    </ButtonBase>
                    <br />
                    <Typography variant="body1">Administrative</Typography>
                  </center>
                </div>
              </Grid>
              <Grid item md={3}>
                <div style={{ width: "120px", marginLeft: "auto", marginRight: "auto" }}>
                  <center>
                    <ButtonBase>
                      <img src="assets/icons/employment/svg/033-money.svg" style={{ height: "100%", width: "100%" }} />
                    </ButtonBase>
                    <Typography variant="body1">Accounts</Typography>
                  </center>
                </div>
              </Grid>
              <Grid item md={3}>
                <div style={{ width: "120px", marginLeft: "auto", marginRight: "auto" }}>
                  <center>
                    <ButtonBase>
                      <img src="assets/icons/employment/svg/003-diploma.svg" style={{ height: "100%", width: "100%" }} />
                    </ButtonBase>
                    <Typography variant="body1">Academics</Typography>
                  </center>
                </div>
              </Grid>
            </Grid>
          </Paper> */}
        </Container>
      }

    </DefaultLayout>
  );
}

// Index.getServerSideProps = async function(context) {
//   console.log("getServerSideProps")
//   return {
//     props: {},
//   }
// }


export default Index;
