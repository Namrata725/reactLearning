import Header from "./Header.JSX"
import Login from "./UserComponent" 
import {Profile} from "./UserComponent"
import {Settings} from "./UserComponent"
// import { Header } from "./Header.jsx" // named import
// import { Login } from "./UserComponent" // named import

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
export default App