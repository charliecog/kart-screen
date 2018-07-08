import React from 'react';
import PlayerSelector from './components/playerSelector/PlayerSelector.js';

import './App.css';

export default class App extends React.Component {
    render() {
    return (
      <div className="background">
          <PlayerSelector/>

      </div>
    );
  }
}
