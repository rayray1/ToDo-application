type Status = "todo" | "completed";

export type Todo = {
	id: number;
	title: string;
	description?: string;
	due: string;
	// ordinal: string
	status: Status;
};

export type Filter = Status | "all";
