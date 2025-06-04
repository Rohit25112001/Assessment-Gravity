import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/slice/todoList.slice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() !== '') {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      setIsEditing(false);
    }
  };

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 0',
        gap: '8px',
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
