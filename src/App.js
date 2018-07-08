import React from 'react';
import PlayerSelector from './components/playerSelector/PlayerSelector.js';

import Theme from './components/theme.mp3';

import './App.css';

export default class App extends React.Component {
    render() {
    return (
      <div className="background">
          <PlayerSelector/>
          <audio src={Theme} controls autoPlay />

      </div>
    );
  }
}
