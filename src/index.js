// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import React from 'react';
// import ReactDOM from 'react-dom/client';


// ReactDOM.createRoot
// (document.querySelector("#root")).
// render(<h1>vinod</h1>)




// const name='hello'
// ReactDOM.createRoot(
//   document.querySelector('#root')
// ).render(<h1>{name}</h1>)


/////    or
// const name=<h1>hello</h1>
// ReactDOM.createRoot(
//   document.querySelector('#root')
// ).render(name)

// function hello(){
//   return <h1>csd vinod</h1>
// }
// ReactDOM.createRoot(
//   document.querySelector("#root")
// ).render(hello())


//##### functional component ####
// function Hello(){
//   return <h1>csd vinod</h1>
// }
// ReactDOM.createRoot(
//   document.querySelector("#root")
// ).render(<Hello></Hello>)

// class component

// class Hello extends React.Component{
//   render(){
//     return <h1>codeplanet</h1>
//   }
// }
// ReactDOM.createRoot(
//   document.querySelector("#root")
// ).render(<Hello/>)

// class Student extends React.Component{
//   static cname='vgu'
//   render(){
    
//     return "hello studnet"
//   }
// }
// ReactDOM.createRoot(
//   document.querySelector("#root")
// ).render(<h2>{Student.cname}</h2>)
// .render(<h2><Student/></h2>)

// import {Demo} from './demo'
// ReactDOM.createRoot(
//   document.querySelector("#root")
// ).render(<Demo/>)

// ReactDOM.createRoot(
//     document.querySelector("#root")
//   ).render(<Header/>)



import ReactDOM from 'react-dom/client';
// import Model from './model3';
// import State from './state';
import Counter  from './counter'
// import Home from './home'
// ReactDOM.createRoot(
//         document.querySelector("#root")
//       ).render(<Home/>)


ReactDOM.createRoot(
        document.querySelector("#root")
      ).render(<Counter />)


// class person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }
// class studnet extends person{
//     constructor(rollno,marks,name,age){
//         super(name,age)
//         this.rollno=rollno
//         this.marks=marks
//     }
// }
// let s=new studnet(1,70,'abc',27)
// console.log(s.rollno)
// console.log(s.marks)
// console.log(s.name)
// console.log(s.age)

/// ##### dictionory

// let phonebook={abc:2123,pqr:4312}
// console.log(phonebook.abc)


// import Table from './table';

// let tableData=[{name:'abc',marks:40},{name:'pqr',marks:50},{name:'xyz',marks:70},
//   {name:'klm',marks:20},{name:'jkl',marks:30}
// ]
// ReactDOM.createRoot(
//     document.querySelector("#root")
//   ).render(<Table csd={tableData}/>)