

const Banner = () => {
    return (
        <div >
            <div className="h-[80vh] mx-auto relative mb-10">
                <div className="">
                    <img className="h-[80vh] w-full mx-auto absolute  " src={"https://i.ibb.co/5spTgJY/beauty-Banner.png"} alt="" />
                    <div className="absolute inset-0 bg-white opacity-10"></div>

                    <div className=" relative flex justify-left pl-10 items-center pt-40 text-white text-left">
                        <div >
                            <h1 className="mb-5 text-5xl font-bold">Elevate Your Glow <br /> Where Elegance Meets Glamour.</h1>
                            <p className="mb-5">Discover Your Radiance at Beauty World Beauty Emporium! <br /> Elevate Your Glow with Luxurious Cosmetics, Skincare, and Fragrances. <br /> Unleash Your Inner Beauty and Confidence.</p>
                            <button className="btn bg-[#C2A973] text-white px-8 border-white rounded-none">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
