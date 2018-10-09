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
            number: '0'
        }
        this.initialize = this.initialize.bind(this);
        this.numbers = this.numbers.bind(this);
        this.math = this.math.bind(this);
        this.decimal = this.decimal.bind(this);
    }

    initialize() {
        this.setState({display: '0', firstNum: '0', operator: '', number: '0'});
    }

    decimal() {
        if (!(this.state.display.includes('.'))) {
            this.setState({display: this.state.display.concat('.'), number: this.state.number.concat('.')})
        } else {
            this.setState({display: this.state.display, number: this.state.number})
        }
    }

    numbers(e) {
        if (this.state.display.length > 15) {
            this.setState({display: "to long number"});
        } else {
            if (this.state.number == '0') {
                this.setState({display: e.target.value, number: e.target.value});
            } else {
                this.setState({
                    display: this.state.display.concat(e.target.value),
                    number: this.state.number.concat(e.target.value)
                });
            }
        }
    }

    math(e) {
        if (this.state.firstNum === '0') {
            this.setState({firstNum: this.state.display, operator: e.target.value})
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
            this.setState({display: answer, operator: e.target.value, firstNum: answer});
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
