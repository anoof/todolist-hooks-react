import { v4 as uuid } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

export default (initialTodos) => {
	const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
	return {
		todos,
		addTodo: (newTodoText) => {
			setTodos([...todos, { id: uuid(), task: newTodoText, complete: false }]);
		},
		removeTodo: (todoId) => {
			const updatedTodos = todos.filter((todo) => todo.id !== todoId);
			setTodos(updatedTodos);
		},
		toggleTodo: (todoId) => {
			const updatedTodos = todos.map((todo) =>
				todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
			);
			setTodos(updatedTodos);
		},
		editTodo: (todoId, newTask) => {
			const updatedTodos = todos.map((todo) =>
				todo.id === todoId ? { ...todo, task: newTask } : todo
			);
			setTodos(updatedTodos);
		},
	};
};
