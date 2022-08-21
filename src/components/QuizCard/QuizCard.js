import "./QuizCard.css";
import React from 'react'

// import Quiz from "../../Pages/quiz-page/Quiz";
import Start from "../../Pages/quiz-page/Start";


export const QuizCard =  ()=> {
    return (
        <div className='quiz-Box'>
            <button className='btn-Start' onClick={() => Start()} >Quiz category A</button>
        </div>
    )
}
