
import { useLoaderData, useParams } from 'react-router-dom';
import Slider from '../../components/Slider';
import SingleBrand from '../../components/SingleBrand/SingleBrand';

const BrandDetails = () => {


    const   brandData = useLoaderData()
    console.log(brandData);

    const {brand} = useParams()
    console.log(brand);

    const filterData = brandData?.filter(data => data?.brand === brand)
    console.log(filterData);


    return (
        <div>
            <Slider></Slider>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    filterData.length? 
                    filterData?.map(eachBrand => <SingleBrand key={eachBrand._id} eachBrand={eachBrand}></SingleBrand>)
                    : <div> <h1 className='text-4xl'> No product available </h1> <p> new product coming soon..</p> </div>
                }
            </div>

        </div>
    );
};

export default BrandDetails;