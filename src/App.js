import Home from './Home';
import Login from './Login';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Feed from './Feed';
import Chat from './Chat';
import Main from './Main';
import Wallet from './components/Wallet';
import Profile from './Profile';
import Post from './post';
import Forgot from './forgot';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/post" component={Post} />
          <Route path="/chat" component={Chat} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/profile" component={Profile} />
          <Route path="/forgot"  component={Forgot} />
        

        </Switch>
      
      </div>
      
    </Router>
  );

}

export default App;
