import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Todos = ({ todos, remove, add, update }) => {

  const [toDoItem, setTodDoItem] = useState("");
  const [editItem, setEditItem] = useState(undefined);
  const [errors, setError] = useState(undefined);

  const checkIfValid = () => {
    if (!!toDoItem) {
      if (todos.includes(toDoItem)) {
        setError("You already have that to do item.");
        return false;
      } else {
        return true;
      }
    } else {
      setError("You can't have a blank to do item.");
      return false;
    }
  };

  const handleAdd = () => {
    if (checkIfValid()) {
      add({ todo: toDoItem });
      setTodDoItem("");
    }
  };

  const handleEdit = () => {
    if (checkIfValid()) {
      update({ todo: toDoItem, id: editItem });
      setEditItem(undefined);
      setTodDoItem("");
      cancelEdit()
    }
  };

  const chooseItemToEdit = (t, idx) => {
    setTodDoItem(t);
    setEditItem(idx);
  };

  const cancelEdit = () => {
    setEditItem(undefined)
    setTodDoItem("");
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '400px' }} >
      <h2>Todos:</h2>
      <ul className='list-group list-group-flush'>
      {
        todos.length === 0 && <div className="p-4 mt-4"><h3 >Congrats! You did it!</h3> <br/> <img className="w-100" src="https://media.giphy.com/media/3o6fIUZTTDl0IDjbZS/giphy.gif" /></div>}
      {
        todos.map((t, idx) => (
          <li key={idx} className={`list-group-item d-flex justify-content-between align-items-center ${editItem === idx ? 'bg-primary' : ''}`}>
            {idx + 1}. {t}
            <div>
              <button className='close m-1' onClick={() => remove(t)}>
                <span >&times;</span>
              </button>
              {(editItem === idx) ? 
                <button className="btn  mr-3 btn-dark" onClick={cancelEdit}>
                  <span >Cancel Edit</span>
                </button>
                :
                <button className="btn  mr-3 btn-light" onClick={() => chooseItemToEdit(t, idx)}>
                  <span >Edit</span>
                </button>
              }
            </div>
          </li>
        ))
      }
      </ul>

      <br />
      <div className='input-group'>
        <input
          type="text"
          value={toDoItem}
          className={`form-control ${errors ? 'is-invalid' : ''}`} 
          placeholder='Write something'
          onChange={e => setTodDoItem(e.target.value)}
          onClick={() => setError(null)}
   
        />
        <div className='input-group-append'>
          { editItem !== undefined ? 
          <button className='btn btn-outline-secondary' onClick={handleEdit}>Save</button>
          :
          <button className='btn btn-outline-secondary' onClick={handleAdd}>Add</button>
          }
        </div>
        <br/>
        <div className={` ${errors ? 'invalid-feedback' : ''}`} >{errors}</div>
      </div>
    

    </div>
  )
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
}

export default Todos
