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
    }

    makeActive(){
        console.log('hellod')
        this.setState({
            isActive: 'active',
        })
    }

    render() {
        return (
            <div onClick={this.makeActive} className="character">
                <ChosenPlayer isActive={this.state.isActive}/>
                <CharacterImage character={this.props.character} />

            </div>
        )
    }
}