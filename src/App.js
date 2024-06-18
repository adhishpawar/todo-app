import './App.css';
import Counter from './components/counter/counter'
import TodoApp from './components/todo/TodoApp'
//Accept the Default Value

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  )
}

// function PlayingWithProps(properties)
// {
//   console.log(properties);
//   console.log(properties.property1);
//   console.log(properties.property2);
//   return (
//     <div>Pros</div>
//   )
// }


export default App;
