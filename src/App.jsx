import Header from "./Header.JSX"
import Login from "./UserComponent" 
import {Profile} from "./UserComponent"
import {Settings} from "./UserComponent"
// import { Header } from "./Header.jsx" // named import
// import { Login } from "./UserComponent" // named 

import JSXCurlyBraces from "./JSXCurlyBraces.jsx" // named import

function App() {
  return (
    
    <div>
      <Header />
      <Login />
      <hr />
      <Profile />
      <hr />
      <Settings />
      <hr />
      <h4>hello react</h4>
      <h4>My name is namrata</h4>
         <FruitList />
      <hr />
      <ColorList />

      <hr />
      <Sum />

      <hr />
      <JSXCurlyBraces />
    </div>

  )
}

function FruitList() {
  return (
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </ul>
  )
}

 function ColorList() {
  return (
    <ul>
      <li>Red</li>
      <li>Green</li>
      <li>Blue</li>
    </ul>
  )
}

function Sum(){
  
  let a=2;
  let b=3;
 return( <p>a={a} 
        <br />
        b={b}
        <br />
         sum={a+b}</p>
  )
}

export default App