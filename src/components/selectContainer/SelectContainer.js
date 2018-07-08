import React from 'react';
import Bookend from './../bookend/Bookend.js';
import Character from './../character/Character.js';

import Bowser from '../characterImage/characterAssets/bowser.gif';
import Mario from '../characterImage/characterAssets/mario.gif';
import Peach from '../characterImage/characterAssets/peach.gif';
import Luigi from '../characterImage/characterAssets/luigi.gif';
import DK from '../characterImage/characterAssets/dk.gif';
import Koopa from '../characterImage/characterAssets/koopa.gif';
import Yoshi from '../characterImage/characterAssets/yoshi.gif';
import Toad from '../characterImage/characterAssets/toad.gif';

import './selectContainer.css';

export default class SelectContainer extends React.Component {
    render() {
        return (
            <div className="selectContainer">
                <Bookend/>
                <Character character={Mario}/>
                <Character character={Peach}/>
                <Character character={Bowser}/>
                <Character character={Koopa}/>
                <Bookend/>
                <Bookend/>
                <Character character={Luigi}/>
                <Character character={Yoshi}/>
                <Character character={DK}/>
                <Character character={Toad}/>
                <Bookend/>

            </div>
        );
    }
}