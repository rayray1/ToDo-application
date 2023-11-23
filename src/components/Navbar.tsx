const ChevronIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-4 h-4'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M19.5 8.25l-7.5 7.5-7.5-7.5'
		/>
	</svg>
);

function Navbar() {
	return (
		<nav className='flex items-center h-24'>
			<div className='flex justify-between items-baseline w-full'>
				<p className='text-3xl'>
					<span className='font-semibold'>Wednesday,</span> <span>22 Nov</span>
				</p>
				<button className='text-xl hover:bg-gray-200 px-6 py-2 rounded flex gap-2 items-center'>
					<span>Raymond</span>
					<ChevronIcon />
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
