import React, { Component } from 'react';
import Todo from './Todo';
import { arrayOf, shape, number, bool, string, func } from 'prop-types';

export default class TodoList extends Component {
    static propTypes = {
        todos: arrayOf(
            shape({
            id: number.isRequired,
            completed: bool.isRequired,
                text: string.isRequired
            }).isRequired
        ).isRequired,
        toggleTodo: func.isRequired
    }

    render() {
        const { todos, toggleTodo } = this.props;
        return (
            <ul>
                {todos.map(todo => 
                    <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
                )}
            </ul>
        );
    }
}
