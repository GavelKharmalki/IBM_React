/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import ReactDOM from 'react-dom';
import React from 'react'
ReactDOM.render(
  <>
    <h1>Welcome to ReactJS</h1>
    <h3>ReactJs is a library of JS</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>REACT JS</li>
    </ul>
  </>, 
  document.getElementById('root')
  )
 
  import ReactDOM from 'react-dom';
  import React from 'react'
  const fname=prompt("Enter your name here: ")
  const place=prompt("Enter your place here: ")
  const num1=prompt("Enter first number")
  const num2=prompt("Enter second number")
  const result=num1*num2
  ReactDOM.render(
    <>
      <h1>Welcome to ReactJS</h1>
      <h3>Hello, Mr. {fname}</h3>
      <h3>Im from {place}</h3>
      <h3>3+3={3+3}</h3>
      <div>{result}</div>
    </>, 
    document.getElementById('root')
    )
     

  import ReactDOM from 'react-dom';
  import React from 'react'
  const prn=prompt("Enter principle: ")
  const roi=prompt("Enter rate of interest: ")
 
  const result=prn*roi/100
  ReactDOM.render(
    <>
    <h1>Welcome to ReactJS</h1>
      <table border="1px">
        <tr>
          <th>Principle</th>
          <th>Rate of Interest</th>
          <th>Result</th>
        </tr>
        <tr>
          <td>{prn}</td>
          <td>{roi}</td>
          <td>{result}</td>
        </tr>
      </table>
    </>, 
    document.getElementById('root')
    )
    */

    /*
   import ReactDom from 'react-dom'
   import React from 'react'
   const currDate=new Date()
   const h=currDate.getHours()
   const m=currDate.getMinutes()
   const s=currDate.getSeconds()
   const time=h+":"+m+":"+s

   const dt=currDate.getDate()
   const mt=currDate.getMonth()
   const yr=currDate.getFullYear()

   const date=dt+"/"+mt+"/"+yr

   ReactDom.render(
     <>
      <h1>
        Welcome to React JS
      </h1>
      <h3>{time}</h3>
      <h3>{date}</h3>
     </>,
     document.getElementById('root')
   )
*/
/*
import ReactDom from 'react-dom'
import React from 'react'

const marks=prompt("Enter marks here")
let result=""
if (marks<=35){
  result="Failed"
}else{
  result="Passed"
}

ReactDom.render(
  <>
  <h1>Welcome to ReactJS</h1>
  <h3>{result}</h3>
  </>,
  document.getElementById('root')
)
*/
/*
import ReactDom from  'react-dom'
import React from 'react'

const name = prompt("Enter the name")
const age = prompt("Enter the age")

const currDate=new Date()

const dt=currDate.getDate()
const mt=currDate.getMonth()
const yr=currDate.getFullYear()

const date=dt+"/"+mt+"/"+yr

let result=""

if (age<18){
  result="Not eligible to Drive"
}else{
  result= name+" is eligible to Drive"
}

ReactDom.render(
  <>
  <h1>DRIVER'S LICENSE part 2</h1>
  <table border="1px" cellSpacing={1}>
    <tr>
      <th>Date</th>
      <th>Name</th>
      <th>Age</th>
      <th>Results</th>
    </tr>
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{result}</td>
    </tr>
  </table>
  </>,
  document.getElementById('root')
)
*/
import ReactDOM from 'react-dom';
import React from 'react'
//object creation
//inline css
const heading={
  color:"red",
  fontFamily:"arial",
  backgroundColor:"yellow"
}
ReactDOM.render(
  <>
    <h1 style={heading}>Welcome to CSS world in react</h1>
  </>,
  document.getElementById('root')
)
