import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaDonate, FaHandHoldingHeart } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function FundRaising() {
	const [fundMoney, setFundMoney] = useState("");

	return (
		<div className='w-10/12 mx-auto my-20'>
			<h1 className='text-center font-bold text-3xl drop-shadow-lg'>
				Funding Poor People
			</h1>
			<div className='mt-10 grid lg:grid-cols-2 gap-20'>
				<div className='w-50'>
					<p className='text-justify'>
						Fundraising or fund-raising is the process of seeking and gathering
						voluntary financial contributions by engaging individuals,
						businesses, charitable foundations, or governmental agencies.
					</p>
					<div className='flex justify-between items-start mt-10'>
						<div className='pr-10 text-center space-y-3'>
							<article className='bg-pink-200 hover:bg-pink-300 duration-300 cursor-pointer py-2 px-4 rounded-md'>
								<p>Monthly</p>
								<h4>
									${" "}
									<span
										className='font-bold'
										onClick={(e) => setFundMoney(e.target.innerText)}>
										10
									</span>
								</h4>
							</article>
							<article className='bg-blue-200 hover:bg-blue-300 duration-300 cursor-pointer py-2 px-4 rounded-md'>
								<p>Monthly+</p>
								<h4>
									${" "}
									<span
										className='font-bold'
										onClick={(e) => setFundMoney(e.target.innerText)}>
										50
									</span>
								</h4>
							</article>
							<article className='bg-yellow-200 hover:bg-yellow-300 duration-300 cursor-pointer py-2 px-4 rounded-md'>
								<p>Monthly++</p>
								<h4>
									${" "}
									<span
										className='font-bold'
										onClick={(e) => setFundMoney(e.target.innerText)}>
										100
									</span>
								</h4>
							</article>
						</div>
						<form>
							<input
								type='number'
								placeholder='$'
								className='w-full border-2 border-l-gray-900 py-2 px-4 rounded-r-lg'
								defaultValue={fundMoney}
							/>
							<input
								type='text'
								placeholder='Your Phone Number'
								className='w-full border-2 border-l-gray-900 mt-2 py-2 px-4 rounded-r-lg'
							/>
							<input
								type='email'
								placeholder='Your Email'
								className='w-full border-2 border-l-gray-900 mt-2 py-2 px-4 rounded-r-lg'
							/>
							<button
								type='button'
								data-mdb-ripple='true'
								data-mdb-ripple-color='light'
								className='inline-block mt-4 w-full px-6 py-3 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
								Donate Now
							</button>
						</form>
					</div>
				</div>
				<div className='w-50 relative'>
					<img
						src='https://i.ibb.co/qjHQT2T/joel-muniz-BEr-JJL-Ksj-A-unsplash.jpg'
						alt='fund raising'
						className='w-full'
					/>
					<div className='grid grid-cols-4 gap-2 text-sm lg:w-11/12 uppercase text-white absolute -bottom-10 lg:-bottom-12 lg:left-auto lg:right-6'>
						<article className='flex flex-col justify-center items-center text-center bg-violet-600 p-3 shadow-lg'>
							<AiFillHeart fontSize={30} />
							<p>Help The Children</p>
						</article>
						<article className='flex flex-col justify-center items-center text-center bg-green-600 p-3 shadow-lg'>
							<FaDonate fontSize={30} />
							<p>Please Donate</p>
						</article>
						<article className='flex flex-col justify-center items-center text-center bg-amber-600 p-3 shadow-lg'>
							<FaHandHoldingHeart fontSize={30} />
							<p>Became Volunteer</p>
						</article>
						<article className='flex flex-col justify-center items-center text-center bg-blue-600 p-3 shadow-lg'>
							<BiWorld fontSize={30} />
							<p>World Poverty</p>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FundRaising;
