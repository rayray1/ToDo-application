import { useState } from "react";
import { useDispatch } from "react-redux";
import { FiPlus } from "react-icons/fi";
import { todosActions } from "../store/todos";
import { Dialog, DialogButton, DialogContent } from "../components/Dialog";
import { Todo } from "./type";
import Button from "../components/Button";
import { Input } from "../components/Input";

function TodoCreate() {
	const dispatch = useDispatch();

	const [dialogOpen, setDialogOpen] = useState(false);

	const handleOnSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const title = (form.elements.namedItem("title") as HTMLInputElement).value;
		const due = (form.elements.namedItem("due") as HTMLInputElement).value;
		const description = (
			form.elements.namedItem("description") as HTMLInputElement
		).value;

		const newTodo: Todo = {
			id: Math.floor(Math.random() * 100),
			title,
			description,
			status: "todo",
			due: due
		};

		dispatch(todosActions.addTodo(newTodo));
		setDialogOpen(false);
	};

	const handleAddNewTask = () => {
		setDialogOpen(true);
	};

	return (
		<Dialog open={dialogOpen}>
			<DialogButton asChild>
				<Button onClick={handleAddNewTask}>
					<FiPlus />
					<span>New Task</span>
				</Button>
			</DialogButton>
			<DialogContent title='Create new task'>
				<TodoCreateForm onSubmit={handleOnSubmit} />
			</DialogContent>
		</Dialog>
	);
}

type TodoCreateFormProps = {
	onSubmit: (e: React.SyntheticEvent) => void;
};

function TodoCreateForm({ onSubmit }: TodoCreateFormProps) {
	return (
		<form className='space-y-4' onSubmit={onSubmit}>
			<div className='grid w-full items-center gap-1.5'>
				<label htmlFor='task-title' className='font-medium leading-none'>
					Task title
				</label>
				<Input id='task-title' type='text' name='title' required />
			</div>
			<div className='grid w-full items-center gap-1.5'>
				<label htmlFor='description' className='font-medium leading-none'>
					Description
				</label>
				<textarea
					id='description'
					name='description'
					className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
				/>
			</div>
			<div className='grid w-full items-center gap-1.5'>
				<label htmlFor='task-due-date' className='font-medium leading-none'>
					Due Date
				</label>
				<Input id='task-due-date' type='date' name='due' required />
			</div>

			<div className='flex gap-4'>
				<button type='button' className='ml-auto'>
					Cancel
				</button>
				<Button type='submit'>Create</Button>
			</div>
		</form>
	);
}

export default TodoCreate;
