import React, { Component } from 'react';
import './Swatch.css';

class Swatch extends Component {

    render() {
        return (
            <div className="swatchCon">

                <span className="swatchName">
                    {this.props.name}
                </span>

                <input type="color" className="colorSwatch" id={this.props.name} ref={this.props.name} />

                <span className="hexColor">
                </span>
            </div>
        );
    }
}

export default Swatch;