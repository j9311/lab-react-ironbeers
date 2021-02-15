import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import RandomBeer from './Components/RandomBeer'
import NewBeer from './Components/NewBeer'
import AllBeers from './Components/AllBeers'
import BeerDetail from './Components/BeerDetail'

function App() {
  return (
    <div className="App">
    
      <NavBar/>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/RandomBeer" render={(props) => <RandomBeer {...props} />} />
        <Route exact path="/NewBeer" render={(props) => <NewBeer {...props} />} />
        <Route exact path="/AllBeers" render={(props) => <AllBeers {...props} />} />
        <Route exact path="/allBeers/:id" render={(props) => <BeerDetail {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
