import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar';
import { useCallback, useEffect, useState } from 'react';
import countries from './utils/countries';
function App() {
  const [query,setQuery]=useState('')
  const [suggestion,setSuggestion] =useState([])

  const queryhandler= useCallback((val)=>{
    setQuery(val)
  },[])

  useEffect(()=>{
    if(query==="")
    {
      setSuggestion([])
    }
    else {
      let newSuggestion=countries.filter(item=>{
       //using toLocalLowerCase make search bar dynamic now you 
       //can search in capital or small letters
       const queryCountry =query.trim().toLocaleLowerCase();
        return item.country.toLowerCase().indexOf(queryCountry)!==-1 ? true : false
      })
      .map((item)=>item.country)
      setSuggestion(newSuggestion)
    console.log(newSuggestion)
    }
  },[query])

  //console.log(countries)
  return (
    <div className="App">
      <h2>Search bar</h2>
      <h3>serach query " {query}" </h3>
       <Searchbar setQuery ={queryhandler} suggestion={suggestion}/>
    </div>
  );
}

export default App;
