import { BsFillCheckCircleFill } from "react-icons/bs";

export default () => {
  return (
    <div className='container mx-auto'>
      <div>
        <div
          className='max-w-full'
          style={{
            background:
              "linear-gradient(rgb(255 226 218 / 16%), rgb(255 226 218 / 21%)), url(https://i.ibb.co/4MrS1DZ/pexels-rodnae-productions-6646894-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "550px",
            width: "100%",
          }}>
          <div className='flex justify-center items-center h-[550px]'>
            <h1 className='uppercase font-bold  text-white text-6xl'>
              Become a Volunter
            </h1>
          </div>
        </div>
      </div>
      <div className='flex gap-4 m-10'>
        <div className='w-[50%]'>
          <h1 className='text-5xl uppercase font-semibold'>Requirements</h1>
          <div className='text-[0.9rem]'>
            <p className='pt-4'>
              Time is our most precious resource. So if you are considering
              volunteering, but wondering if it’s worth your time and effort,
              it’s important to remember that even though you won’t be earning a
              wage, the skills you gain are priceless
            </p>
            <ul>
              <li className="flex items-center gap-4">
                <BsFillCheckCircleFill className="text-xl" /> Hardwork
              </li>
              <li>Hardwork</li>
              <li>Hardwork</li>
              <li>Hardwork</li>
              <li>Hardwork</li>
              <li>Hardwork</li>
            </ul>
          </div>
        </div>
        <div className='bg-[#ffe2da] w-[50%]'>Form</div>
      </div>
    </div>
  );
};
