import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from './components/Dashboard';
import Environment from './components/Environment/Environment';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Footer from './components/Footer/footer'
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
                  <PrivateRoute path="/environment" component={Environment} />
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
