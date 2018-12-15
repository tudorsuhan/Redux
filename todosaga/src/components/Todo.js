import React, { Component } from 'react';
import { func, bool, string } from 'prop-types';

class Todo extends Component {
    static propTypes = {
        onClick: func.isRequired,
        completed: bool.isRequired,
        text: string.isRequired
    }
    render() {
        const { onClick, completed, text } = this.props;
        console.log(this.props);
        return(
            <li
                onClick={onClick} 
                style={{ textDecoration: completed ? 'line-through' : 'none'}}
            >
            {text}
            </li>
        )
    }
}

export default Todo;