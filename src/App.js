import React, { Component } from 'react';
import Header from './components/Header';
import Player  from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

import './App.css';


class App extends Component {
  state = {
    players: [
      {
        name: "Jesica",
        score: 0,
        id: 1,
      },
      {
        name: "David",
        score: 0,
        id: 2,
      },
      {
        name: "Gauss",
        score: 0,
        id: 3,
      },
      {
        name: "Amelie",
        score: 0,
        id: 4,
      },
      {
        name: "Rex",
        score: 0,
        id: 5,
      },
    ],
    
  }

  prevPlayerId = 5;
  changeScore = (index, delta) => {
    this.setState(prevState => ({    
      score: prevState.players[index].score += delta, 
    }));
  }

  addPlayer = (name) => {
    this.setState(prevState => {
     return {
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1,
        },
      ]
     }
    });
  }
  removePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(p => p.id !== id),
    }));
  }
  render() {
    return (
     <div className="scoreboard">
       <Header players={this.state.players} />
       {/* Players List */}
       {this.state.players.map((player, index) =>
        <Player 
        name={player.name}
        score={player.score}  
        id={player.id} 
        key={player.id.toString()}
        index={index}
        changeScore={this.changeScore}
        removePlayer={this.removePlayer} />
       )}
       <AddPlayerForm addPlayer={this.addPlayer}/>
     </div>
    );
  }
}

export default App;
