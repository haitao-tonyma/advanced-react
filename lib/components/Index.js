import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h2> Hello </h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
