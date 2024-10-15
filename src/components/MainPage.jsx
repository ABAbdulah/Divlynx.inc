import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MainPage.css';
import bg from "../assets/bg.mp4";
import Button from 'react-bootstrap/Button';
import Technologies from './Technologies';
import { Link } from 'react-scroll';
import MyNavbar from './MyNavbar';


function MainPage() {
  return (
    <>  
    <MyNavbar/>
    <div className="myMainPage">
      <video autoPlay muted loop className="backgroundVideo">
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='text-main'> <h1>Divlynx Inc.</h1></div>
     
    </div>

      <Technologies />
    </>
  );
}

export default MainPage;
