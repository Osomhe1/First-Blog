import React from 'react';
import Book from './Book';
import Article from './Article';
import NewsLetter from './NewsLetter';
import About from './About';
import './App.css';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        
        <Route path='/article' component={Article} />
        <Route path='/book' component={Book} />
        <Route path='/newsLetter' component={NewsLetter} />
        <Route path='/about' component={About} />
       
      </Switch>
    </div>
    </Router>
  );
}



export default App;
