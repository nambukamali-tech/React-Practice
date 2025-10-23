import './Forms.css';
import { useState } from 'react';
function Forms()
{
  const [name , setName] = useState(" ");
  return(
    <form>
      <label>Enter Your Name :
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <p>The Current Value in the Form is {name}</p>
    </form>

  );
}


export default Forms;
