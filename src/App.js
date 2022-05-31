// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//            <code>React Deployment using Bamboo</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// -------------------------------------
// -------------------------------------

import React from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="App">
        <p>React Deployment using Bamboo</p>
        <p>Reload to check the time change</p>
        <p>Current Date And Time : {this.state.curDT}</p>
      </div>
    );
  }
}
 
export default App;