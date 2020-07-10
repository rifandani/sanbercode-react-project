import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';
import SignUp from './components/auth/SignUp';

// implementing react-router-dom
// functional component
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/post/:id/delete" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/post/:id" exact component={PostDetails} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signup/success" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
