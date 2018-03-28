import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Pagination from './Pagination'; 
import NavHeader from './Nav';
import Home from './Home';
import InfiniteScroll from './InfiniteScroll';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader/>
          <Switch>
            <Route exact path='/' render={()=><Home />}/>
            <Route path="/paginate" render={()=><Pagination/>}/>
            <Route path="/infinite" render={()=><InfiniteScroll />}/>
          </Switch>
      </div>
    );
  }
}

export default App;
