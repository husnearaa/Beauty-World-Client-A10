


const Blog = () => {
    return (
      
        <div>
            <h2 className="text-center text-5xl font-bold py-10">Blog</h2>
            <div className=" mt-5 mb-10 relative flex max-w-[24rem] flex-col  bg-white bg-clip-border text-gray-700 shadow">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={"https://i.ibb.co/jJSswMS/cosmetic1.png"}
                    />
                </div>
                <div className="p-6">
                    <p className=" text-base ">
                        February 02, 2023
                    </p>
                    <p className=" mt-5 text-2xl font-semibold ">
                    Beauty Unveiled: Insights from Top Cosmetic Brands
                    </p>
                    <p className="mt-3 mb-4 block font-sans  font-normal leading-relaxed text-gray-700 antialiased">
                    Explore our blog page dedicated to the world of beauty and cosmetics,
                     featuring in-depth reviews, tips, and trends from the top brands in the industry.
                      Dive into the realms of L'Oréal, Estée Lauder, Chanel, Dior, Urban Decay, and Revlon, 
                      and discover the secrets to enhancing your natural beauty.
                    </p>
                    <p><a href=""><span className="text-[#ca786c] font-bold"> Read more</span></a></p>
                </div>

            </div>
        </div>
    );
};

export default Blog;