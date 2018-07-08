import React from 'react';
import TextDisplay from './../textDisplay/TextDisplay.js';

import './playerSelector.css';

export default class PlayerSelector extends React.Component {
    render() {
        return (
            <div className="playerSelector">
                <TextDisplay/>

            </div>
        );
    }
}