import React,{ useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
    
   <div className='container'>
   <h1>React Counter Application</h1>
   
   <h1> {count}</h1>
   
       <div id='buttons'>
         <button className='button-1' onClick={()=>{setCount(count+1)}}>Increase</button>
         <button className='button-2' onClick={()=>{setCount(count-1)}}>Decrease</button>
         <button className='button-3' onClick={()=>{setCount(0)}}>Reset</button>
       </div>
   </div>
    </>
  );
}

export default App;
