import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import CreateUser from './Components/CreateUser/CreateUser';
import Layout from './HOC/Layout/Layout';

import './App.css'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path='/'/>
        <Route component={CreateUser} path='/Create-User' />
      </Switch>
    </Layout>
  );
}

export default App;
