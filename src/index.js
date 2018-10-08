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
            operator: '',
            answer: '0'

        }
        this.initialize = this.initialize.bind(this);
        this.numbers = this.numbers.bind(this);
        this.math = this.math.bind(this);
        this.decimal = this.decimal.bind(this);
    }

    initialize() {
        this.setState({display: '0', firstNum: '0', secondNum: '0', operator: '', answer: '0'});
    }

    decimal() {
        this.setState({
            display: !(this.state.display.includes('.'))
                ? this.state.display.concat('.')
                : this.state.display
        })
    }

    numbers(e) {
        this.setState({
            display: (this.state.display.length >= 15)
                ? 'Number too long'
                : (this.state.display === '0')
                    ? e.target.value
                    : this.state.display.concat(e.target.value)
        })
    }

    math(e) {
        this.setState({
            secondNum: (this.state.firstNum === '0')
                ? '0'
                : this.state.firstNum,
            firstNum: (this.state.firstNum === '0')
                ? this.state.display
                : this.state.answer,
            operator: e.target.value
        });
        this.mathOperate();
    }

    mathOperate() {
        console.log('bla')
    }

    // formula  =  (parseFloat(this.state.firstNum, 10) + parseFloat(this.state.display, 10)).toString(),

    render() {
        return (<div id="calc">
            <div id="display">{this.state.display}</div >
            <Buttons initialize={this.initialize} numbers={this.numbers} math={this.math} decimal={this.decimal}/>
            <div id="copyright">RubyLupus</div>
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
