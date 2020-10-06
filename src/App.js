import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <>
        <Navbar />      
        <Switch>
          <Route exact path="/" component={Index} />  
          <Route exact path="/lyrics/track/:id" component={Lyrics} />       
        </Switch>
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App;
