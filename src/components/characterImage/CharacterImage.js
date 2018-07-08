import React from 'react';

import './characterImage.css';

export default class CharacterImage extends React.Component {
    render() {
        return (
            <div className="characterImage">
                <img src={this.props.character} alt="character" />
            </div>
        );
    }
}