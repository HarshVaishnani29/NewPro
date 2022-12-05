import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Custom from './components/Custom';
import Header from './components/Header';
// import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const list = ["Home","Pages","Contact Us","Services",];
const menu = ["Projects","About-Us","Address","Gallery",];
root.render(
  <>
  <Header logo="images/logo.png"  menu ={menu}/>
  {/* <App/> */}
  {/* <Custom logo="images/logo.png" list = {lists}/> */}
  </>
);