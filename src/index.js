import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore , applyMiddleware, compose} from 'redux'
import reducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga'


const sagaMiddle = createSagaMiddleware()
const middleware = [sagaMiddle]

const store = compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) (createStore)(reducer)
 
sagaMiddle.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
   ,
  document.getElementById('root')
);


