import React, { Component } from 'react';
import './TypoSelector.css';

class TypoSelector extends Component {
  render() {
    return (
      <form>
        <label htmlFor="typeColor">Color</label><br/>
        <select>
          <option value="primaryColor">&#9632; Primary Color</option>
          <option value="secondaryColor">&#9632; Secondary Color</option>
          <option value="tertiaryColor">&#9632; Tertiary Color</option>
        </select><br/>
        <label htmlFor="typeFontFamily">Font Family</label><br/>
        <select name="typeFontFamily">
          <option value="Roboto">Placeholder for FontFamily</option>
        </select><br/>
        <label htmlFor="lineHeight">Line Height</label><br/>
        <input type="range" name="lineHeight" min="0" max="1000"/><br/>
        <label htmlFor="letterSpacing">Letter Spacing</label><br/>
        <input type="range" name="letterSpacing" min="0" max="20"/><br/>
        <label htmlFor="fontWeight">Font Weight</label><br/>
        <input type="range" name="fontWeight" min="0" max="700" step="100"/><br/>
        <button>i</button>
        <button>u</button><br/>
        <label htmlFor="typePadding">Padding</label><br/>
        <input type="text" name="typePadding"></input><br/>
        <label htmlFor="typeMargin">Margin</label><br/>
        <input type="text" name="typeMargin"></input>
      </form>
    );
  }
}

export default TypoSelector;