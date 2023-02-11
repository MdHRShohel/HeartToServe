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
        <div className='flex gap-2'>
          <div>Requirements</div>
          <div className='bg-[#ffe2da]'>Form</div>
        </div>
      </div>
    );
}