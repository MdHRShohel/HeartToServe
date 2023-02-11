import { MdBloodtype } from "react-icons/md";

function SmallCounterBanner() {
	return (
		<div className='container mx-auto w-10/12'>
			<div
				className='blur-3xl px-16 py-8 flex justify-between items-center'
				style={{
					backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
					height: "200px",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
					filter: "brightness(50%)",
				}}>
				<div>
					<span className='flex text-orange-400'>
						<MdBloodtype />
						<p>15875</p>
					</span>
					<p>DONATIONS MADE</p>
				</div>
				<div>Hello</div>
				<div>Hello</div>
				<div>Hello</div>
			</div>
		</div>
	);
}

export default SmallCounterBanner;
