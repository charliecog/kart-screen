import React from 'react';
import CharacterImage from "../characterImage/CharacterImage";

import './character.css';

export default class Character extends React.Component {
    render() {
        return (
            <div className="character">
                <CharacterImage character={this.props.character} />

            </div>
        )
    }
}