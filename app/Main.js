import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <>My App</>;
};

ReactDOM.render(<App />, document.querySelector('#app'));

if (module.hot) {
  module.hot.accept();
}
