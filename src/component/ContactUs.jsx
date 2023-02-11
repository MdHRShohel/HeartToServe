import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

function ContactUs() {
	return (
		<div className='w-10/12 mx-auto my-20'>
			<h1 className='text-center font-bold text-3xl drop-shadow-lg'>
				Get In Touch With Us
			</h1>
			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<div className='bg-black'></div>
				<div className='p-8'>
					<h2 className='text-3xl font-medium'>Meet Us</h2>
					<div className='flex items-center mt-12'>
						<BsFillTelephoneOutboundFill
							fontSize={30}
							className='mr-4 text-teal-300'
						/>
						<p className='text-sm'>+880 111 222 3333</p>
					</div>
					<div className='flex items-center mt-6'>
						<MdMarkEmailUnread
							fontSize={30}
							className='mr-4 text-teal-300'
						/>
						<p className='text-sm'>contact@hearttoSave.com</p>
					</div>
					<div className='flex items-center mt-6'>
						<FaLocationArrow
							fontSize={30}
							className='mr-4 text-teal-300'
						/>
						<p className='text-sm'>
							Tejturi Bazar West, Panthapath, Dhaka 1215
						</p>
					</div>
				</div>
				<div className='bg-gray-300 p-8'>
					<h2 className='text-3xl font-medium'>About Us</h2>
					<p className='mt-4'>Hello</p>
					<p className='mt-4 text-xs'>
						This is a{" "}
						<span className='text-blue-600'>Volunteer Organization</span> for
						help people. we are working as volunteer. our target to help{" "}
						<span className='text-blue-600'>poor people</span>.
					</p>
					<button className=' bg-teal-400 text-black font-semibold py-2 mt-6 px-3 rounded '>
						Donate Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
