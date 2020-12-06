import './App.css';
import HookForm from './components/HookForm';
import RandomUser from './components/RandomUser';
import Fetching from './components/Fetching';
import RandomUser02 from './components/RandomUser02';
import Routing from './components/Routing';
import Simple from './components/Simple';
import React, {createContext,useReducer}from 'react'
export const MyContext = createContext();
const initialState=0;
const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
};

function App() {
  const [count,dispatch]=useReducer(reducer,initialState);
  return (
    <MyContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
    <header className="App-header">
      {/*
        <HookForm/>
        <Fetching/>
        <RandomUser/>
        <Routing/>
        <RandomUser02/>*/}

        
        {count}
        <Simple/>
 
        
      </header>
    </div>
    </MyContext.Provider>
  );
}

export default App;
