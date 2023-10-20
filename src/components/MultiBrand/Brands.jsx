import BrandsCard from "./BrandsCard";

const Brands = ({brandsName}) => {
    console.log(brandsName);
    return (
        <div className="py-10 mt-10  text-center">
            <h1 className="text-5xl font-bold mb-8 ">Discover Our Brands</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    brandsName?.map(brand => <BrandsCard key={brand.id} brand={brand}></BrandsCard>)
                }
            </div>
        </div>
    );
};

export default Brands;