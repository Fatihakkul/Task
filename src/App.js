import React from 'react';
import Login from './pages/Login'
import Provider from './context/Provider'
import Questions from './pages/Questions'
import QuestionOne from './pages/QuestionsOne'
import QuestionTwo from './pages/QuestionTwo'
import QuestionTree from './pages/QuestionTree'
import QuestionFour from './pages/QuestionFour'
import Results from './pages/Results'
import {BrowserRouter as Router, Route , Link} from 'react-router-dom'


function App() {
  return (
      <Provider>
        <Router>
          <Route path="/" exact component={Login}/>
          <Route path="/Questions" component={Questions} />
          <Route path="/QuestionOne" component={QuestionOne} />
          <Route path="/QuestionTwo" component={QuestionTwo} /> 
          <Route path="/QuestionTree" component={QuestionTree} /> 
          <Route path="/QuestionFour" component={QuestionFour} /> 
          <Route path="/Results" component={Results} />
        </Router>
      </Provider>
  );
}

export default App;
