import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SetupPage from '../components/SetupPage';
import NotFoundPage from '../components/NotFoundPage';
// import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <Switch>
        <Route path="/" component={SetupPage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
