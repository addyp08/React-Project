import { useContext, useEffect } from 'react'
import '../../css/quiz.scss'
import '../../App.css'
import Questions from './Questions.jsx'
import { Quizcontext } from './context.jsx'
import { motion } from 'framer-motion'
import Congratulations from "../../assets/congratulations.mp3"
import TryAgain from "../../assets/retry.mp3"

function quiz() {
  const [state,dispatch] = useContext(Quizcontext);
  const apiUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple&encode=url3986";
  const nextQuestion = () => {
    dispatch({type:"NEXT_QUESTION"});
  }
  useEffect(()=> {
    if(state.questions.length > 0 || state.error)
      return;
    fetch(apiUrl)
    .then((res)=> res.json())
    .then((data)=> {console.log("data",data); dispatch({type:"LOADED_QUESTIONS", payload:data.results})})
    .catch((err)=> {
      dispatch({type:"ERROR",payload:err.message})
    });
  });


  useEffect(() => {
    if(state.questionLimit){
      const audio = new Audio(state.correctAnswerCount>= 5 ? Congratulations: TryAgain);
      audio.play().catch((err) => { console.log("Audio play error:", err); });
    }
  },[state.questionLimit, state.correctAnswerCount]);

  return (
    
 <motion.div
      className="quiz"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >

      {state.error &&(
        <div className='results'>
          <div className='congratulations'>ERROR</div>
          <div className='results-info'>
            <div>{state.error}</div>
        </div>
        </div>
      )}
      {state.questionLimit &&(
        <div className='results'>
          <div className='congratulations'>{state.correctAnswerCount >= 5 ? "Congratulations" : "Better Luck Next Time"}</div>
          <div className='results-info'>
            <div>You have completed the quiz</div>
          <div>You have got {state.correctAnswerCount} out of {state.questions.length} correct</div>
        </div>
        <div className='next-button' onClick={()=>dispatch({type:"RESTART"})}>Restart</div>
        </div>
      )}
      {!state.questionLimit && state.questions.length > 0 &&(
        <div>
      <div className='score'>Question {state.currentQuestionIndex+1}/{state.questions.length}</div>
      <div><Questions /></div>
        <button className='next-button' onClick={nextQuestion}>Next Question</button>
      </div>
      )}
    </motion.div>
  )
}

export default quiz
