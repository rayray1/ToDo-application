import TodoCreate from "./TodoCreate";
import { Filter } from "./type";

type TodoFiltersProps = {
	selectedFilter: Filter;
	handleFilterChange: (selectedFilter: Filter) => void;
};

function TodoFilters({ selectedFilter, handleFilterChange }: TodoFiltersProps) {
	const activeStyles = "bg-gray-700 text-white hover:bg-gray-500";

	return (
		<div className='h-16 flex items-center gap-4 mt-4'>
			<label>Filters: </label>
			<button
				className={`px-2 py-1 rounded hover:bg-gray-200  ${
					selectedFilter === "all" ? activeStyles : ""
				}`}
				onClick={() => handleFilterChange("all")}
			>
				All
			</button>
			<button
				className={`px-2 py-1 rounded hover:bg-gray-200 ${
					selectedFilter === "todo" && activeStyles
				}`}
				onClick={() => handleFilterChange("todo")}
			>
				Due
			</button>
			<button
				className={`px-2 py-1 rounded hover:bg-gray-200 ${
					selectedFilter === "completed" && activeStyles
				}`}
				onClick={() => handleFilterChange("completed")}
			>
				Completed
			</button>
			<div className='ml-auto'>
				<TodoCreate />
			</div>
		</div>
	);
}

export default TodoFilters;
