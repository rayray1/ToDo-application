import { useSelector } from "react-redux";
import { RootState } from "../store";

function TodoStats() {
	const todos = useSelector((state: RootState) => state.todos.todos);

	const completedTasks = todos.filter(todo => todo.status === "completed");

	return (
		<div className='flex items-center justify-between p-4 rounded bg-gray-200'>
			<div>
				<h3 className='text-gray-700 text-xl font-semibold'>{todos.length}</h3>
				<h1 className='text-gray-400'>Created Tasks</h1>
			</div>
			<div>
				<h3 className='text-gray-700 text-xl font-semibold text-right'>
					{completedTasks.length}
				</h3>
				<h1 className='text-gray-400'>Completed Tasks</h1>
			</div>
		</div>
	);
}

export default TodoStats;
