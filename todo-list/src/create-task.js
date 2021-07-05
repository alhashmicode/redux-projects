import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionAdd, uncompletedAddTask } from './uncompeleted/uncompletedRedcuer'
const CreateTask = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    const dispatchAction = actionAdd(title, description, uncompletedAddTask);
    dispatch(dispatchAction);
    setTitle('')
    setDescription('')
  }
  return (
    <div className="create-task">
      <h2>Create Task</h2>
      <form onSubmit={submitHandler}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => { setTitle(e.target.value) }}
          required
          minLength="5"
          value={title} />
        <label>Description:</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          onChange={e => {
            setDescription(e.target.value)
          }}
          value={description}>
        </textarea>
        <input type="submit" value="submit" id='submit' />
      </form>
    </div>
  );
}

export default CreateTask;