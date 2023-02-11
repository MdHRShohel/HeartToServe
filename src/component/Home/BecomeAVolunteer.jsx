import { BsCheckLg } from "react-icons/bs";

export default () => {
  return (
    <div className=''>
      <div>
        <div
          className='w-full md:h-[550px] h-[300px] '
          style={{
            background:
              "linear-gradient(rgb(255 226 218 / 16%), rgb(255 226 218 / 21%)), url(https://i.ibb.co/4MrS1DZ/pexels-rodnae-productions-6646894-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
          }}>
          <div className='flex justify-center items-center md:h-[550px] h-[300px]'>
            <h1 className='uppercase font-bold  text-white text-2xl md:text-6xl'>
              Become a Volunter
            </h1>
          </div>
        </div>
      </div>
      <div className='flex gap-4 m-10 lg:flex-row flex-col items-center container mx-auto'>
        <div className='lg:w-[50%]'>
          <h1 className='sm:text-5xl uppercase font-semibold'>Requirements</h1>
          <div className='text-[0.9rem]'>
            <p className='py-10 '>
              Time is our most precious resource. So if you are considering
              volunteering, but wondering if it’s worth your time and effort,
              it’s important to remember that even though you won’t be earning a
              wage, the skills you gain are priceless
            </p>
            <div className=' mt-4 md:flex gap-8'>
              <div>
                <ul className='flex flex-col gap-5'>
                  <li className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Positive attitude
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Time management
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Willingness to help
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Strong work ethic
                  </li>
                </ul>
              </div>

              <div className='md:p-0 pt-3'>
                <ul className='flex flex-col gap-5'>
                  <li className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Compassion
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm ' /> Leadership
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Be 18 years or older
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Sign an oath of
                    confidentiality
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#ffe2da] lg:w-[50%] w-full lg:mt-0 mt-6'>
          <div class='flex items-center justify-center sm:p-10 p-4'>
            <div class='mx-auto w-full'>
              {/* <h1 className='uppercase font-bold sm:text-5xl'>JOIN US NOW</h1> */}
              <form action='#'>
                <div class='mb-5'>
                  <label
                    htmlFor='name'
                    class='mb-2 mt-2 block text-base font-semibold text-[#c2513b]'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Full Name'
                    className='w-full  border-transparent border-2 border-b-[#F36A4F] bg-transparent py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='mb-5'>
                  <label
                    htmlFor='email'
                    class='mb-1 block text-base font-semibold text-[#c2513b]'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='example@domain.com'
                    className='w-full  border-transparent border-2 border-b-[#F36A4F] bg-transparent py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='mb-5'>
                  <label
                    htmlFor='address'
                    class='mb-3 block text-base font-semibold text-[#c2513b]'>
                    Location
                  </label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    placeholder='167/1/B/1 Dhaka..'
                    className='w-full  border-transparent border-2 border-b-[#F36A4F] bg-transparent py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='mb-5'>
                  <label
                    htmlFor='bloodGroup'
                    class='mb-3 block text-base font-semibold text-[#c2513b]'>
                    Blood Group
                  </label>
                  <input
                    type='text'
                    name='bloodGroup'
                    id='bloodGroup'
                    placeholder='A+..'
                    className='w-full  border-transparent border-2 border-b-[#F36A4F] bg-transparent py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div>
                  <button class='hover:shadow-form bg-[#c2513b] text-white py-3 px-8 text-base font-semibold outline-none'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
