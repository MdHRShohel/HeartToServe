import { RiH2 } from "react-icons/ri";
import { FadeLoader } from "react-spinners";

function Loader() {
    return (
        <div className="flex items-center justify-center">
            <FadeLoader color="#36d7b7" />
        </div>
    );
}

export default Loader;