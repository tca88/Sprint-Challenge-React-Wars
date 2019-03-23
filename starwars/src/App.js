import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars';
import './components/StarWars.css';
// import Pagination from './Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      previous: "",
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      // data has the "new next" and "new previous" everytime the onClick function is triggered and getCharacters function is run.
      .then(data => {
        this.setState({ 
          starwarsChars: data.results, 
          next: data.next,
          previous: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNext = () => {
    this.getCharacters(this.state.next);
  }

  getPrevious = () => {
    this.getCharacters(this.state.previous);
  }
  

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars starWarsCharsProp={this.state.starwarsChars} />
        <div className="pagination-buttons">
          <button className={`pagination-button${!this.state.previous ? " disabled" : ""}`}
          disabled={!this.state.previous} 
          onClick={this.getPrevious}>
          previous
          </button>
          <button className="pagination-button" disabled={!this.state.next} onClick={this.getNext}>next</button>
        </div>
      </div>
    );
  }
}

export default App;
