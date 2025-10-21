import './App.css';
function MapFunction()//Demo code explain the concept of map() using array for show the list of elements in array.
  {
    const courses = ["React","Dotnet","Java","Javascript","Python"];
    return(
      <div>
      <h1>Map() Demo Using React</h1>
      <ul>
    {/*'key' attribute for referring the index of array elements*/}
     {courses.map((course,index) => (
       <li key={index}>{course}</li>
      ))}
      </ul>
      </div>
    );
  }


export default MapFunction;
