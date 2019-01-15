import React, { Component } from 'react';
import NavBar from './components/Nav/NavBar';
import Layout from './components/Layout/Layout';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import BeginSurvey from './containers/BeginSurvey/BeginSurvey';
import Portal from './containers/Portal/Portal';
import Tips from './containers/Tips/Tips';
import Datahub from './containers/Datahub/Datahub';
import Result from './containers/Result/Result';
import Report1 from './containers/Report1/Report1';
import Report2 from './containers/Report2/Report2';
import Report3 from './containers/Report3/Report3';
import Report4 from './containers/Report4/Report4';
import Report5 from './containers/Report5/Report5';
import Report6 from './containers/Report6/Report6';
import Report7 from './containers/Report7/Report7';
import Report8 from './containers/Report8/Report8';
import Report9 from './containers/Report9/Report9';
import Profile from './containers/Profile/Profile';
import Admin from './containers/Admin/Admin';
import DataHistory from './containers/DataHistory/DataHistory'

const theme = createMuiTheme({
  palette: {
    primary: teal
  },
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/incision" component={Tips} />
              <Route path="/hub" component={Datahub} />
              <Route path="/history" exact component={DataHistory} />
              <Route path="/begin" component={BeginSurvey} />
              <Route path="/profile" component={Profile} />
              <Route path="/admin" component={Admin} />
              <Route path="/report1" component={Report1} />
              <Route path="/report2" component={Report2} />
              <Route path="/report3" component={Report3} />
              <Route path="/report4" component={Report4} />
              <Route path="/report5" component={Report5} /> 
              <Route path="/report6" component={Report6} />
              <Route path="/report7" component={Report7} />
              <Route path="/report8" component={Report8} />
              <Route path="/report9" component={Report9} />
              <Route path="/result" component={Result} />
              <Route path="/" exact component={Portal} />
            </Switch>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;