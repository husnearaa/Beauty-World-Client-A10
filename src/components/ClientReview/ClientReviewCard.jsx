

const ClientReviewCard = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold py-10 text-center mt-15"> What Client Say</h2>
            <div className="flex justify-around items-center ">
                <div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mb-10 mt-20">
                        <div className="mb-6 p-0">
                            <p className="block text-base leading-relaxed text-inherit antialiased">
                                I can't express how grateful we are for the incredible wedding planning services provided by XYZ Weddings.
                                From start to finish, they went above and beyond to make our special day absolutely perfect.
                                Their attention to detail, creativity, and professionalism are unmatched.
                                Emily and her team turned our dreams into reality, and we couldn't be happier with the results.
                                Our guests are still raving about how smoothly everything went.
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
                                We were blown away by the talent and dedication of PQR Photography & Videography at our wedding.
                                They went above and beyond to capture every detail and emotion of our special day.
                                The quality of their work is outstanding, and the final photos and videos exceeded our expectations.
                                The team's professionalism and creativity shine through in their work.
                                We are grateful for the beautiful memories they've created for us.
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