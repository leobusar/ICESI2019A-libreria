import React, { Component } from 'react';
import Libros from './components/Libro/Libros';
<<<<<<< HEAD
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route } from  'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Libro from  './components/Libro/Libro'
=======
>>>>>>> 61e53b7b85c040d530da9057c5349f539dd4163d

class App extends Component {
  render() {
    var  owner="Leonardo";

    return (
<<<<<<< HEAD
      <Router>
        <div className="App">
            <NavBar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/libros"  render={(props) => (
                     <Libros {...props} owner={owner}/>
                  )} />
            <Route path="/about" component={About}/>
            <Route path="/libros/:id" component={Libro}/>


        </div>
      </Router>
=======
      <div className="App">
          <Libros  owner={owner} />
      </div>
>>>>>>> 61e53b7b85c040d530da9057c5349f539dd4163d
    );
  }
}

export default App;
