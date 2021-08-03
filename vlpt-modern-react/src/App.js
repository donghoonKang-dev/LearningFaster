import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="choco" color="red" />
      <Hello />
    </Wrapper>
  );
}

export default App;
