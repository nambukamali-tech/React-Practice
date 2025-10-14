//Simple Demo Addition Code using React library
//React useful for make the reusable components
//It helps us to write html code inside the JS code
import React from "react";
function Addition({num1,num2})//Function with 'props' nothing but like parameters
{
    const result = num1 + num2;
    return(
        <div>
            <h1>Welcome to My First React Addition Demo</h1>
            <p>Number 1 : {num1}</p>
            <p>Number 2 : {num2}</p><br/>
            <p>Result of Addition : {result}</p> 
        </div>

    );
}
export default Addition;//Export code like this ,not using Addition() it gives the error