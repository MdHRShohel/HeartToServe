import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaDonate, FaHandHoldingHeart } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";
import { useSelector } from "react-redux";

function FundRaising() {
	const [fundMoney, setFundMoney] = useState("");

	const state = useSelector((state) => state.formData);

	return (
		<div className='w-10/12 mb-20 container'>
			<h1 className='text-center text-orange-500 font-bold text-2xl md:text-3xl drop-shadow-lg'>
				Funding Poor People
			</h1>
			<div className='mt-10 grid lg:grid-cols-2 gap-20 items-center'>
				<div className='w-full'>
					<div className='text-center text-md md:text-2xl text-red-500 font-bold mb-2'>
						<Typewriter
							words={[
								"Donate For Turkey Earthquake",
								"Donate For Syria Earthquake",
							]}
							cursor
							cursorStyle='...'
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
							loop={true}
						/>
					</div>
					<p className='hidden md:block text-justify mb-4 text-gray-700 text-lg leading-6'>
						Fundraising or fund-raising is the process of seeking and gathering
						voluntary financial contributions by engaging individuals,
						businesses, charitable foundations, or agencies. access funding, and
						train them to become sustainable in the process.
					</p>

					<p className='md:hidden text-justify mb-4 text-gray-700 text-lg leading-6'>
						Fundraising or fund-raising is the process of seeking and gathering
						voluntary...
					</p>
					<div className='md:flex justify-between items-start mt-8'>
						<div className='md:pr-10 text-center space-y-3 mb-8 md:mb-0'>
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
								className='w-full border-2 outline-0 border-l-orange-500 py-2 px-4 rounded-r-lg'
								defaultValue={fundMoney}
							/>
							<input
								type='text'
								placeholder='Your Phone Number'
								className='w-full border-2 outline-0 border-l-orange-500 mt-2 py-2 px-4 rounded-r-lg'
							/>
							<input
								type='email'
								placeholder='Your Email'
								className='w-full border-2 outline-0 border-l-orange-500 mt-2 py-2 px-4 rounded-r-lg'
								defaultValue={state?.email}
							/>
							<button className='bg-[#ffe2da]  hover:bg-[#ffd3c6] duration-300 w-full text-[#ff9370] font-semibold py-2 mt-4 px-3 rounded '>
								Donate Now
							</button>
						</form>
					</div>
				</div>
				<div className='w-full relative'>
					<img
						src='https://i.ibb.co/2WDdsWp/a.jpg'
						alt='fund raising'
						className='w-full h-full'
					/>
					<div className='grid grid-cols-4 gap-2 text-sm lg:w-11/12 uppercase text-white absolute -bottom-10 lg:-bottom-10 lg:left-auto lg:right-6'>
						<article className='flex flex-col justify-center items-center text-center bg-violet-400 p-3 shadow-lg'>
							<AiFillHeart fontSize={30} />
							<p>Help The Children</p>
						</article>
						<article className='flex flex-col justify-center items-center text-center bg-green-400 p-3 shadow-lg'>
							<FaDonate fontSize={30} />
							<p>Please Donate</p>
						</article>
						<article className='flex flex-col justify-center items-center text-center bg-amber-400 p-3 shadow-lg'>
							<FaHandHoldingHeart fontSize={30} />
							<p>Became Volunteer</p>
						</article>
						<article className='flex flex-col justify-center items-center text-center bg-blue-400 p-3 shadow-lg'>
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
