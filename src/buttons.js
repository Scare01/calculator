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
            <button className="button" id="seven" onClick={this.props.numbers} value='7'>7</button>
            <button className="button" id="eight" onClick={this.props.numbers} value='8'>8</button>
            <button className="button" id="nine" onClick={this.props.numbers} value='9'>9</button>
            <button className="button" id="subtract">-</button>
            <button className="button" id="four" onClick={this.props.numbers} value='4'>4</button>
            <button className="button" id="five" onClick={this.props.numbers} value='5'>5</button>
            <button className="button" id="six" onClick={this.props.numbers} value='6'>6</button>
            <button className="button" id="add">+</button>
            <button className="button" id="one" onClick={this.props.numbers} value='1'>1</button>
            <button className="button" id="two" onClick={this.props.numbers} value='2'>2</button>
            <button className="button" id="three" onClick={this.props.numbers} value='3'>3</button>
            <button className="button" id="equal">=</button>
            <button className="button" id="zero" onClick={this.props.numbers} value='0'>0</button>
            <button className="button" id="decimal">.</button>
        </div>)
    }
}
