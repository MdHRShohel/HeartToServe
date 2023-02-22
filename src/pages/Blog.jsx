import Loader from "@/component/Shared/Loader";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
    const {data: blogs=[], isLoading}=useQuery({
        queryKey:['blogs'],
        queryFn: async ()=>{
            const res= await fetch("Blogs.json")
            const data= await res.json()
            return data

        }
    })
    if(isLoading){
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader/>
            </div>
        )
    }
    return (
        <div className="container mx-auto my-16 text-justify p-4 md:p-0 lg:p-0 xl:p-4">
            {
                blogs.map(blog=>(
                    <div className="mb-6">
                       <div className="lg:grid lg:grid-cols-12 gap-4">
                       <div className="lg:col-span-4">
                            <img className="w-full h-full" src={blog.img} alt="" />
                        </div>
                        <div className="lg:col-span-8">
                            <h1 className="text-2xl md:text-4xl font-semibold py-2">{blog.title}</h1>
                            <p className="pb-2 font-semibold">Date: {blog.date}</p>
                            <p className="text-lg leading-7 lg:hidden xl:block">{blog.descOne}</p>
                            <p className="text-lg leading-7 hidden lg:block xl:hidden">{blog.descOne.slice(0,200)}</p>
                        </div>
                       </div>


                       <div className="">
                        <p className="text-lg leading-7 mt-3">{blog.descTwo}</p>
                       </div>
                    </div>
                ))
            }
            
        </div>
    );
};

export default Blog;