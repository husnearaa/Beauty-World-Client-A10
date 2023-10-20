import BrandsCard from "./BrandsCard";

const Brands = ({brandsName}) => {
    console.log(brandsName);
    return (
        <div className="py-10 mt-10  text-center">
            <h1 className="text-5xl font-bold mb-8 text-black ">Discover Our <span className="text-[#C2A973]">Brands</span></h1>
            <p className="text-lg font-semibold pb-10 border-b-2 border-[#C2A973]">Experience beauty at its best with our top six brands - L'Oréal, Estée Lauder, Chanel, Dior, Urban Decay, <br /> and Revlon. Uncover your signature look with iconic names in cosmetics</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-10'>
                {
                    brandsName?.map(brand => <BrandsCard key={brand.id} brand={brand}></BrandsCard>)
                }
            </div>
        </div>
    );
};

export default Brands;