import React, {Component} from 'react';

import Button from './Button';

class App extends Component {
    inputRef = React.createRef();

    clear = () => this.inputRef.current.value = '';

    focus = () => this.inputRef.current.focus();

    upperCase = () => this.inputRef.current.value = this.inputRef.current.value.toUpperCase();

    reverse = () => this.inputRef.current.value = this.inputRef.current.value.split('').reverse().join('');

    select = () => this.inputRef.current.select();

    render() {
        return (
            <div className="app">
                <h1>practicing using refs in react</h1>
                <form className="ui form">
                    <div className="field">
                        <input ref={this.inputRef} placeholder="Enter some text..."/>
                    </div>
                </form>
                <div className="buttons">
                    <Button onClick={this.clear} value="clear"/>
                    <Button onClick={this.focus} value="focus"/>
                    <Button onClick={this.upperCase} value="uppercase"/>
                    <Button onClick={this.reverse} value="reverse"/>
                    <Button onClick={this.select} value="select"/>
                </div>
            </div>
        );
    }
}

export default App;