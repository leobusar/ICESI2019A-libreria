import React, { Component } from 'react';
import Libros from './components/Libro/Libros';

class App extends Component {
  render() {
    var  owner="Leonardo";

    return (
      <div className="App">
          <Libros  owner={owner} />
      </div>
    );
  }
}

export default App;
