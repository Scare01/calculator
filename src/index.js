import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Buttons from './buttons.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNum: '0',
            secondNum: '0',
            display: '0'
        }
        this.initialize = this.initialize.bind(this);
        this.numbers = this.numbers.bind(this);
        this.math = this.math.bind(this);
    }

    initialize() {
        this.setState({currentVal: '0', prevVal: '0', formule: '', lastClicked: '', display: '0'});
    }

    numbers(e) {

        if (this.state.display.length >= 15) {
            setTimeout(() => this.setState({display: "to long number"}), 100)

        } else {
            if (this.state.display == '0') {
                this.setState({display: e.target.value});
            } else {
                this.setState({
                    display: this.state.display.concat(e.target.value)
                })
            }
        }

    }

    math(e) {
        console.log("hello");
    }

    render() {
        return (<div id="calc">
            <div id="display">{this.state.display}</div>
            <Buttons initialize={this.initialize} numbers={this.numbers} math={this.math}/>
            <div id="copyright">RubyLupus</div>
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
