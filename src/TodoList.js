import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo, i) => (
						<div key={todo.id}>
							<Todo
								id={todo.id}
								task={todo.task}
								key={todo.id}
								complete={todo.complete}
								removeTodo={removeTodo}
								toggleTodo={toggleTodo}
								editTodo={editTodo}
							/>
							{i < todos.length - 1 && <Divider />}
						</div>
					))}
				</List>
			</Paper>
		);
	return null;
}
export default TodoList;
