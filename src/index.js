import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import toDoApp from './reducer';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LOAD_TODO_LIST} from './actions';
import rootSaga from './sagas';
import createSagaMiddle from 'redux-saga';

const sagaMiddleware = createSagaMiddle()

const store = createStore(toDoApp,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
