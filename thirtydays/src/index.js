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

// const headerStyles = {
//   backgroundColor: '#61DBFB',
//   fontFamily: 'Helvetica Neue',
//   padding: 25,
//   lineHeight: 1.5,
// }

// const header = (
//   // <header style={headerStyles}>
//   <header>
//   <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Claudio Holanda</p>
//       <small>Oct 2, 2020</small>
//     </div>
//   </header>
// )



// JSX element, main
// const mainStyles = {
//   backgroundColor: '#F3F0F5',
// }
// const main = (
//   <main style={mainStyles}>
//     <p>Prerequisite to get started react.js:</p>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//     </ul>
//   </main>
// )
// const main = (
//   <main>
//     <div className='main-wrapper'>
//       <p>
//         Prerequisite to get started{' '}
//         <strong>
//           <em>react.js</em>
//         </strong>
//         :
//       </p>
//       <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li> JavaScript</li>
//       </ul>
//     </div>
//   </main>
// )

// JSX element, footer
// const footerStyles = {
//   backgroundColor: '#61DBFB',
// }
// // JSX element, footer
// const footer = (
//   <footer style={footerStyles}>
//     <p>Copyright 2020</p>
//   </footer>
// )
// const footer = (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright 2020</p>
//     </div>
//   </footer>
// )

// JSX element, app, a container or a parent
// const app = (
//   <div className='app'>
//     {header}
//     {main}
//     {footer}
//   </div>
// )

// INJECTING DATA TO JSX ELEMENTS

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Claudio',
  lastName: 'Holanda',
}

const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)


const jsxElement = <h1>This is a JSX element claudio</h1>
// const title = <h2>Getting Started React</h2>
const rootElement = document.getElementById('root')





ReactDOM.render(jsxElement, rootElement)
ReactDOM.render(header, rootElement)
ReactDOM.render(app, rootElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
