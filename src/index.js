import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './index.css';
import Wall from './component/wall';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(

  <Wall />

);


