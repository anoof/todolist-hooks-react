import TextField from "@material-ui/core/TextField";
import React from "react";
import useInputState from "./hooks/useInputState";
function EditTodoForm({ id, task, editTodo, toggleForm }) {
	const [value, handleChange, reset] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
                toggleForm();
			}}
		>
			<TextField
				margin="normal"
				value={value}
				onChange={handleChange}
				fullWidth
			/>
		</form>
	);
}
export default EditTodoForm;
