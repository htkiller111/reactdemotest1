import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//const myelement = <h1>I Love JSX!</h1>;
//const myelement = React.createElement('h1', {}, 'I do not use JSX!');
//const myelement = <h1>React is {5 % 5} times better with JSX</h1>;

const myelement = (
    <div>
        <table cellSpacing="10px" border="1px">
        <tr><span><label>First Name : </label> <input type="text"/></span></tr><br></br>
        <tr><span><label>Last Name : </label> <input type="text"/></span></tr>
        </table>
    </div>
);
ReactDOM.render(myelement, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

// const myfirstelement = <h1>Hello React!</h1>

// ReactDOM.render(myfirstelement, document.getElementById('root'));

// const myelement = (
//     <table>
//       <tr>
//         <th>Name</th>
//         <th>City</th>
//       </tr>
//       <tr>
//         <td>Rohit</td>
//         <td>Navi Mumbai</td>
//       </tr>
//       <tr>
//         <td>Rohit c</td>
//         <td>Panvel</td>
//       </tr>
//     </table>
//   );

// ReactDOM.render(myelement, document.getElementById('root'));

// ReactDOM.render(<h1>Hallo</h1>, document.getElementById('sandy'));