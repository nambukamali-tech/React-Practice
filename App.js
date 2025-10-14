import React from "react";
import Addition from "./components/Addition";//component folder is important and want to import it like this.
function App()
{
  return(
    <div>
      <h2>Addition of Two Numbers - Demo</h2>
      <Addition num1={5} num2 = {10}/> //Use Addition Component like this 'Funtion component'
    </div>

  );
}
export default App;
