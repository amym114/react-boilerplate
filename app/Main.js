import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <>This here is my App</>;
};

ReactDOM.render(<App />, document.querySelector('#app'));

if (module.hot) {
  module.hot.accept();
}
