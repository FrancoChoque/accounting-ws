/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';
import withRedux from 'next-redux-wrapper';
import initializeStore from '../store/configureStore';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <PersistGate onBeforeLift={this.pushDataLayer} persistor={store.__persistor}>
          <ReduxToastr
            timeOut={7000}
            preventDuplicates
            position="top-center"
            closeOnToastrClick
            transitionIn="fadeIn"
            transitionOut="fadeOut"
          />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(initializeStore)(MyApp);
