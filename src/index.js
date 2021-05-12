import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../src/assets/css/addons.css'
import '../src/assets/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import GobalContext from './context/GobalContext';
import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css';
AOS.init();

ReactDOM.render(
  <GobalContext>
    <App />
  </GobalContext>
  ,document.getElementById('root')
);

reportWebVitals();
    