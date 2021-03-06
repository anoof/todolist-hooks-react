import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, complete, removeTodo, toggleTodo, editTodo }) {
	const [isEditing, toggle] = useToggleState(false);
	return (
		<ListItem style={{ height: "64px" }}>
			{isEditing ? (
				<EditTodoForm
					id={id}
					task={task}
					editTodo={editTodo}
					toggleForm={toggle}
				/>
			) : (
				<>
					<Checkbox
						tabIndex={-1}
						checked={complete}
						onClick={() => toggleTodo(id)}
					/>
					<ListItemText
						style={{ textDecoration: complete ? "line-through" : "none" }}
					>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
							<DeleteIcon />
						</IconButton>
						<IconButton aria-label="Edit" onClick={toggle}>
							<EditIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}
export default Todo;
