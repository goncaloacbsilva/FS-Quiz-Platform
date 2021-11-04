import MainPage from './pages/MainPage';

import SubmitQuestion from './pages/quizApp/submissions/SubmitQuestion';
import SubmitSuccess from './pages/quizApp/submissions/SubmissionSuccess'
import ViewQuestions from './pages/quizApp/view_questions/ViewQuestions';
import CreateQuiz from './pages/quizApp/create_quiz/CreateQuiz'
import QuizAppHome from './pages/quizApp/Home'

import NotFound from './pages/NotFound';

import {
    Switch,
    Route
  } from "react-router-dom";

function AppRoutes() {
    return (
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/quizApp/">
            <QuizAppHome />
          </Route>
          <Route path="/quizApp/questions/submit">
              <SubmitQuestion/>
          </Route>
          <Route path="/quizApp/questions/submit/submission_success">
              <SubmitSuccess/>
          </Route>
          <Route path="/quizApp/questions/view">
              <ViewQuestions/>
          </Route>
          <Route path="/quizApp/quiz/create">
              <CreateQuiz/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    );
}

export default AppRoutes;