import React, { Component } from 'react';
import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox';

// Manejamos el Estado del Componente
class App extends Component {
  constructor (){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

// Ciclo de Vida de React
componentDidMount(){
  fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( res => {
      return res.json();
    })
    .then( users => {
      this.setState({ robots: users})
    });

}

onSearchChange = (event)=> {
  this.setState({ searchfield: event.target.value })
}


  render() {
      const filteredRobots = this.state.robots.filter( robot =>{
      return robot.name.toLowerCase().includes( this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1> Cargando... </h1>
    }else {
      return (
         <div className="tc">
           <h1>RoboFriends</h1>
           <SearchBox search={this.onSearchChange}/>
           <CardList robots={filteredRobots}/>
         </div>
      );
    }
  }
}

export default App;
