import React, { Component } from 'react';
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";


class App extends Component {
  // setting this.state.cards to the cards json array
  state = {
    vols
  };

  removeVol = id => {
// filter for vols with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // this.state.cards equal to the new cards array
    this.setState({ cards });
  };

  
    






}

export default App;
