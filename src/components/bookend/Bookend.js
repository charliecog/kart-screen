import React from 'react';

import './bookend.css';

export default class Bookend extends React.Component {
    render() {
        if (this.props.side === 'left') {
            return (
                <div className="bookend">
                    <div className="screw scrTopL"></div>
                    <div className="screw scrLeft"></div>
                    <div className="gutter gutLeft"></div>
                </div>
            );
        } else {
            return (
                <div className="bookend">
                    <div className="screw scrTopR"></div>
                    <div className="screw scrRight"></div>
                    <div className="gutter gutRight"></div>
                </div>
            );
        }
    }
}