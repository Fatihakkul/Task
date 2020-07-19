import React,{useContext,useState,useEffect} from 'react'
import {StudentContext} from '../context/Provider'
import firebase from '../Data/Config'
import {Link} from 'react-router-dom'

const Login =props=>{
    const {state,dispatch}=useContext(StudentContext)
    const [userName,setUserName]=useState("")
    const [TrueAnswer,setCorretAns]=useState([])
    const [time,setTime]=useState(5)


    useEffect(() => {
        getData();
        
    }, [])

    const getData =async()=>{
            let response= await firebase.database().ref('/results/').on('value', snap => {
            let newlist=[]
            let CorretAns=[]
            newlist=Object.values(snap.val())
            
               for ( let i = 0; i < newlist.length; i++) {
                  const element = newlist[i].correct_answer;
                  CorretAns.push(element)           
               }
               setCorretAns(CorretAns)
                
            })
    } 

    function goPage(){
        dispatch({type : "SET_NAME" , name : userName})
        dispatch({type : "SET_CORRECT", correctAnswer : TrueAnswer })
        firebase.database()
            .ref('/user/')
            .push(userName)
     
    }

    const userNameAdd =(e)=>{
        setUserName(e.target.value)
    }

    return(

        <div className="Login" >
           
            <h4 style={{fontSize : 25, fontWeight : 'bold'}}>İsim Soyisim</h4>
            <input  className="Input" placeholder="isim giriniz..." value={userName} onChange={userNameAdd}/>
            <Link to="/Questions">  
                <button type="button" className="btn btn-success" onClick={goPage}>Başla</button>
                
            </Link>
           
        </div>
    )
}

export default Login