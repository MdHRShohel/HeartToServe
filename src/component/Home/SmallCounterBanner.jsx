import { MdBloodtype } from "react-icons/md";
import { HiEmojiHappy } from "react-icons/hi";
import { RiHandCoinFill, RiBook2Fill } from "react-icons/ri";
import CountUp from "react-countup";

function SmallCounterBanner() {
	return (
		<div className='container'>
			<div
				className='px-8 py-6 lg:px-16 lg:py-8 flex justify-between flex-wrap items-center'
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
					height: "200px",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
				}}>
				<div>
					<span className='flex text-orange-400 font-bold text-sm md:text-3xl items-center justify-center'>
						<MdBloodtype fontSize={50} />
						<CountUp
							end={15876}
							duration={5}
						/>
					</span>
					<p className='text-xs lg:text-lg text-center font-bold text-white items-center'>
						DONATIONS MADE
					</p>
				</div>

				<div>
					<span className='flex text-orange-400 font-bold text-sm md:text-3xl items-center justify-center'>
						<HiEmojiHappy fontSize={50} />
						<CountUp
							end={65742}
							duration={5}
						/>
					</span>
					<p className='text-xs lg:text-lg text-center font-semibold md:font-bold text-white'>
						HAPPY CHILDREN
					</p>
				</div>

				<div className="hidden md:block">
					<span className='flex text-orange-400 font-bold text-sm md:text-3xl items-center justify-center '>
						<RiHandCoinFill fontSize={50} />
						<CountUp
							end={5082}
							duration={5}
						/>
					</span>
					<p className='text-xs lg:text-lg text-center font-semibold md:font-bold text-white'>
						VOLUNTEERING HELPERS
					</p>
				</div>

				<div  className="hidden md:block">
					<span className='flex text-orange-400 font-bold text-sm md:text-3xl items-center justify-center'>
						<RiBook2Fill fontSize={50} />
						<CountUp
							end={47895}
							duration={5}
						/>
					</span>
					<p className='text-xs lg:text-lg text-center font-bold text-white'>
						EDUCATED CHILDREN
					</p>
				</div>
			</div>
		</div>
	);
}

export default SmallCounterBanner;
