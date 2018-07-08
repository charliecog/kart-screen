import React from 'react';
import CharacterImage from "../characterImage/CharacterImage";
import ChosenPlayer from "../chosenPlayer/ChosenPlayer";

import './character.css';

export default class Character extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: null,
        }
        this.makeActive = this.makeActive.bind(this)
        this.makeInactive = this.makeInactive.bind(this)
    }

    makeActive(){
        this.setState({
            isActive: 'active',
        })
    }

    makeInactive(){
        this.setState({
            isActive: null,
        })
    }

    render() {
        return (
            <div
                onMouseEnter={this.makeActive}
                onMouseLeave={this.makeInactive}
                className="character">
                <ChosenPlayer isActive={this.state.isActive}/>
                <CharacterImage character={this.props.character} />

            </div>
        )
    }
}