

const AddProduct = () => {
    return (
        <div>
            <div className="mt-10 mb-10">
                <div className="bg-[#C2A973] p-24 mx-auto w-4/5">
                    <h2 className="text-4xl font-extrabold text-center text-black pb-5">Add Product</h2>
                    <p className="text-center text-black font-medium text-lg mb-10">
                        Elevate your beauty game by adding cosmetics from L'Oréal,
                        Estée Lauder, Chanel, Dior, Urban Decay, and Revlon.
                        Share your favorites and inspire beauty enthusiasts worldwide.
                    </p>
                    <form>
                        {/* form name and brand name */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Name</span>
                                </label>
                                <label className="">
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered border-black rounded-sm  w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Brand Name</span>
                                </label>
                                <label className="">
                                    <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered border-black rounded-sm  w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form type and price */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Type</span>
                                </label>
                                <label className="">
                                    <input type="text" name="type" placeholder="Type" className="input input-bordered border-black rounded-sm  w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Price</span>
                                </label>
                                <label className="">
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered border-black rounded-sm  w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form description and rating row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Short Description</span>
                                </label>
                                <label className="">
                                    <input type="text" name="description" placeholder="Description" className="input input-bordered border-black rounded-sm  w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Rating</span>
                                </label>
                                <label className="">
                                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered border-black rounded-sm  w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form Image url  and buttion row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Image URL</span>
                                </label>
                                <label className="">
                                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered border-black rounded-sm  w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Add Coffee" className="btn bg-black text-white border-2 border-white rounded-sm  w-full " />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;