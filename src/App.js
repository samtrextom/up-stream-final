import React from 'react';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './LoginComponents/Login.js'
import Footer from './Footer.js'
import Home from './Home.js'
import Register from './Register.js'
import WriteArticle from'./WriteArticle'
import Profile from './Profile'
import Article from './Article'
import UserDashboard from './UserDashboard'
import Leaderboard from './Leaderboard'

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
              <Route path = '/' exact component = {Login}/>
              <Route path = '/Home' exact component = {Home}/>
              <Route path = '/Register' exact component = {Register}/>
              <Route path = '/WriteArticle' exact component = {WriteArticle}/>
              <Route path = '/Profile/:id' exact component = {Profile}/>
              <Route path = '/Profile' exact component = {Profile}/>
              <Route path = '/Article/:id' exact component = {Article}/>
              <Route path = '/UserDashboard' exact component = {UserDashboard}/>
              <Route path = '/Leaderboard' exact component = {Leaderboard}/>
          </Switch>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
