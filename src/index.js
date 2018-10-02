import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Buttons from './buttons.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVal: '0',
            prevVal: '0',
            formule: '',
            lastClicked: ''
        }
        this.initialize = this.initialize.bind(this);
    }

    initialize() {
        this.setState({currentVal: '0', prevVal: '0', formule: '', lastClicked: ''});
    }

    render() {
        return (<div id="calc">
            <div id="display">{this.state.display}</div>
            <Buttons initialize={this.initialize}/>
            <div id="copyright">RubyLupus</div>
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
