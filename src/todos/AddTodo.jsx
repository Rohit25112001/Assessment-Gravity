import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoList.slice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", gap:"10px", marginBottom:"20px"}}>
      <input  style={{width:"400px",padding:"4px"}} value={text} onChange={(e) => setText(e.target.value)} placeholder="Add task..." />
      <button type="submit" style={{width:"50px",padding:"4px"}}>Add</button>
    </form>
  );
};

export default AddTodo;
