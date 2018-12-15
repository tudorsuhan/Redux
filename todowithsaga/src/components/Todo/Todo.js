import React from 'react';
import styles from './Todo.module.scss';

const Todo = ({ todos, onChange }) => {
  return(
    todos.map(todo => (
        <li key={todo.id} className={styles.todoLi}>
          <div className={styles.todoLiCheck}></div>
          <div className={styles.todoLiText}>{todo.text}</div>
        </li>
    ))
  );
}

export default Todo;

// export default class Todo extends Component {
//   render() {
//     return (
//       <li className={styles.todo}>
//         
//       </li>
//     );
//   }
// }
