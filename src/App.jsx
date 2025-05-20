import Header from "./Header.JSX"

function App() {
  return (
    
    <div>
      <Header />
      <h1>hello react</h1>
      <h1>My name is namrata</h1>

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