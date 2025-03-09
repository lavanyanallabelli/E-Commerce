import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

export const Headers = () => {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate("/women");
    }

    return (
        
            <div className=" flex justify-center space-x-6 mt-10 " >
            
                <div className="" >
                    <button className=" no-underline hover:underline hover:decoration-black-200 decoration-1 underline-offset-4 " onClick={handleChange}>
                        Women 
                    </button>
                </div>

                <div className="">
                    <Link to = "/men">
                       <button className=" no-underline hover:underline hover:decoration-black-200 decoration-1 underline-offset-4"> Men </button>
                    </Link>
                </div>

                <div className="">
                  <Link to = "/baby">
                    <button className=" no-underline hover:underline hover:decoration-black-200 decoration-1 underline-offset-4"> Baby </button>
                </Link>   
                </div>

                <div className="">
                <Link to = "/kids">
                    <button className=" no-underline hover:underline hover:decoration-black-200 decoration-1 underline-offset-4"> Kids </button>
                </Link>
                </div>

                <div className="">
                <Link to = "/home">
                    <button className=" no-underline hover:underline hover:decoration-black-200 decoration-1 underline-offset-4"> Home </button>
                    </Link>
                </div>

                <div className="">
                <Link to = "/beauty">
                    <button className=" no-underline hover:underline hover:decoration-black-200 decoration-1 underline-offset-4"> Beauty </button>
                    </Link>
                </div>
                
                {/* <div className="">
                <Link to = "/sale">
                    <button className=" no-underline hover:underline hover:decoration-black-200 decoration-1 underline-offset-4"> Sale </button>
                </Link>
                </div>
             */}

            </div>
           
       
    )
}




