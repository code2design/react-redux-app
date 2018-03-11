import React                                    from 'react';
import {Route, Switch}                      from 'react-router-dom';
import App                                      from './components/App.js';
import HomePage                                 from './components/home/HomePage.js';
import AboutPage                                from './components/about/AboutPage.js';


export default(
    <Route path="/" component={App}>
        <Switch component={HomePage}/> 
        <Route path="about" component={AboutPage}/> 
    </Route>  
);