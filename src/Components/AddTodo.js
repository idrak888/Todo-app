import React from 'react';

const AddTodo = props => {
	return (
		<div className="AddTodo">
			<h3>Add something to do</h3>
			<form onSubmit={props.addTodo}>
				<input className="newTodo" type="text" placeholder="Walk the dog"/>
			</form>
			<span className="msg"></span>
			
		</div>
	);
}

export default AddTodo;