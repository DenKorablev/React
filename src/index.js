import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    btnClick(event){
        alert(event.target);
    }

    render() {
        return (
            <div className="test">
                <h1>App Works!!!</h1>
                <h3>It's really working</h3>
                <button onClick={this.btnClick}>{this.props.children}</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App>It's prop</App>, 
    document.getElementById('app')
)
