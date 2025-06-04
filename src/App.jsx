import "./App.css";
import AddTodo from './todos/AddTodo';
import TodoList from './todos/TodoList';
import Filter from './todos/Filter';

function App() {
  return (
    <div className="App">
      <h1 style={{marginBottom:"8px"}}>To-Do App</h1>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
