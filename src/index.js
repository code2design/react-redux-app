import 'babel-polyfill';
import React                            from 'react';
import {render}                         from 'react-dom';
import {BrowserRouter, hashHistory}     from 'react-router-dom';
import routes                           from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



render(
    <BrowserRouter history={hashHistory} routes={routes} />,
    document.getElementById('app')
);