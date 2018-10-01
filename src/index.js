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
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {}

    render() {
        return (<div id="calc">
            <div id="display">0</div>
            <div id="buttons">
                <div className="button" style={this.state.styleButton} onClick={this.clickButton} id="clear">C</div>
                <div className="button" style={this.state.styleButton} id="divide">/</div>
                <div className="button" style={this.state.styleButton} id="multiply">*</div>
                <div className="button" style={this.state.styleButton} id="seven">7</div>
                <div className="button" style={this.state.styleButton} id="eight">8</div>
                <div className="button" style={this.state.styleButton} id="nine">9</div>
                <div className="button" style={this.state.styleButton} id="subtruct">-</div>
                <div className="button" style={this.state.styleButton} id="four">4</div>
                <div className="button" style={this.state.styleButton} id="five">5</div>
                <div className="button" style={this.state.styleButton} id="six">6</div>
                <div className="button" style={this.state.styleButton} id="add">+</div>
                <div className="button" style={this.state.styleButton} id="one">1</div>
                <div className="button" style={this.state.styleButton} id="two">2</div>
                <div className="button" style={this.state.styleButton} id="three">3</div>
                <div className="button" style={this.state.styleButton} id="equal">=</div>
                <div className="button" style={this.state.styleButton} id="zero">0</div>
                <div className="button" style={this.state.styleButton} id="decimal">.</div>
            </div>
            <div id="copyright">RubyLupus</div>
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
