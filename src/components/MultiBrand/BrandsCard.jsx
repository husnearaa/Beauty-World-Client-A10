import { Link } from "react-router-dom";

const BrandsCard = ({brand}) => {

    const { id, brand_name, brand_image  } = brand || {}
 
    return (
        <div className="pt-10">
           <Link to={`/brands/${brand_name}`}>
           <div className=" flex w-full max-w-[26rem] flex-col bg-white bg-clip-border  shadow">
                <img src={brand_image} />
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block  text-left text-xl font-medium ">
                            {brand_name}
                        </h5>
                    </div> 
                </div>    
            </div>
           </Link>
        </div>
    );
};

export default BrandsCard;