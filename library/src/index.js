import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Dog from './components/Dog';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App} />
            <Route path='/dogList' component={Dog}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();

