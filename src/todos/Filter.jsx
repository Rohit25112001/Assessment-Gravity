import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/slice/todoList.slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.todos.filter);

  return (
    <div style={{display:"flex", gap:"10px", marginBottom:"20px"}}>
      {['all', 'completed', 'pending'].map(type => (
        <button
          key={type}
          onClick={() => dispatch(setFilter(type))}
          style={{ fontWeight: filter === type ? 'bold' : 'normal' ,padding:"4px", width:"100px" }}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Filter;
