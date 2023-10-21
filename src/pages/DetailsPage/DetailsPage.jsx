import { Rating } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const DetailsPage = () => {

    const detailsData = useLoaderData()
    console.log(detailsData);

    const { brand, type, name, rating, description, image } = detailsData


    const addHandleCart = () => {
        fetch("https://beauty-world-server.vercel.app/addToCart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(detailsData),
        })
            .then((res) => res.json())
            .then((data) => {

                swal("Successfully Added!", "Successfully added to the cart", "success");

            })
            .catch(error => {
                return swal("Warning", "This item is already in your Cart", "warning");
            })
            ;

    }




    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h4 className="pb-10 mb-15 md:text-3xl text-2xl font-semibold text-center">
                    {name}
                </h4>
                <div className="flex w-full max-w-[48rem] md:flex-row flex-col  bg-white bg-clip-border shadow-md">
                    <div className="m-0 w-2/5 shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border ">
                        <img
                            src={image}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {brand}
                        </p>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {type}
                        </p>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {description}
                        </p>
                        <Rating value={parseInt(rating)} />
                        <a className="p-6 pt-3" href="#">
                            <button
                                onClick={addHandleCart}
                                className="block w-full select-none rounded-lg bg-[#C2A973] py-3.5 px-7
                                      text-center align-middle  text-sm font-bold  text-white  "
                            >
                                Add to Cart
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;