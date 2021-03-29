import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Footer from './components/Footer/footer'
import './App.css';
// import Main from './components/Main/main';
// import About from './components/About Section/About';

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
