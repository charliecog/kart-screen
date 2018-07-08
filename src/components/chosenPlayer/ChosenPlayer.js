import React from 'react';
import './chosenPlayer.css';

export default class ChosenPlayer extends React.Component {
    render() {

        const isActive = this.props.isActive;

        return (
            <div className="chosenPlayer">
                <a className={isActive}>1P</a>
            </div>
        );
    }
}