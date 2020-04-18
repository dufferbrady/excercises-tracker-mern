import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';

import Layout from './HOC/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path='/'/>
      </Switch>
    </Layout>
  );
}

export default App;
