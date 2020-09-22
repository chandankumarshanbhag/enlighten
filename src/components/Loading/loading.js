import React from 'react';
import Router from "next/router";
import PropTypes from 'prop-types';

import LoadingBar from 'react-top-loading-bar';

/* eslint-disable react/prefer-stateless-function */
class NextNProgress extends React.Component {


  routeChangeStart = () => {
    if (this.LoadingBar) {
      this.LoadingBar.continuousStart();

    }
  };

  routeChangeEnd = () => {

    if (this.LoadingBar) {
      this.LoadingBar.complete();
    }
  };

  render() {
    return <LoadingBar
      height={3}
      color='#2196f3'
      onRef={ref => (this.LoadingBar = ref)}
    />;
  }

  componentDidMount() {

    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeEnd);
    Router.events.on('routeChangeError', this.routeChangeEnd);
  }
}


export default NextNProgress;