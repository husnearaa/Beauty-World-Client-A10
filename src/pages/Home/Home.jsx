

import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/MultiBrand/Brands";
import ThemeVideo from "../../components/BrandTheme/ThemeVideo";
import ClientReview from "../../components/ClientReview/ClientReview";
import AskedQuestions from "../AskedQuestions/AskedQuestions";




const Home = ({darkMood}) => {

  const brandsName =useLoaderData()
  console.log(brandsName);

    return (
        <div className={`${darkMood ? "bg-gray-900 text-white " : "bg-white"}`}>
            <Banner></Banner>
            <Brands brandsName={brandsName}></Brands>
            <ThemeVideo></ThemeVideo>
            <ClientReview></ClientReview>
            <AskedQuestions></AskedQuestions>
        </div>
    );
};

export default Home;