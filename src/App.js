import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import ForgetPassword from './containers/ForgetPassword';
import ResetPassword from './containers/ResetPassword';
import SelfRegistration from './containers/SelfRegistration';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={ForgetPassword} />
    <Route exact path="/reset-password" component={ResetPassword} />
    <Route exact path="/self-registration" component={SelfRegistration} />
  </Switch>
);

export default App;
