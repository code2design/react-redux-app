import React                                    from 'react';
import {Route, Switch}                          from 'react-router-dom';
import App                                      from './components/App.js';
import HomePage                                 from './components/home/HomePage.js';
import AboutPage                                from './components/about/AboutPage.js';
import CoursesPage                              from './components/course/CoursesPage';

const Routes = () => (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
      </Switch>
    </main>
  );

 export default Routes;