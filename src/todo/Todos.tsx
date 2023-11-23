import React, { useCallback, useEffect, useState } from "react";
import Todo from "./Todo";
import TodoFilters from "./TodoFilters";
import TodoStats from "./TodoStats";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Filter } from "./type";

function Todos() {
	const todos = useSelector((state: RootState) => state.todos.todos);
	const [selectedFilter, setSelectedFilter] = React.useState<Filter>("all");
	const [dataToMap, setDataToMap] = useState<typeof todos>([]);

	const handleFilterChange = useCallback((filter: Filter) => {
			setSelectedFilter(filter);
			const dataToStore =
				filter === "all" ? todos : todos.filter(data => data.status === filter);
			setDataToMap(dataToStore);
		},[todos]);

	useEffect(() => {
		if (todos) {
			handleFilterChange(selectedFilter);
		}
	}, [handleFilterChange, selectedFilter, todos]);

	return (
		<>
			<TodoStats />
			<TodoFilters
				selectedFilter={selectedFilter}
				handleFilterChange={handleFilterChange}
			/>
			<div className='space-y-2'>
				{dataToMap.map(todo => 
					<Todo key={todo.id} todo={todo} />
				)}
			</div>
		</>
	);
}

export default Todos;
