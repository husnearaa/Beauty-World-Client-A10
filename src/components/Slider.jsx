

const Slider = () => {
    return (
        <div>
             <div>
              <div className="carousel h-[90vh] mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/V3Y2F2m/wedding-2784455-1280.jpg'} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={"https://i.ibb.co/VVQsbBC/sunset-698501-1280.jpg" }className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={"https://i.ibb.co/nnd6n28/beautiful-wedding-walk-nature-ukraine-sumy.jpg"} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={"https://i.ibb.co/TcTXxby/young-muslim-bride-groom-wedding-photos-1.jpg"} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* cards */}
          
        </div>
        </div>
    );
};

export default Slider;