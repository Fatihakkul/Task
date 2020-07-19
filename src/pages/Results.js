import React,{useContext,useState,useEffect} from 'react'
import {StudentContext} from '../context/Provider'
import firebase from '../Data/Config'
import {Link} from 'react-router-dom'


const Results = props=>{
    const {state, dispatch}=useContext(StudentContext)
    const [falseAnswer, setFalseAns]=useState([])
    const [trueAnswer, setTrueAns]=useState([])
    const x=trueAnswer.length
    const y=falseAnswer.length
    const z=x - ( y/3 )
   

   
    const listTrueItems = trueAnswer.map((answer) =>
      <li>{answer}</li>
    );
    
    const listFalseItems = falseAnswer.map((answer) =>
      <li >{answer}</li>
    );


    useEffect(() => {
       setTrueAns(state._currentValue.DogruAnswer)
       setFalseAns(state._currentValue.falseAnswer)
    }, [])



    return(
        <div className="container">
        
            <div className="ResultText">
                <h3>Sonuçlarınız : {state.name}</h3>
                <div className="UserResults">
                    <p className="Text">Doğru sayısı : {x}</p>
                    <p className="Text">Yanlış sayısı : {y}</p>
                    <p className="Text">Netiniz : {z}</p>
                </div>
            </div>
            <div className="ResultListContainer">
                <div>
                    <h4>Doğru Cevaplarınız</h4> 
                    <ul>{listTrueItems}</ul>
                </div> 
                <div>
                    <h4>Yanlış Cevaplarınız</h4>
                    <ul>{listFalseItems}</ul>
                </div>
            </div>

        </div>
    )
}
export default Results