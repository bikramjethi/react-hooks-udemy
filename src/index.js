import React from 'react';
import ReactDOM from 'react-dom';
// import App from './AppClass';
// import App from './AppFunction';
// import App from './Login';
// import App from './Register';
// import App from './News';
import App from './CrudApp';
import * as serviceWorker from './serviceWorker';

export const UserContext = React.createContext();
const userName = "Dave";

ReactDOM.render(
  <UserContext.Provider value={userName}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
