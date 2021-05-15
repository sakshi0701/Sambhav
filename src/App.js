import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './authentication/PrivateRoute';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';

import Dashboard from './components/Dashboard';
import UpdateProfile from './authentication/UpdateProfile';
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';

import Buisness from './components/Buisness/Buisness';
import Crypto from './components/Buisness/Crypto/Crypto';
import JobSearch from './components/Buisness/Job/JobSearch';
import Resume from './components/Buisness/Resume/Resume';

import Education from './components/Education/Education';
import Recipes from './components/Education/Skills/Cooking/recipes/Recipes';
import Code from './components/Education/Skills/Coding/Code';

import Environment from './components/Environment/Environment';

import Health from './components/Health/Health';
import Tracker from './components/Health/coronaTracker/Tracker';
import Blood_Donor from './components/Health/blood_donation/Blood_Donor';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App">
        <div className="Container d-flex" style={{ minHeight: "100vh" }}>
          <div className="w-100">
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <PrivateRoute path="/buisness" component={Buisness} />
                  <PrivateRoute path="/resume-build" component={Resume} />
                  <PrivateRoute path="/crypto" component={Crypto} />
                  <PrivateRoute path="/jobs" component={JobSearch} />
                  <PrivateRoute path="/education" component={Education} />
                  <PrivateRoute path="/code" component={Code} />
                  <PrivateRoute path="/cook" component={Recipes} />
                  <PrivateRoute path="/environment" component={Environment} />
                  <PrivateRoute path="/health" component={Health} />
                  <PrivateRoute path="/covid" component={Tracker} />
                  <PrivateRoute path="/bloodDonor" component={Blood_Donor} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
