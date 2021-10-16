import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <input type="text" className="todo-input"></input>
                <button type="submit" className="todo-button">
                    <FontAwesomeIcon icon={faPlusSquare} />
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;