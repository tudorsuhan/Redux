import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoStatus } from '../actions/actionCreatorsTodo';

class AddTodo extends Component {
    render() {
        const { dispatch } = this.props;
        let input;
        console.log(this.props);
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if(!input.value.trim()) {
                            return;
                        }
                        dispatch(addTodoStatus(input.value))
                        input.value = ''
                    }}
                >
                    <input ref={node => input = node} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo)