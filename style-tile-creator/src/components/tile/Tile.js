import React, { Component } from 'react';
import Swatch from '../swatch/Swatch';
import TypoSelector from '../typoselector/TypoSelector.js';
import './Tile.css';

class Tile extends Component {
    render () {
        return (
            <div className="tile">
            <h1>Style Tile Generator</h1>
                <section className="colors">
                    <h3>Colors</h3>
                    <Swatch name="Primary" />
                    <Swatch name="Secondary" />
                    <Swatch name="Tertiary" />
                </section>

                <section className="typography">
                    <h3>Typography</h3>
                    <TypoSelector type="header" />
                </section>

                <section className="buttons">
                    <h3>Buttons</h3>
                </section>
            </div>
        );
    }
}

export default Tile;