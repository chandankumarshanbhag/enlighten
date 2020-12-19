import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme/index';
import createTheme from '../src/theme/index';
import Loading from "../src/components/Loading"
import useAuth, { AuthProvider } from '../src/utils/auth/authcontext'
import useSWR, { SWRConfig } from 'swr'
import Http from 'utils/http';
import UiProvider, { useUI } from "utils/ui"
import { SnackbarProvider } from "notistack"
import { InstitutionsProvider } from "utils/institution"
import { CircularProgress, Dialog, DialogContent, DialogContentText, Typography } from '@material-ui/core';



export default (props) => {

  const { Component, pageProps, title } = props;


  return (
    <React.Fragment>
      <Head>
        <title>Enlighten</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <UiProvider>
        <CssBaseline />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <Loading
            color="#29D"
            startPosition="0.5"
            stopDelayMs="200"
            height="3"
          />
        </div>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <SWRConfig
          value={{
            refreshInterval: 3000,
            fetcher: (...args) => { return new Http(args).useSwr(); }
          }}>


          <AuthProvider>
            <InstitutionsProvider>
              <SnackbarProvider maxSnack={6} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}>


                <Component {...pageProps} />

                <UserAuthentication />

              </SnackbarProvider>
            </InstitutionsProvider>
          </AuthProvider>


        </SWRConfig>
      </UiProvider>
    </React.Fragment>
  )
}


function UserAuthentication() {
  const { loading } = useAuth();
  return <Dialog open={loading}>
    <DialogContent>
      <DialogContentText>
        <center>
          <CircularProgress />
          <Typography>Please wait</Typography>
        </center>
      </DialogContentText>
    </DialogContent>
  </Dialog>;
}

// MyApp.getServerSideProps = async function (context){
//   console.log("getServerSideProps app")
//   return {
//     props: {
//       time: new Date().toJSON()
//     }
//   }
// }

// export default MyApp;

// MyApp.getInitialProps = async (context) => {
//   //console.log(context)
//   //console.log("initial props")
//   return {
//     "title": Institution.name
//   }
// }



