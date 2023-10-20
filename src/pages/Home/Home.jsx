

import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/MultiBrand/Brands";
import ThemeVideo from "../../components/BrandTheme/ThemeVideo";




const Home = () => {

  const brandsName =useLoaderData()
  console.log(brandsName);

    return (
        <div>
            <Banner></Banner>
            <Brands brandsName={brandsName}></Brands>
            <ThemeVideo></ThemeVideo>
        </div>
    );
};

export default Home;