import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	return (
		<button
			ref={ref}
			className='bg-green-600 hover:bg-green-700 active:bg-green-800 text-white border rounded shadow-sm px-6 py-2 flex items-center gap-2 outline-green-700'
			{...props}
		/>
	);
});

// variants:
//   variant:
//    primary: bg, border color, text color
//  sizes:

export default Button;
