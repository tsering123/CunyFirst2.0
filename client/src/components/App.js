import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import '../styles/App.css';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <Route path ="/" exact render = {
            () => {
              return (<Home />);
            }
          }/>
          <Route path ="/register" exact render = {
            () => {
              return (<Register />);
            }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
