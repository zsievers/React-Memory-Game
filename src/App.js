import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
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

  randomizeCards = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      message: "You Guessed Correctly!",
    });
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore,
      });
    } else if (newScore === 12) {
      this.setState({
        message: "You Win!",
      });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      message: "Click an Image to begin!",
      clicked: [],
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let randomizedPlayers = this.randomizeCards(players);
    this.setState({ players: randomizedPlayers });
  };

  render() {
    return (
      <Wrapper>
        <Nav 
        
        />
        <Title> </Title>

        {this.state.players.map((player) => (
          <PlayerCard 
          
          
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
