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
            secondNum: '0',
            operator: ''

        }
        this.initialize = this.initialize.bind(this);
        this.numbers = this.numbers.bind(this);
        this.math = this.math.bind(this);
    }

    initialize() {
        this.setState({display: '0', firstNum: '0', secondNum: '0', operator: ''});
    }
    numbers(e) {
        if (this.state.display.length > 15) {
            this.setState({display: "to long number"});
        } else {
            if (this.state.display == '0' | this.state.display == '+' | this.state.display == '-' | this.state.display == '*' | this.state.display == '/') {
                this.setState({display: e.target.value});
            } else {
                this.setState({
                    display: this.state.display.concat(e.target.value)
                });
            }
        }
    }

    math(e) {
        if (e.target.value == '.' && !(this.state.display.includes('.'))) {
            this.setState({display: this.state.display.concat('.')})
        }
        if (e.target.value == '+' | e.target.value == '-' | e.target.value == '*' | e.target.value == '/') {
            if (this.state.firstNum != '0' && !(operators.includes(this.state.display))) {
                console.log("secondNum before math = " + this.state.secondNum);

                this.mathOperate();
                console.log("secondNum after math = " + this.state.secondNum);

                this.setState({firstNum: this.state.display});
            }
            if (!(operators.includes(this.state.display))) {
                this.setState({firstNum: this.state.display});
            }

            this.setState({display: e.target.value, operator: e.target.value});

        } else if (e.target.value == '=') {
            this.mathOperate();
            console.log('secondNum after press = is ' + this.state.secondNum);
        }
    }

    mathOperate() {
        if (this.state.operator == "+") {
            this.setState({
                display: (parseFloat(this.state.firstNum, 10) + parseFloat(this.state.display, 10)).toString(),
                secondNum: (parseFloat(this.state.firstNum, 10) + parseFloat(this.state.display, 10)).toString()
            });
        } else if (this.state.operator == '-') {
            this.setState({
                display: (parseFloat(this.state.firstNum, 10) - parseFloat(this.state.display, 10).toString()),
                secondNum: (parseFloat(this.state.firstNum, 10) - parseFloat(this.state.display, 10).toString())
            });
        } else if (this.state.operator == '*') {
            this.setState({
                display: (parseFloat(this.state.firstNum, 10) * parseFloat(this.state.display, 10).toString()),
                secondNum: (parseFloat(this.state.firstNum, 10) * parseFloat(this.state.display, 10).toString())
            });
        } else if (this.state.operator == '/') {
            this.setState({
                display: (parseFloat(this.state.firstNum, 10) / parseFloat(this.state.display, 10).toString()),
                secondNum: (parseFloat(this.state.firstNum, 10) / parseFloat(this.state.display, 10).toString())
            });
        }
    }

    render() {
        return (<div id="calc">
            <div id="display">{this.state.display}</div >
            <Buttons initialize={this.initialize} numbers={this.numbers} math={this.math}/>
            <div id="copyright">RubyLupus</div>
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
