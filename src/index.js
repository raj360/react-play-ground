import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import toDoApp from './reducer';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {loadToDoList} from './actions';
import rootSaga from './sagas';
import createSagaMiddle from 'redux-saga';
import {BrowserRouter} from 'react-router-dom';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const sagaMiddleware = createSagaMiddle();

const store = createStore(toDoApp,applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

ReactDOM.render(
   <Provider store={store}>
        <BrowserRouter>
               <App />
        </BrowserRouter>
   </Provider>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
