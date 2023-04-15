const Spinner = ({ text = 'Loading' }) => (
	<div className='flex flex-col justify-center items-center h-[36rem] '>
		<div className='animate-spin rounded-full h-64 w-64 border-b-4 border-t-4 border-[#6E64EA]'></div>
		<p className='mt-4 text-2xl'>{text}...</p>
	</div>
);

export default Spinner;