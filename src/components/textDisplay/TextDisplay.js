import React from 'react';

import './textDisplay.css';

export default class TextDisplay extends React.Component {
    render() {
        return (
            <div className="textDisplay">
                <div className="displayContainer">
                    <div className="textBox marquee">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}