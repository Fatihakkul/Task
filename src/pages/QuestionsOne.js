import React,{ useContext,useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {StudentContext} from '../context/Provider'
import firebase from '../Data/Config'
import '../style/QuestStyle.css'


const QuestionOne =props=>{
    const {state,dispatch} =useContext(StudentContext)
    const [soru,setQuestions]=useState([])
    const [answer,setAnswer]=useState("")
    const [trueAnswers,setTrueAns]=useState([])
      
 
    
    
    
    useEffect(() => {
         getData();
         setTrueAns( state._currentValue.trueAnswers)
    }, [])


    const getData =async()=>{
        let response= await firebase.database().ref('/results/').on('value', snap => {
            let newlist=[]
            newlist=Object.values(snap.val())
            setQuestions(newlist)
          })
    }

    const AnswerA =()=>{
       setAnswer(soru[1].incorrect_answers[0])
    
    
    }
   const AnserB = ()=>{
      setAnswer(soru[1].incorrect_answers[1])
    
  
      
     }
    const AnserC =()=>{ 
     
         setAnswer(soru[1].correct_answer)
    
        
       
     }
     const AnserD =()=>{
         setAnswer(soru[1].incorrect_answers[2])
        
     
     }

     const saveAnswer =()=>{
      const x =trueAnswers.indexOf(answer)
         if(x != -1){
            dispatch({type : "SET_TRUE" , userTrueAnswer : answer }) 
         }else {
            dispatch({type : "SET_FALSE" , userFalseAnswer : answer})
         }
         
    }

    return(
            
            <div>
               
               {soru.length >1 ? 
               
               <div className="container">
                
                  <span className="questions">{soru[1].question}?</span>
                  <div className="answerContainer">
                     <div className="answers">
                           <button type="button" className="btn btn-success" onClick={AnswerA} >{soru[1].incorrect_answers[0]}</button>
                           <button type="button" className="btn btn-success" onClick={AnserC}>{soru[1].correct_answer}</button>
                     </div>
                     <div className="answers">
                           <button type="button" className="btn btn-success" onClick={AnserB}>{soru[1].incorrect_answers[1]}</button>
                           <button type="button" className="btn btn-success" onClick={AnserD}>{soru[1].incorrect_answers[2]}</button>
                           
                     </div>
                  </div>
                  <div className="NextZero"> 
                     <Link to="/QuestionTwo"> 
                        <button type="button" className="btn btn-success" onClick={saveAnswer}>Sonraki</button>
                     </Link>
                  </div>
               </div>

               : null }
             
               
             </div>
            
            
           
      
    )
}

export default QuestionOne