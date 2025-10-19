import './ArrowFunctionStyle.css';
const ArrowFunction = () =>
{
  const eventHandler = () =>
  {
    alert('Button Clicked Successfully');
  }

return(
  <div>
    <h1>Arrow Function using REACT</h1>
    <p>This is demo program of how the Arrow function of javascript using in REACT</p>
    <button onClick = {eventHandler}>CLICK TO PROCEED</button>
  </div>

);
}
export default ArrowFunction;

