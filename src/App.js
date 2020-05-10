import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import CreateUser from './Components/CreateUser/CreateUser';
import ExcerciseList from './Components/ExcerciseList/ExcerciseList';
import AddExcercise from './Components/AddExcercise/AddExcercise';
import UpdateExcercise from './Components/UpdateExcercise/UpdateExcercise';
import Layout from './HOC/Layout/Layout';

import './App.css'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path='/'/>
        <Route component={CreateUser} path='/create-user'/>
        <Route component={ExcerciseList} path='/excercise-list' />
        <Route component={AddExcercise} path='/add-excercises' />
        <Route component={UpdateExcercise} path='/update-excercise/:id' />
      </Switch>
    </Layout>
  );
}

export default App;
