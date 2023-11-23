import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { FiChevronDown, FiChevronUp, FiTrash, FiEdit } from "react-icons/fi";
import { Todo } from "./type";
import { todosActions } from "../store/todos";

type Props = {
	todo: Todo;
};

function TaskItem({ todo }: Props) {
	const dispatch = useDispatch();

	const [showDesc, setShowDesc] = React.useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editValue, setEditValue] = useState(todo.title);

	const handleEdit = () => setIsEditing(true);

	const handleTodoStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (isEditing) {
			setEditValue(todo.title);
		} else {
			e.target.checked ? completeTodo() : inCompleteTodo();
		}
	};

	const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditValue(e.target.value);
	};

	const handleEditBlur = () => isEditing && updateTodo();

	const handleEditKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>
		e.key === "Enter" && isEditing && updateTodo();

	const completeTodo = () => {
		dispatch(todosActions.completeTodo(todo.id));
	};

	const inCompleteTodo = () => {
		dispatch(todosActions.inCompleteTodo(todo.id));
	};

	const deleteTodo = () => {
		dispatch(todosActions.deleteTodo(todo.id));
	};

	const updateTodo = () => {
		const trimmedValue = editValue.trim();
		if (trimmedValue !== "") {
			dispatch(
				todosActions.editTodoTitle({ id: todo.id, title: trimmedValue })
			);
		}
		setIsEditing(false);
	};

	return (
		<>
			<div
				key={todo.id}
				className='px-4 py-2 box-content grid grid-cols-[auto_1fr_auto] gap-4 items-center border-2 border-transparent hover:border-gray-200 rounded border-gray-200'
			>
				<input
					type='checkbox'
					className='h-6 w-6 accent-green-600 rounded-full border-gray-400 text-green-600 focus:ring-green-600 shadow checked:shadow-xl'
					id={`todo-item-${todo.id}`}
					onChange={handleTodoStatusChange}
				/>

				{isEditing ? (
					<input
						type='text'
						value={editValue}
						onChange={handleEditChange}
						onBlur={handleEditBlur}
						onKeyDown={handleEditKeyPress}
						className='flex text-lg gap-2 items-baseline border-b border-gray-500'
						autoFocus
					/>
				) : (
					<label
						className='flex text-lg gap-2 items-baseline cursor-pointer'
						htmlFor={`todo-item-${todo.id}`}
						onDoubleClick={handleEdit}
					>
						{todo.title}
					</label>
				)}

				<div className='flex gap-2'>
					<span className='text-gray-400 text-sm mr-2'>{todo.due}</span>

					<button className='p-1' onClick={() => setShowDesc(s => !s)}>
						{showDesc ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
					</button>

					{!isEditing && (
						<>
							<button className='p-1 text-blue-700' onClick={handleEdit}>
								<FiEdit size={20} />
							</button>

							<button className='p-1 text-red-700' onClick={deleteTodo}>
								<FiTrash size={20} />
							</button>
						</>
					)}
				</div>
			</div>

			{showDesc && (
				<div className='ml-7 pl-7 border-l-gray-400 border-l'>
					<div className='bg-white p-4 rounded shadow-sm'>
						<p>{todo.description}</p>
					</div>
				</div>
			)}
		</>
	);
}

export default TaskItem;
