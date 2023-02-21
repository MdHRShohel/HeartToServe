import { RiH2 } from "react-icons/ri";
import { FadeLoader } from "react-spinners";

function Loader() {
    return (
        <div className="flex items-center justify-center h-screen">
            <FadeLoader color="#36d7b7" />
        </div>
    );
}

export default Loader;