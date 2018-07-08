import React from 'react';
import TextDisplay from './../textDisplay/TextDisplay.js';
import ChequeredBanner from './../chequeredBanner/ChequeredBanner.js';
import SelectContainer from './../selectContainer/SelectContainer.js';

import './playerSelector.css';

export default class PlayerSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayText: 'Choose your driver...',
        }
    }

    render() {
        return (
            <div className="playerSelector">
                <TextDisplay text={this.state.displayText}/>
                <ChequeredBanner/>
                <SelectContainer/>

            </div>
        );
    }
}