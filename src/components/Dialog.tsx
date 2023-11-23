import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { FiX } from "react-icons/fi";

type DialogProps = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: ReactNode;
};

export function Dialog({ open, onOpenChange, children }: DialogProps) {
	return (
		<DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
			{children}
		</DialogPrimitive.Root>
	);
}

export function DialogContent({
	title,
	children
}: {
	title?: string;
	children: ReactNode;
}) {
	return (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay className='fixed inset-0 bg-slate-300/50 backdrop-blur-sm' />
			<DialogPrimitive.Content
				className='bg-white shadow-sm rounded-md p-6 w-full max-w-lg fixed
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        grid gap-4 border border-slate-200
        duration-400
        data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
        data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
        data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]
        data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]'
			>
				<div className='flex items-center justify-between'>
					{title && (
						<DialogPrimitive.Title className='text-2xl text-gray-700'>
							{title || "Dialog"}
						</DialogPrimitive.Title>
					)}
					<DialogPrimitive.Close asChild>
						<button className='p-2 text-gray-400 hover:text-gray-600'>
							<FiX className='text-xl' />
						</button>
					</DialogPrimitive.Close>
				</div>

				<div className=''>{children}</div>
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	);
}

export const DialogButton = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
