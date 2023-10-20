import brandVideo from "../../assets/brandVideo.mp4";

const ThemeVideo = () => {
    return (
        <div>
            <div className="py-10 h-full w-full  ">
                <div className="overlay">
                    <video src={brandVideo} autoPlay loop muted />
                </div>
            </div>
        </div>
    );
};

export default ThemeVideo;