import React from 'react';

const Todo = props => {
	return (
		<div className="Todo">
			{props.text}
			<span className="fa fa-times-circle" onClick={props.removeTodo}></span>
			<label className="container">
				<input type="checkbox"/>
				<span className="checkmark"></span>
			</label>
		</div>
	);
}

export default Todo;