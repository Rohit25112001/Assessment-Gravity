import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { tasks, filter } = useSelector(state => state.todos);

  const filtered = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <ul>
      {filtered.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
