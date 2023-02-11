import { BsFillCheckCircleFill } from "react-icons/bs";

export default () => {
  return (
    <div className='container mx-auto'>
      <div>
        <div
          className='w-full md:h-[550px] h-[300px]'
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
      <div className='flex gap-4 m-10 lg:flex-row flex-col'>
        <div className='lg:w-[50%]'>
          <h1 className='sm:text-5xl uppercase font-semibold'>Requirements</h1>
          <div className='text-[0.9rem]'>
            <p className='pt-4'>
              Time is our most precious resource. So if you are considering
              volunteering, but wondering if it’s worth your time and effort,
              it’s important to remember that even though you won’t be earning a
              wage, the skills you gain are priceless
            </p>
            <div className=' mt-4 md:flex gap-8'>
              <div>
                <ul className='flex flex-col gap-5'>
                  <li className='flex items-center gap-2'>
                    <BsFillCheckCircleFill className='text-xl' /> Positive
                    attitude
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsFillCheckCircleFill className='text-xl' /> Time
                    management
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsFillCheckCircleFill className='text-xl' /> Willingness to
                    help
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsFillCheckCircleFill className='text-xl' /> Strong work
                    ethic
                  </li>
                </ul>
              </div>

              <div className='md:p-0 pt-3'>
                <ul className='flex flex-col gap-5'>
                  <li className='flex items-center gap-2'>
                    <BsFillCheckCircleFill className='text-xl' /> Compassion
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsFillCheckCircleFill className='text-xl ' /> Leadership
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsFillCheckCircleFill className='text-xl' /> Be 18 years or
                    older
                  </li>
                  <li className='flex items-center gap-2'>
                    <BsFillCheckCircleFill className='text-xl' /> Sign an oath
                    of confidentiality
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#ffe2da] lg:w-[50%]'>
          <div class='flex items-center justify-center p-10'>
            <div class='mx-auto w-full'>
              <h1 className='uppercase font-bold sm:text-5xl'>JOIN US NOW</h1>
              <form action='#'>
                <div class='mb-5'>
                  <label
                    for='name'
                    class='mb-2 mt-2 block text-base font-medium text-[#c2513b]'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Full Name'
                    className='w-full rounded-md border-transparent border-2 border-b-[#F36A4F] bg-transparent py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='mb-5'>
                  <label
                    for='email'
                    class='mb-1 block text-base font-medium text-[#c2513b]'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='example@domain.com'
                    className='w-full rounded-md border-transparent border-2 border-b-[#F36A4F] bg-transparent py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='mb-5'>
                  <label
                    for='address'
                    class='mb-3 block text-base font-medium text-[#c2513b]'>
                    Address
                  </label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    placeholder='167/1/B/1 Dhaka..'
                    className='w-full rounded-md border-transparent border-2 border-b-[#F36A4F] bg-transparent py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='mb-5'>
                  <label
                    for='bloodGroup'
                    class='mb-3 block text-base font-medium text-[#c2513b]'>
                    Blood Group
                  </label>
                  <div className='flex sm:flex-row flex-col gap-4'>
                    <div className='flex gap-2'>
                      <input type='checkbox' />
                      <label className='label' value='A+'>
                        <span className='label-text text-base font-medium text-[#07074D]'>
                          A+
                        </span>
                      </label>
                    </div>
                    <div className='flex gap-2'>
                      <input type='checkbox' />
                      <label className='label' value='B+'>
                        <span className='label-text text-base font-medium text-[#07074D]'>
                          B+
                        </span>
                      </label>
                    </div>
                    <div className='flex gap-2'>
                      <input type='checkbox' />
                      <label className='label' value='AB+'>
                        <span className='label-text text-base font-medium text-[#07074D]'>
                          AB+
                        </span>
                      </label>
                    </div>
                    <div className='flex gap-2'>
                      <input type='checkbox' />
                      <label className='label' value='O+'>
                        <span className='label-text text-base font-medium text-[#07074D]'>
                          O+
                        </span>
                      </label>
                    </div>
                    <div className='flex gap-2'>
                      <input type='checkbox' />
                      <label className='label' value='O-'>
                        <span className='label-text text-base font-medium text-[#07074D]'>
                          O-
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <button class='hover:shadow-form rounded-md border-transparent border-2 border-b-[#c2513b] text-[#c2513b] py-3 px-8 text-base font-semibold outline-none'>
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
