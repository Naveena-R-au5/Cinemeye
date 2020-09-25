import React from 'react';
import './App.css';
import Main from './components/main/main';
import Dashboard from './components/dashboard/dashboard'
import {BrowserRouter,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div>
     <BrowserRouter>
     <Switch>
       <Route exact path='/'>
          <Main/>
       </Route>
       <Route  path='/dashboard'>
          <Dashboard/>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
