import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from './components/Dashboard';
import Buissness from './components/Buissness/Buissness';
import Crypto from './components/Buissness/Crypto/Crypto';
import JobSearch from './components/Buissness/Job/JobSearch';
import Health from './components/Health/Health';
import Education from './components/Education/Education';
import Environment from './components/Environment/Environment';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="Container d-flex" style={{ minHeight: "100vh" }}>
          <div className="w-100">
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <PrivateRoute path="/buissness" component={Buissness} />
                  <PrivateRoute path="/health" component={Health} />
                  <PrivateRoute path="/education" component={Education} />
                  <PrivateRoute path="/environment" component={Environment} />
                  <PrivateRoute path="/crypto" component={Crypto} />
                  <PrivateRoute path="/jobs" component={JobSearch} />
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
    </>
  );
}

export default App;
