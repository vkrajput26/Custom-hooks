import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Pin from './Components/Pin';

function App() {
  const [pinInput,setPinInput]=useState("");
  return (
    <div className="App">
     {/* <input/> */}
      <Pin length={5} setPin={setPinInput} />
      {/* otp is {pinInput} */}
    </div>
  );
}

export default App;
