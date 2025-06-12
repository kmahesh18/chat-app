const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-3 items-center my-6'>
				<div className='w-8 h-8 rounded-full bg-dark-500 animate-pulse'></div>
				<div className='flex flex-col gap-2'>
					<div className='h-3 w-32 bg-dark-500 animate-pulse rounded-md'></div>
					<div className='h-3 w-40 bg-dark-500 animate-pulse rounded-md'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end my-6'>
				<div className='flex flex-col gap-2'>
					<div className='h-3 w-32 bg-dark-500 animate-pulse rounded-md'></div>
				</div>
				<div className='w-8 h-8 rounded-full bg-dark-500 animate-pulse'></div>
			</div>
		</>
	);
};
export default MessageSkeleton;