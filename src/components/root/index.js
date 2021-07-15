import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { GlobalStyle, theme } from '@teamfabric/copilot-ui';
import { hot } from 'react-hot-loader/root';

import App from 'components/app';
import { ThemeProvider } from '@material-ui/styles';

const Root = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App path="/*" />
    </ThemeProvider>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired,
};

export default hot(Root);
