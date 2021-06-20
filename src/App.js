import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SignUPForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import './common/styles/reset.css';
import Header from './components/Header';
import Home from './components/Home';
function App () {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUPForm} />
        <Route path="/signin" component={SignInForm} />
      </Switch>
    </BrowserRouter>
   
    </>
  );
}

export default App;
