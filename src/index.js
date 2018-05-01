import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Component
import Home from './components/home';
import Artist from './components/artist';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ Home }/>
                <Route path="/artist/:artistid"/>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));