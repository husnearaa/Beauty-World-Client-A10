

const AskedQuestions = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-10">Frequently Asked Questions</h2>
            <div className="flex justify-center items-center py-20">
                <div className="join join-vertical w-4/5">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        What are the key services offered by a wedding planner?
                        </div>
                        <div className="collapse-content">
                            <p>Wedding planners provide services such as vendor selection, budget management, timeline creation, and day-of coordination.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Why should I hire a wedding planner?
                        </div>
                        <div className="collapse-content">
                            <p>Hiring a wedding planner can reduce stress, save time, and ensure your wedding day runs smoothly.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How soon should I book a photographer/videographer for my wedding?
                        </div>
                        <div className="collapse-content">
                            <p>It's recommended to book a photographer/videographer at least 6-12 months in advance to secure your preferred professional.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What's the difference between photography and videography packages?
                        </div>
                        <div className="collapse-content">
                            <p>Photography captures still moments, while videography records the entire day in motion. Many couples choose both for a complete memory.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How can I choose the right floral and decor theme for my wedding?
                        </div>
                        <div className="collapse-content">
                            <p>Consider your wedding colors, style, and budget. Consult with a professional florist and decorator for expert guidance.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        When should I schedule my hair and makeup trial?
                        </div>
                        <div className="collapse-content">
                            <p>Schedule your trial 2-3 months before your wedding to ensure you're comfortable with your chosen look.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How can I accommodate dietary restrictions for my guests?
                        </div>
                        <div className="collapse-content">
                            <p>Work with your caterer to offer a variety of menu options, including vegetarian, vegan, gluten-free, and allergy-friendly choices.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What types of entertainment are popular for weddings?
                        </div>
                        <div className="collapse-content">
                            <p>Popular choices include live bands, DJs, magicians, photo booths, and even fireworks for a memorable celebration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskedQuestions;
