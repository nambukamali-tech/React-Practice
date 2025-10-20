//Sample React Code for practicing the "Ternery operator" for conditional statements
import './TerneryOperator.css';//import the css style code to main js code
function TerneryOperator(){
  const age=21;
  const notage = 16;
  return(
    <div>
      <h1>Welcome to Check the Eligibility </h1>
      {/*Using ternary operator to check the Eligibility of persons age*/}
      <p>
        { age >= 18 ? "You are Eligible for Apply" : "You are not Eligible for Apply"}
      </p>
      <p>
        {notage <=18 ? "You are Not Eligible for Apply" : "You are Eligible for Apply"}
      </p>
    </div>

  );
}
export default TerneryOperator;
