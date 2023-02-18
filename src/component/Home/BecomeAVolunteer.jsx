import { addToForm } from "@/redux/actions/formActions";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import BecomeVolunteerDrawer from "../Others/BecomeVolunteerDrawer";
import { motion as m } from "framer-motion";

export default () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state) => state.formData);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const bloodGroup = form.bloodGroup.value;

    const formValue = {
      name,
      email,
      address,
      bloodGroup,
    };
    dispatch(addToForm(formValue));
    form.reset();
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='container px-3 md:px-0 my-12' id='volunteer'>
      <m.div
        initial={{ x: "-100%", scale: 1, rotate: 0 }}
        whileInView={{
          x: "0%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className='flex items-center justify-center md:h-[500px] h-[300px]'
        style={{
          background:
            "linear-gradient(#00000099, #24232338), url(https://i.ibb.co/4MrS1DZ/pexels-rodnae-productions-6646894-1.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}>
        <h1 className=' text-white text-center font-bold text-2xl sm:text-5xl'>
          Become a Volunteer
        </h1>
      </m.div>
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
                  <m.li
                    initial={{ x: "-100%", scale: 1, rotate: 0 }}
                    whileInView={{
                      x: "0%",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                    className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Positive attitude
                  </m.li>
                  <m.li
                    initial={{ x: "-100%", y: 0, scale: 1, rotate: 0 }}
                    whileInView={{
                      x: "0%",
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Time management
                  </m.li>
                  <m.li
                    initial={{ x: "-100%", y: 0, scale: 1, rotate: 0 }}
                    whileInView={{
                      x: "0%",
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Willingness to help
                  </m.li>
                  <m.li
                    initial={{ x: "-100%", y: 0, scale: 1, rotate: 0 }}
                    whileInView={{
                      x: "0%",
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Strong work ethic
                  </m.li>
                </ul>
              </div>

              <div className='md:p-0 pt-3'>
                <ul className='flex flex-col gap-5'>
                  <m.li
                    initial={{ x: "-90%", scale: 1, rotate: 0 }}
                    whileInView={{
                      x: "0%",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                    className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Compassion
                  </m.li>
                  <m.li
                    initial={{ x: "-80%", scale: 1, rotate: 0 }}
                    whileInView={{
                      x: "0%",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm ' /> Leadership
                  </m.li>
                  <m.li
                    initial={{ x: "-80%", scale: 1, rotate: 0 }}
                    whileInView={{
                      x: "0%",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Be 18 years or older
                  </m.li>
                  <m.li
                    initial={{ x: "-80%", scale: 1, rotate: 0 }}
                    whileInView={{
                      x: "0%",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    className='flex items-center gap-2'>
                    <BsCheckLg className='text-sm' /> Sign an oath of
                    confidentiality
                  </m.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <m.div
          initial={{ scale: 0.2 }}
          whileInView={{
            scale: 1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className='bg-[#ffe2da] lg:w-[50%] w-full lg:mt-0 mt-6'>
          <div className='flex items-center justify-center sm:p-10 p-4'>
            <div className='mx-auto w-full'>
              {/* <h1 className='uppercase font-bold sm:text-5xl'>JOIN US NOW</h1> */}
              <form action='#' onSubmit={handleFormSubmit}>
                <div className='mb-5'>
                  <label
                    htmlFor='name'
                    className='mb-2 mt-2 block text-base font-semibold text-[#c2513b]'>
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
                <div className='mb-5'>
                  <label
                    htmlFor='email'
                    className='mb-1 block text-base font-semibold text-[#c2513b]'>
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
                <div className='mb-5'>
                  <label
                    htmlFor='address'
                    className='mb-3 block text-base font-semibold text-[#c2513b]'>
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
                <div className='mb-5'>
                  <label
                    htmlFor='bloodGroup'
                    className='mb-3 block text-base font-semibold text-[#c2513b]'>
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
                  <button
                    type='submit'
                    className='hover:shadow-form bg-[#c2513b] text-white py-3 px-8 text-base font-semibold outline-none'
                    onClick={toggleDrawer}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </m.div>
      </div>
      {state?.name === "" &&
      state?.email === "" &&
      state?.address === "" &&
      state?.bloodGroup === "" ? (
        toast.error("Please Fill Your Details")
      ) : (
        <BecomeVolunteerDrawer
          toggleDrawer={toggleDrawer}
          isOpen={isOpen}
          state={state}></BecomeVolunteerDrawer>
      )}
    </div>
  );
};
