import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import CreateUser from './Components/CreateUser/CreateUser';
import ExcerciseList from './Components/ExcerciseList/ExcerciseList';
import Layout from './HOC/Layout/Layout';

import './App.css'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path='/'/>
        <Route component={CreateUser} path='/create-user'/>
        <Route component={ExcerciseList} path='/excercise-list' />
      </Switch>
    </Layout>
  );
}

export default App;
