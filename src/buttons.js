import React from 'react';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="buttons">
            <button className="button" id="clear" onClick={this.props.initialize}>C</button>
            <button className="button" id="divide">/</button>
            <button className="button" id="multiply">*</button>
            <button className="button" id="seven">7</button>
            <button className="button" id="eight">8</button>
            <button className="button" id="nine">9</button>
            <button className="button" id="subtract">-</button>
            <button className="button" id="four">4</button>
            <button className="button" id="five">5</button>
            <button className="button" id="six">6</button>
            <button className="button" id="add">+</button>
            <button className="button" id="one">1</button>
            <button className="button" id="two">2</button>
            <button className="button" id="three">3</button>
            <button className="button" id="equal">=</button>
            <button className="button" id="zero">0</button>
            <button className="button" id="decimal">.</button>
        </div>)
    }
}
