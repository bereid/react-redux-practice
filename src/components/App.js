import React from 'react';
import DecrementContainer from '../containers/decrement-container';
import IncrementContainer from '../containers/increment-container';
import DisplayContainer from '../containers/display-container';

const App = () => (
  <div>
    <IncrementContainer />
    <DisplayContainer />
    <DecrementContainer />
  </div>
);

export default App;
