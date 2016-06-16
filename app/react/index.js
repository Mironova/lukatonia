require("material-design-lite/dist/material.grey-pink.min.css");
import "./stylesheets/application.scss";

import RWR from 'react-webpack-rails';
RWR.run();

import ArticlesPage from './components/articlesPage';
import App from './components/app';
RWR.registerComponent('App', App);

