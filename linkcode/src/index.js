import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';



let imgSrc = 'https://play-lh.googleusercontent.com/1aAb1Nyy3OcfwkV5i7yQUDL1lPVknpQp8qsYC7tPhJUukMiBNJwdiTEhNXq5qkZs0Kc';

let imgStyle = {
  width: '25%',
  height: '25%',
};

ReactDOM.render(
  <div className='flex'>
  <Header/>
  <img src = {imgSrc} alt = 'Linkcode image' style={imgStyle} />
  <Footer dayCount='5'/>
  </div>
  ,
  document.getElementById("root"),
  () => console.log("rendered")
);