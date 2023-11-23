import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../todo/type";

export interface TodosState {
	todos: Todo[];
}

const initialTodosState: TodosState = {
	todos: []
};

const todosSlice = createSlice({
	name: "todos",
	initialState: initialTodosState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},

		completeTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.map(todo =>
				todo.id === action.payload ? { ...todo, status: "completed" } : todo
			);
		},

		inCompleteTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.map(todo =>
				todo.id === action.payload ? { ...todo, status: "todo" } : todo
			);
		},

		editTodoTitle(state, action: PayloadAction<{ id: number; title: string }>) {
			state.todos = state.todos.map(todo =>
				todo.id === action.payload.id
					? { ...todo, title: action.payload.title }
					: todo
			);
		},

		deleteTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		}
	}
});

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
