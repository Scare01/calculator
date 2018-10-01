import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            output: ''
        }
    }
    render() {
        return (<div id="calc">
            <div id="display">0</div>
            <div id="buttons">
                <div className="button" id="clear">C</div>
                <div className="button" id="divide">/</div>
                <div className="button" id="multiply">*</div>
                <div className="button" id="seven">7</div>
                <div className="button" id="eight">8</div>
                <div className="button" id="nine">9</div>
                <div className="button" id="subtruct">-</div>
                <div className="button" id="four">4</div>
                <div className="button" id="five">5</div>
                <div className="button" id="six">6</div>
                <div className="button" id="add">+</div>
                <div className="button" id="one">1</div>
                <div className="button" id="two">2</div>
                <div className="button" id="three">3</div>
                <div className="button" id="equal">=</div>
                <div className="button" id="zero">0</div>
                <div className="button" id="decimal">.</div>
            </div>
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
