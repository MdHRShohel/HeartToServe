export default () => {
    return (
      <div>
        <div className="relative">
          <img
            className='h-[300px] w-full relative after:bg-black '
            width={1280}
            height={300}
            src='https://i.ibb.co/sg1jBQ3/become-a-volunter.jpg'
            alt='volunter'
          />
          <h1 className="uppercase font-bold absolute top-28 left-[30%] text-white text-4xl">BECOme a Volunter</h1>
        </div>
        <div className='container mx-auto flex gap-2'>
          <div>requirements</div>
          <div className='bg-[#ffe2da]'>Form</div>
        </div>
      </div>
    );
}