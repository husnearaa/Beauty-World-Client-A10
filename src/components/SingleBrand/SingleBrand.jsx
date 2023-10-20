import { Rating } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const SingleBrand = ({ eachBrand }) => {

    const { _id, brand, type, name, price, rating, description, image } = eachBrand 

    return (
        <div>

            <div className="relative flex w-full max-w-[26rem] flex-col shadow-xl bg-white bg-clip-border text-black">
                <div className="relative mx-4 mt-4 overflow-hidden">
                    <img
                        src={image}
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <h5 className="block  text-xl text-black  font-medium ">
                            {name}
                        </h5>
                     
                        <Rating value={parseInt(rating)} />

                    </div>
                    <h5 className="block text-xl font-bold">
                        {brand}
                    </h5>
                    <h5 className="block text-xl font-bold">
                        {type}
                    </h5>
                    <h5 className="block text-xl font-bold">
                        {price}
                    </h5>
                    <h5 className="block text-xl font-bold">
                        {description}
                    </h5>

                </div>
                <div className="p-6 pt-3">

                <Link to={`/products/${_id}`}>
                <button
                        className="block w-full mb-5 rounded py-3.5 px-7 text-center text-white align-middle bg-[#C2A973]"
                    >
                        Details
                    </button>
                </Link>
                    <Link to={`/update/${_id}`}>
                    <button
                        className="block w-full  rounded py-3.5 px-7 text-center text-white align-middle bg-[#C2A973]"
                    >
                        Update
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBrand;