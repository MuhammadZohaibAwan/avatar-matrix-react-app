import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './commponents/card-list/card-list.componet';
import './App.css';
// import {render} from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monisters: [],
      searchField : ''
      
    }; 
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monisters: user }))
  }

  render() {
    const { monisters, searchField} = this.state;
    const filteredmonisters = monisters.filter(monister => 
      monister.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>
      <h1>Avatar Matrix</h1>
      <input type='search' className='searchBox'
      placeholder = 'search avatar'
      onChange = {e => this.setState({ searchField: e.target.value})}  
      /> 
      
      <CardList monisters={filteredmonisters} />      

      </div>
    );
  }
}
export default App;
