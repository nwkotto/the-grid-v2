import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as tilesReducer } from './routes/grid/modules/tiles';

import Routes from './routes/index';

const appReducer = combineReducers({
  tiles: tilesReducer
});

let store = createStore(appReducer);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));