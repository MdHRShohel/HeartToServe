import Link from "next/link";

function DoNotNeedTrash() {
	return (
		<div className='container my-20 w-10/12'>
			<div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
				<div className='relative w-6/12 hidden lg:block'>
					<img
						src='https://images.unsplash.com/photo-1607536143324-9ea8ceaecdbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
						alt=''
						className='rounded-md shadow-xl'
					/>
					<img
						src='https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
						alt=''
						className='rounded-full absolute bottom-5 left-32 border-4 border-white z-10'
					/>
					<img
						src='https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
						alt=''
						className='absolute top-16 border-4 border-white rounded-full left-64 w-8/12'
					/>
				</div>
				<div className=''>
					<div
						className='w-32 h-32 rounded-full mb-8'
						style={{ border: "30px solid #F0EEED" }}></div>
					<h1 className='text-5xl font-bold text-slate-900'>
						If nature doesn't need trash
					</h1>
					<p className='mt-4 text-gray-600'>
						This debris harms physical habitats, transports chemical pollutants,
						threatens aquatic life, and interferes with human uses of river,
						marine and coastal environments.
					</p>
					<p className='mt-4 text-gray-600'>
						Trash can travel throughout the world's rivers and oceans,
						accumulating on beaches and within gyres
					</p>
					<button className='tracking-wider px-6 py-2 mt-8 rounded-lg border border-black hover:bg-[#F36A4F] cursor-pointer hover:text-white hover:border-current transition-all duration-200'>
						<Link href={"#"}>Learn More</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default DoNotNeedTrash;
