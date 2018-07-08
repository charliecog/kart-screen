import React from 'react';
import Bookend from './../bookend/Bookend.js';
import Character from './../character/Character.js';

import './selectContainer.css';

export default class SelectContainer extends React.Component {
    render() {
        return (
            <div className="selectContainer">
                <Bookend/>
                <Character/>
                <Character/>
                <Character/>
                <Character/>
                <Bookend/>
                <Bookend/>
                <Character/>
                <Character/>
                <Character/>
                <Character/>
                <Bookend/>

            </div>
        );
    }
}