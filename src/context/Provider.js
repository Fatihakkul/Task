import React,{useReducer,createContext, useState} from 'react'
import {reducer} from './reducer'

export const store={falseAnswer : [],DogruAnswer : [], name: '', trueAnswers : []}
export const StudentContext=createContext(store)




const Provider = props =>{
    const [state,dispatch]=useReducer(reducer,StudentContext)
   

    return(
        <StudentContext.Provider value={{state,dispatch}}>
           
                {props.children}
          
        </StudentContext.Provider>
    )
}

export default Provider;