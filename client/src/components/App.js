import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import IntroPage from './views/IntroPage/IntroPage';
import HintPage from './views/HintPage/HintPage';
import ForumPage from './views/ForumPage/ForumPage';
import ReviewPage from './views/ReviewPage/ReviewPage';
import ReportPage from './views/ReportPage.js/ReportPage';
import HintDetailPage from './views/HintPage/HintDetailPage';
import FreeForumPage from './views/ForumPage/FreeForum';
import PlayTipForumPage from './views/ForumPage/PlayTipForumPage';
import IdeaForumPage from './views/ForumPage/IdeaForumPage';
import PostCreatePage from './views/ForumPage/section/PostCreatePage';
import PostViewPage from './views/ForumPage/section/PostViewPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreditPage from './views/CreditPage/CreditPage.js';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)',backgroundColor: 'black', color:'white'}}>

        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/intro" component={Auth(IntroPage, null)} />
          <Route exact path="/hint" component={Auth(HintPage, null)} />
          <Route exact path="/hint/:stageId" component={Auth(HintDetailPage, null)} />
          <Route exact path="/forum" component={Auth(ForumPage, true)} />
          <Route exact path="/review" component={Auth(ReviewPage, null)} />
          <Route exact path="/report" component={Auth(ReportPage, null)} />
          <Route exact path="/forum/free" component={Auth(FreeForumPage, true)} />
          <Route exact path="/forum/playtip" component={Auth(PlayTipForumPage, true)} />
          <Route exact path="/forum/idea" component={Auth(IdeaForumPage, true)} />
          <Route exact path="/forum/free/create" component={Auth(PostCreatePage, true)} /> 
          <Route exact path="/forum/idea/create" component={Auth(PostCreatePage, true)} /> 
          <Route exact path="/forum/playtip/create" component={Auth(PostCreatePage, true)} /> 
          <Route exact path="/forum/free/:postId" component={Auth(PostViewPage, true)} />
          <Route exact path="/forum/idea/:postId" component={Auth(PostViewPage, true)} />
          <Route exact path="/forum/playtip/:postId" component={Auth(PostViewPage, true)} />
          <Route exact path="/credit" component={Auth(CreditPage, null)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
