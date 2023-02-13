import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../../asset/a.png";

function Footer() {
	const state = useSelector((state) => state.formData);
	return (
		<div className='bg-[#020202eb] text-white '>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-start p-12 justify-center'>
				<div className=''>
					<Link href={"/"} className="flex mb-4 md:mb-0 items-center">
            <Image className="w-[60px]" src={logo} alt="" />
            <p className="uppercase leading-4 ml-1">
              Heart <br /> To <br /> Serve
            </p>
          </Link>
				</div>
				<div className='mb-5'>
					<h2 className='text-lg font-bold mb-3'>Company</h2>
					<h2>About Us</h2>
					<h2>Blog</h2>
					<h2>Contact Us</h2>
					<h2>Privacy Policy</h2>
				</div>
				<div className='mb-5'>
					<h2 className='text-lg font-bold mb-3'>Get Connected</h2>
					<h2>Community</h2>
					<h2>Forum</h2>
					<h2>Support</h2>
					<h2>Projects</h2>
				</div>
				<div className='mb-5'>
					<h2 className='text-lg font-bold mb-3'>Social Links</h2>
					<div className='flex gap-3 text-2xl cursor-pointer'>
						<FaFacebook className='hover:text-gray-300' />
						<FaLinkedin className='hover:text-gray-300' />
						<FaInstagram className='hover:text-gray-300' />
						<FaTwitter className='hover:text-gray-300' />
					</div>
				</div>
				<div className='mb-5'>
					<h2 className='text-lg font-bold mb-3'>Subscribe Our NewsLetter</h2>
					<div className='mb-5'>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='example@domain.com'
							className='w-full  border-transparent border-2 border-b-[#F36A4F] bg-transparent py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-[#6A64F1] focus:shadow-md'
							defaultValue={state?.email}
						/>
					</div>
					<button className='hover:shadow-form bg-[#c2513b] text-white py-3 px-8 text-base font-semibold outline-none'>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
}

export default Footer;
