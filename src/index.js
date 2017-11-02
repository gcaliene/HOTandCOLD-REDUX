import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux'; //provider doesn't come from redux but react-redux


import './reset.css';
import './index.css';

import Game from './components/game';
import store from './store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
