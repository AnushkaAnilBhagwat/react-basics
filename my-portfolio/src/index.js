import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

ReactDOM.render(
  <div className='flex'>
    <Header />
    <div className='main'>
      <hr></hr>
      <Main Key='Name' value='Anushka Bhagwat' />
      <Main Key='Language' value='JavaScript' />
      <Main Key='Roll' value='React developer' />
      <hr></hr>
    </div>
    <Footer />
  </div>
  ,
  document.getElementById("root"),
  () => console.log("rendered")
);