// import React from 'react'
// function App() {
//   var curDay=new Date()
//   var cDay=curDay.getDay()
//   var day=''
//   const st={
//     color:'red',
//     FontFamily:'arial',
//     backgroundColor:'yellow',
//   }
//   if(cDay==='1')
//   {
//     day="Monday"
//   }else if(cDay==='2'){
//     day="Tuesday"
//   }else if(cDay==='3'){
//     day="Wednesday"
//   }else if(cDay==='4'){
//     day="Thurssday"
//   }else if(cDay==='5'){
//     day="Friday"
//   }else if(cDay==='6'){
//     day="Saturday"
//   }
//   return <>
//   <h1>Learning Components</h1>
//   <h2>Today is <span style={st}>{day}</span></h2>
//   </>
// }

// export default App;
import React from 'react'
import './index.css'
function App() {
  var curDay=new Date()
  var cDay=curDay.getDay()
  var day=''
  // const st={
  //   color:'red',
  //   FontFamily:'arial',
  //   backgroundColor:'yellow',
  // }
  if(cDay=='1')
  {
    day="Monday"
  }else if(cDay=='2'){
    day="Tuesday"
  }else if(cDay=='3'){
    day="Wednesday"
  }else if(cDay=='4'){
    day="Thurssday"
  }else if(cDay=='5'){
    day="Friday"
  }else if(cDay=='6'){
    day="Saturday"
  }
  return <>
  <h1>Learning Components</h1>
  <h2>Today is <span className='info'>{day}</span></h2>
  </>
}

export default App;
