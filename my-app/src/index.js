// const h1 = document.createElement('h1')
// h1.innerHTML = 'I am learning react';

// document.getElementsById("root").appendChild(h1)

import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   content to SharedWorker,
//   where to SharedWorker,
//   callback
// )

ReactDOM.render(
  <React.Fragment>
  <h1>hey</h1>
  <p>hii</p>
  </React.Fragment>
  
  ,
  document.getElementById("root"),
  () => console.log("rendered")
);