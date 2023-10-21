

const ClientReviewCard = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold py-10 text-center mt-15"> What Client <span className="text-[#C2A973]">Say</span></h2>
            <div className="flex justify-around items-center ">
                <div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mb-10 mt-20">
                        <div className="mb-6 p-0">
                            <p className="block text-base leading-relaxed text-inherit antialiased">
                                I can't get enough of Chanel's lipstick.
                                 'Passion' is my go-to red shade, and it's so easy to apply. 
                                It glides on smoothly and lasts through meals and drinks. 
                                Definitely a must-have for special occasions.
                            </p>
                        </div>
                        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img
                                src={"https://i.ibb.co/LSvBwMt/pic-2.png"}
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block text-xl font-semibold">
                                    Emila Watson
                                    </h5>
                                </div>
                                <p className="block text-base">
                                    Teacher, Cambrian College
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mb-10 mt-20">
                        <div className="mb-6 p-0">
                            <p className="block  text-base  leading-relaxed text-inherit antialiased">
                            The Urban Decay Naked3 Eyeshadow Palette is a game-changer. 
                            The rosy shades are perfect for my hazel eyes, and the pigmentation is fantastic. 
                            It's my daily go-to for creating both subtle and dramatic eye looks.
                            </p>
                        </div>
                        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img
                                src= {"https://i.ibb.co/TW06zV1/pic-1.png"}
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block text-xl font-semibold">
                                    Eliza Jhonson
                                    </h5>
                                </div>
                                <p className="block text-base">
                                    Wev Developer, TechWorld
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReviewCard;