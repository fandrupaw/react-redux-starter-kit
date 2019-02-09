import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './redux/configureStore';
import { AppContainer } from 'react-hot-loader';
import App from './app'
import { createBrowserHistory } from 'history';

import './styles/grid.min.css';
import './app.scss';

export const store = configureStore();
export const history = createBrowserHistory();

__webpack_public_path__ = `${window.location.protocol}//${window.location.host}/`;

ReactDOM.render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./app.js', () => {
        const NewRoot = require('./app.js').default;
        ReactDOM.render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
