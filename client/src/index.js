import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from '../src/reducers/index';
// import requireAuth from './requireAuth';


let store = createStore(reducer, {},  
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render((
  <Provider store={store}>
    <Router> 
      <App /> 
    </Router>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
