import logo from './logo.svg';
import './App.css';
const todos = require('./mock-data/todos/getTodos.json')

function App() {

  return (
    <div className="App">
      <div className="Container">
        <h3>Todo List</h3>
        <ul className='List-items'>
          {todos.map(item=> <li>{item.value}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
