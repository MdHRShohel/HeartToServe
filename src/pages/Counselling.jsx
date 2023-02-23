import Loader from "@/component/Shared/Loader";
import { useQuery } from "@tanstack/react-query";

function Counselling() {
  const { data: consults = [], isLoading } = useQuery({
    queryKey: ["consults"],
    queryFn: async () => {
      const res = await fetch(
        "https://heart-to-serve-server.vercel.app/counseling"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div className="my-12 p-2 md:p-0 lg:px-4">
      <div
        className="flex items-center justify-center md:h-[500px] h-[210px] mb-12 container mx-auto"
        style={{
          background:
            "linear-gradient(#00000099, #24232338), url(https://i.ibb.co/5rP5gwz/counseling.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <h1 className=" text-white text-center font-bold text-2xl sm:text-5xl">
          Take Advise Make Life Easy
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 gap-8">
          {consults?.map((consult) => (
            <div className="md:flex  gap-3 bg-gray-50 hover:-translate-y-1 duration-500 ">
              <div className="w-full md:w-[290px] ">
                <img src={consult.img} className="h-56 w-full" alt="" />
              </div>

              <div className="p-2 max-w-[410px] lg:max-w-[480px] xl:max-w-[350px]">
                <h1 className="text-xl font-bold leading-5 my-3 text-[#303030]">
                  {consult.name}
                </h1>

                <p className="mb-4 text-gray-700 text-sm leading-7">
                  {consult.description}
                </p>
                <button className=" items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 ">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counselling;
