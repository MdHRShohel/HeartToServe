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
            <div className=' m-3 md:flex gap-5'>
              <div>
                <ul className='flex flex-col gap-4'>
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
                <ul className='flex flex-col gap-4'>
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
        <div className='bg-[#ffe2da] lg:w-[50%]'>Form</div>
      </div>
    </div>
  );
};
