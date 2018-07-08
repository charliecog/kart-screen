import React from 'react';
import TextDisplay from './../textDisplay/TextDisplay.js';
import ChequeredBanner from './../chequeredBanner/ChequeredBanner.js';
import SelectContainer from './../selectContainer/SelectContainer.js';

import './playerSelector.css';

export default class PlayerSelector extends React.Component {
    render() {
        return (
            <div className="playerSelector">
                <TextDisplay/>
                <ChequeredBanner/>
                <SelectContainer/>

            </div>
        );
    }
}