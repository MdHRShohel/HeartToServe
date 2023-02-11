export default () => {
    return (
      <div>
        <div className='relative'>
          <div className='bg-cover bg-center bg-no-repeat w-full h-[30vh] relative after:bg-black'>
            <img
              src='https://i.ibb.co/4MrS1DZ/pexels-rodnae-productions-6646894-1.jpg'
              alt='volunter'
            />
          </div>
          <h1 className='uppercase font-bold absolute top-28 left-[30%] text-white text-4xl'>
            BECOme a Volunter
          </h1>
        </div>
        <div className='container mx-auto flex gap-2'>
          <div>requirements</div>
          <div className='bg-[#ffe2da]'>Form</div>
        </div>
      </div>
    );
}