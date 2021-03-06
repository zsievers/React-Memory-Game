import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
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
          clicked: this.state.clicked.concat(id),
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
          highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
          message: "You Guessed Incorrectly!"
        }
      );
    }
    this.handleRandomizeCards(players);
  }

  render() {
    return (
      <Wrapper>
        <Nav
          message = {this.state.message}
          score = {this.state.score}
          highScore = {this.state.highScore}
        />

        <Title subtitle="Click on a player to earn points, but don't click on the same player more than once!">Clicky Game: Professional Sports Edition</Title>
      <div className="container">
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
        </div>
      </Wrapper>
    );
  }
}

export default App;
