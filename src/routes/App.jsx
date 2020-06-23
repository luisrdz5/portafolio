import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import Main from '../containers/Main';
import NotFound from '../containers/NotFound';


const GlobalStyle = createGlobalStyle `
body {
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#000000' : '#FFFFFF'};
  color: ${props =>
    props.theme.mode === 'dark' ? '#FFFFFF': '#000000'};
}
`;


const App = (props) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ mode: props.darkMode}}>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps,null)(App);