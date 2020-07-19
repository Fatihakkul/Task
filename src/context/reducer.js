export function reducer (state , action){
    switch (action.type) {
            case "SET_NAME":
                    state.name=action.name
            
                return {...state}
        
            case "SET_TRUE":
                    const userTrueanswer=action.userTrueAnswer
                    let newAnswer=[...state._currentValue.DogruAnswer]
                    newAnswer.push(userTrueanswer)
                    state._currentValue.DogruAnswer=newAnswer
                    console.log( state._currentValue.DogruAnswer)

                return {...state}

            case "SET_FALSE":
                    const userFalseanswer=action.userFalseAnswer
                    let newFalseAnswer=[...state._currentValue.falseAnswer]
                    newFalseAnswer.push(userFalseanswer)
                    state._currentValue.falseAnswer=newFalseAnswer 
                    console.log( state._currentValue.falseAnswer)

                return {...state}
            case "SET_CORRECT":
                    state._currentValue.trueAnswers=[...action.correctAnswer]
        
                return{...state}

     
        default:
            return state
    }
}