

const AskedQuestions = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-10">Frequently Asked <span className="text-[#C2A973]">Questions</span></h2>
            <div className="flex justify-center items-center py-20">
                <div className="join join-vertical w-4/5">
                    <div className="collapse collapse-arrow join-item border border-black">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        What is the best L'Oréal product for achieving a flawless complexion?
                        </div>
                        <div className="collapse-content">
                            <p> L'Oréal's Infallible Pro-Matte Foundation is a top choice for a matte, long-lasting finish that covers imperfections.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-black">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Are L'Oréal products cruelty-free?
                        </div>
                        <div className="collapse-content">
                            <p> L'Oréal has a range of cruelty-free products under their "L'Oréal Paris" line. Look for the Leaping Bunny logo for certified cruelty-free items.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-black">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Which Estée Lauder product is best for reducing signs of aging?
                        </div>
                        <div className="collapse-content">
                            <p>The Estée Lauder Advanced Night Repair serum is renowned for its ability to reduce fine lines and improve skin texture.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-black">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Does Estée Lauder offer products suitable for sensitive skin?
                        </div>
                        <div className="collapse-content">
                            <p>Estée Lauder's "Resilience Multi-Effect" line includes products designed for sensitive skin, focusing on hydration and firmness.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-black">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What is the signature fragrance of Chanel?
                        </div>
                        <div className="collapse-content">
                            <p>Chanel No. 5 is the iconic fragrance that continues to be a symbol of timeless elegance and luxury.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-black">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Which Dior mascara provides the most volume and length to lashes?
                        </div>
                        <div className="collapse-content">
                            <p>Dior's Diorshow Mascara is renowned for its ability to add both volume and length to your lashes.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-black">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What is the best-selling Urban Decay eyeshadow palette?
                        </div>
                        <div className="collapse-content">
                            <p>Urban Decay's Naked Palette series, such as the Naked3 Palette, is extremely popular for versatile and flattering eyeshadow shades.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-black">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Are Revlon hair care products suitable for all hair types?
                        </div>
                        <div className="collapse-content">
                            <p>Revlon offers a wide range of hair care products suitable for different hair types, including shampoos, conditioners, and styling products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskedQuestions;
