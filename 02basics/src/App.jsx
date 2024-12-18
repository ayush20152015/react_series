import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Increment counter
   function addValue(){

      if(counter==15){

        return;
      }

    setCounter(counter+1);
       
    }

     
   function removeValue(){
     
       if(counter==0){
         return;
       }

        setCounter(counter-1);
   }



  return (
    <>
      <h1 id="maintxt">Counter: {counter}</h1>
      <button className="buttons" onClick={addValue}>Add</button>
      <br />
      <button className="buttons" onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
