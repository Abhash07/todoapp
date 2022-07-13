// import { FALSE } from 'node-sass';
import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const initialTask = {
    id: '',
    checked: false,
    label: '',
  };
  const [task, setTask] = React.useState(initialTask);

  const handleAddTodo = () => {
    if (task.length > 0) {
    setTodos((prev) => ([...prev, task]));
   setTask(initialTask);
  } else {
    alert('Enter some task');
  }
  };

  const handleKeyUp = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task.label}
        onChange={(e) => setTask({
          ...task,
          id: todos.length,
          label: e.target.value,
        })}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
