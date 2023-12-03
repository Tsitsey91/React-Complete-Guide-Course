import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // we are using the Provider component, to provide the store
    // that we created in redux, to our react app. We wrap the whole app
    // with the provider because we want all of our app to have access
    // to the store. Now our components get data from the store(by subscribing)
    // or dispatch actions and change data on the store
    <Provider store={store}>
        <App />
    </Provider>
);
