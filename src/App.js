import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import players from "./players.json";
import "./App.css";

class App extends Component {
  // setting this.state.players to the players json array
  state = {
    players,
    clicked: [],
    score: 0,
    highScore: 0,
    message: "Click an image to begin!",
  };

  handleRandomizeCards = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClick = (id) => {
    // guessing correctly = not the same id
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState(
        {
          players,
          clicked: this.setState.clicked.concat(id),
          score: this.state.score +1,
          highScore: (this.state.highScore > this.state.score) ? this.state.highScore : this.state.highScore + 1,
          message: "You Guessed Correctly!"
        }
      );
    } else {
      this.setState(
        {
          players,
          clicked: [],
          score: 0,
          topScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
          message: "You Guessed Incorrectly!"
        }
      );
    }
    this.handleRandomizeCards(players);
  }

  // map over this.state.players and render a component for each player object
  render() {
    return (
      <Wrapper>
        <Nav
          message = {this.state.message}
          score = {this.state.score}
          highScore = {this.state.highScore}
        />
        {this.state.players.map((player) => (
          <PlayerCard 
            handleClick = {this.handleClick}
            id = {player.id}
            key = {player.id}
            name = {player.name}
            message = {this.state.message}
            image = {player.image}
            score = {this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
