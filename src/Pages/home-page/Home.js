import React from 'react';
import {Link } from 'react-router-dom';
import  homePageImg  from '../../assets/home-page-img.png'


import './Home.css';

 const Home = () => {
  return (
    <>
      <div id="main-container">

        <div className="banner-home-page">
          <div className='img-Container'>
            <img className='home-Page-Img' src={homePageImg} alt="img" />
          </div>
          <div className='quiz-Card-Group'>
           <Link to="ComputerScienceQuiz"><button id='btn-Quiz-Category'>Computer Science Quiz</button> </Link> 
            <Link to="MathematicsQuiz"><button id='btn-Quiz-Category'>Mathematics Quiz</button> </Link>
            <Link to="MythologyQuiz"><button id='btn-Quiz-Category'>Mythology Quiz</button> </Link>
          </div>
        </div>


      </div>

    </>
  )
}

export default Home;