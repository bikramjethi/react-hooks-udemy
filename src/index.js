import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
// import App from './AppClass';
// import App from './AppFunction';
// import App from './Login';
// import App from './Register';
// import App from './News';
// import App from './CrudApp';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const initialState = useContext(TodosContext);

  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (<TodosContext.Provider value={{ state, dispatch }}>
    <TodoList />
  </TodosContext.Provider>);
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
