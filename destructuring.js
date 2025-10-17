import './App.css';

function App() {
  
    const courseDetails = {//Destructuring of objects
      name : 'React',
      fees : 16000,
      duration : '3 months',
      placement : 'yes'
    };
    const {name , fees , duration , placement} = courseDetails;
    return(
      <div>
        <p><strong>Destructuring of object using React</strong></p>
        <h2>Course Name : {name}</h2>
        <h2>Course Fees : {fees}</h2>
        <h2>Course Duration : {duration}</h2>
        <h2>placement : {placement}</h2>
      </div>
    );
  }     

export default App;
