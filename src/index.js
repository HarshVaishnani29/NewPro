import React from 'react';
import ReactDOM from 'react-dom/client';
// import Form from './components/Form';
// import TableForm from './components/TableForm';
import './index.css';
// import Custom from './components/Custom';
// import Header from './components/Header';
// import App from './components/App';
// import Counter from "../src/components/Counter";
// import ThemePicker from "../src/components/Themepicker";
// import Register from './components/squvence/Register';
import ToDo from './components/TodoApp/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const list = ["Home","Pages","Contact Us","Services",];
// const menu = ["Projects","About-Us","Address","Gallery",];
root.render(
  <>
  {/* <App/> */}
  {/* <Header logo="images/logo.png"  menu ={menu}/> */}
  {/* <Custom logo="images/logo.png" list = {lists}/> */}
  {/* <Counter/> */}
  {/* <ThemePicker/> */}
  {/* <Form/> */}
  {/* <TableForm/> */}
  {/* <Register/> */} 
  <ToDo/>
  </>
);