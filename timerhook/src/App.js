import logo from './logo.svg';
import './App.css';
import useTimer from './Components/useTimer';
import useStopWatch from './Components/useStopWatch';
import useFetch from './Components/useFetch';
function App() {
  
  const {count,handleClick,handleReset,handleStop}=useTimer(3600)
 const {num,stopTimer,handleStart}=useStopWatch(8)
  
 const { data,
  loading,
  error,handleFetch}=useFetch()
 console.log(data)
 return (
    <>
    <div className="App">
      <h1>{count}</h1>

      <button onClick={handleClick} >start</button>        
      <button onClick={handleReset} >Reset</button>
    <button onClick={handleStop} >Stop</button>
    <div>
        <h1>{num}</h1>
        <button onClick={handleStart} >Start</button>
        <button onClick={stopTimer} >Stop</button>
    </div>
    </div>


        <h1>Fetch data</h1>
        {loading?"Loading":"show"}
        <h1>{data.map((el)=>(
        <div key={el.id}>{el.login}</div>
        ))}</h1>
    </>
  );
}

export default App;
