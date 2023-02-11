import { MdBloodtype } from "react-icons/md";
import { HiEmojiHappy } from "react-icons/hi";
import { RiHandCoinFill, RiBook2Fill } from "react-icons/ri";

function SmallCounterBanner() {
	return (
		<div className='mx-auto container'>
			<div
				className='px-16 py-8 flex justify-between items-center'
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
					height: "200px",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
				}}>
				<div>
					<span className='flex text-orange-400 font-bold text-3xl items-center'>
						<MdBloodtype fontSize={50} />
						<p>15875</p>
					</span>
					<p className='text-lg text-center font-bold text-white items-center'>
						DONATIONS MADE
					</p>
				</div>
				<div>
					<span className='flex text-orange-400 font-bold text-3xl items-center'>
						<HiEmojiHappy fontSize={50} />
						<p>65842</p>
					</span>
					<p className='text-lg text-center font-bold text-white'>
						HAPPY CHILDREN
					</p>
				</div>
				<div>
					<span className='flex text-orange-400 font-bold text-3xl items-center'>
						<RiHandCoinFill fontSize={50} />
						<p>5482</p>
					</span>
					<p className='text-lg text-center font-bold text-white'>
						VOLUNTEERING HELPERS
					</p>
				</div>
				<div>
					<span className='flex text-orange-400 font-bold text-3xl items-center'>
						<RiBook2Fill fontSize={50} />
						<p>47895</p>
					</span>
					<p className='text-lg text-center font-bold text-white'>
						EDUCATED CHILDREN
					</p>
				</div>
			</div>
		</div>
	);
}

export default SmallCounterBanner;
