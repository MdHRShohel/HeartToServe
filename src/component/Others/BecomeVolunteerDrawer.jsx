import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function BecomeVolunteerDrawer({ toggleDrawer, isOpen, state }) {
	return (
		<div>
			<Drawer
				open={isOpen}
				onClose={toggleDrawer}
				direction='right'
				className='bla bla bla'>
				<div className='flex justify-center items-center flex-col space-y-3  h-full w-6/12 mx-auto'>
					<input
						type='text'
						className='border-2 rounded-md p-1  border-orange-500 outline-orange-400'
						defaultValue={state?.name}
						readOnly
					/>
					<input
						type='text'
						className='border-2 rounded-md p-1  border-orange-500 outline-orange-400'
						defaultValue={state?.email}
						readOnly
					/>
					<input
						type='text'
						className='border-2 rounded-md p-1  border-orange-500 outline-orange-400'
						defaultValue={state?.address}
						readOnly
					/>
					<input
						type='text'
						className='border-2 rounded-md p-1  border-orange-500 outline-orange-400'
						defaultValue={state?.bloodGroup}
						readOnly
					/>
					<button className='bg-[#ffe2da] hover:bg-[#ffd3c6] duration-300 w-full text-[#ff9370] font-semibold py-2 mt-4 px-2 rounded '>
						Your Are Now a Volunteer
					</button>
				</div>
			</Drawer>
		</div>
	);
}

export default BecomeVolunteerDrawer;
