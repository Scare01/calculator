import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Buttons from './buttons.js'
let operators = ['+', '-', '*', '/'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0',
            firstNum: '0',
            operatro: '',
            number: '0',
            lastButton: ''
        }
        this.initialize = this.initialize.bind(this);
        this.numbers = this.numbers.bind(this);
        this.math = this.math.bind(this);
        this.decimal = this.decimal.bind(this);
    }

    initialize() {
        this.setState({display: '0', firstNum: '0', operator: '', number: '0', lastButton: ''});
    }

    decimal() {
        if (!(this.state.number.includes('.'))) {
            this.setState({number: this.state.number.concat('.'), display: this.state.display.concat('.')})
        }
    }

    numbers(e) {
        if (this.state.display.length >= 15) {
            this.setState({display: "to long number"});
        }

        if (this.state.number === '0') {
            this.setState({number: e.target.value, display: e.target.value, lastButton: e.target.value})
        } else {
            if (this.state.display.length >= 15) {
                this.setState({display: 'Number is too long!'})
            } else {
                this.setState({
                    number: this.state.number.concat(e.target.value),
                    display: this.state.display.concat(e.target.value),
                    lastButton: e.target.value
                });
            }

        }
    }

    math(e) {
        let operators = ['+', '-', '*', '/', '='];
        if (this.state.firstNum === '0') {
            this.setState({firstNum: this.state.display, operator: e.target.value, number: '0', lastButton: e.target.value})
        } else {
            if (operators.includes(this.state.lastButton)) {
                this.setState({lastButton: e.target.value, operator: e.target.value});
            } else {
                let answer;
                if (this.state.operator === '+') {
                    answer = (parseFloat(this.state.firstNum, 10) + parseFloat(this.state.display, 10)).toString();
                } else if (this.state.operator === '-') {
                    answer = (parseFloat(this.state.firstNum, 10) - parseFloat(this.state.display, 10)).toString();
                } else if (this.state.operator === '*') {
                    answer = (parseFloat(this.state.firstNum, 10) * parseFloat(this.state.display, 10)).toString();
                } else if (this.state.operator === '/') {
                    answer = (parseFloat(this.state.firstNum, 10) / parseFloat(this.state.display, 10)).toString();
                }
                if (answer.length > 18) {
                    this.setState({display: 'Number is to long!'})
                } else {
                    this.setState({display: answer, operator: e.target.value, firstNum: answer, number: '0', lastButton: e.target.value});
                }

            }
        }
    }

    render() {
        return (<div id="calc">
            <div id="display">{this.state.display}</div >
            <Buttons initialize={this.initialize} numbers={this.numbers} math={this.math} decimal={this.decimal}/>
            <div id="copyright">RubyLupus</div>
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
