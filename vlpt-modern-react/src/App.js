import React from 'react';
import Hello from './Hello';
import './App.css'

function App() {
  const style = {
    backgroundColor: 'black',
    color: 'aqua'
  }
  return (
    <div>
      {/*주석*/}
      <Hello />
      <div style={style}>React</div>
      <div className="gray-box"></div>
    </div>
  );
}

export default App;
