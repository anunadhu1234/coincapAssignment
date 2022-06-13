
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/content';
import Foo from './Components/Foo';
import React,{useState} from 'react';


function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = function(){
    if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#252525';
         
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
         
    }
}
  return (
    <>
    <Navbar toggleMode = {toggleMode} mode={mode}/>
    <Content mode={mode}/>
    <Foo mode={mode}/>
    </>
  );
}

export default App;
