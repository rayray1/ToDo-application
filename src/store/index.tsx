import { todosReducer } from "./todos";
import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";

const store = configureStore({
	middleware: [
		save({
			states: ["todos", "locales"]
		})
	],
	reducer: {
		todos: todosReducer
	},
	preloadedState: load({
		states: ["todos", "locales"]
	})
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
