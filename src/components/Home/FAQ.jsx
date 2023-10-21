
import faqPic from '../../assets/undraw_Questions_re_1fy7.png'
const FAQ = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={faqPic} className="max-w-sm w-1/2 md:w-full rounded-lg shadow-2xl" />
                    {/* FAQ */}
                    <div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                Are the products on your website genuine and brand new?
                            </div>
                            <div className="collapse-content">
                                <p>Absolutely. We only sell brand-new, genuine, and authentic products from reputable manufacturers.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What if I have a technical issue with my purchased item?
                            </div>
                            <div className="collapse-content">
                                <p>If you encounter any technical issues with your purchased item, please contact our [Customer Support](link to customer support) team. They will assist you in troubleshooting and, if necessary, guide you through the warranty process.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What payment methods do you accept?
                            </div>
                            <div className="collapse-content">
                                <p>We accept major credit cards, including Visa, MasterCard, and American Express, as well as PayPal for your convenience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;