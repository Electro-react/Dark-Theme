import React, { useState,useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import "./App.scss";
import Slider from "./Slider"
import TextRunner from './TextRunner';


function App(props) {
  useEffect(() => {
    if (theme) { document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.body.style.transition = 'all ease-in-out 1s';

    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#000';
      document.body.style.transition = 'all ease-in-out 1s';

      
    }
});
  const [theme, settheme] = useState(false);
  return (<> 
 <div ><h1 style={{textAlign: 'center'}}>LogoHolder</h1>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="longer_nav">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Add More</a>
        </li>
        <li> <label className="switch">
          <input type="checkbox" onClick={()=>{settheme(!theme)}}/>
  <span className="slider round"></span>
</label></li>
      </ul>
    </div>
    <Slider />
    <TextRunner/>
    </>
  );
}
export default App;