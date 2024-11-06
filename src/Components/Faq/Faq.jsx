import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className='flex justify-center bg-[#9538E2] py-10'>
                <div className='text-center  mt-5 py-5 w-7/12'>
                    <h1 className='text-5xl font-bold text-white '>Frequently Asked Questions.</h1>
                    <p className='mx-auto text-gray-200 m-4'>FAQ (Frequently Asked Questions) is a section that provides quick answers to common questions, helping users find information easily and reducing the need for customer support.</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center gap-2 mt-8 w-11/12'>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Q: What is the warranty on gadgets?</div>
                        <div className="collapse-content">
                            <p>A: Most gadgets come with a one-year warranty covering manufacturing defects. Warranty details for each product are available on the product page.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Q: How can I track my order?</div>
                        <div className="collapse-content">
                            <p>A: You can track your order using the tracking number sent in your order confirmation email. Visit the carrier's website for real-time updates.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Q: Do you offer international shipping?</div>
                        <div className="collapse-content">
                            <p>A: Yes, we offer international shipping. Shipping costs and delivery times depend on your location. Check our shipping policy for more details.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Q: Can I return a gadget if I don’t like it?</div>
                        <div className="collapse-content">
                            <p>A: Yes, we accept returns within 30 days of purchase, provided the product is unused and in its original packaging. Please review our return policy for further instructions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Q: Are there discounts for bulk orders?</div>
                        <div className="collapse-content">
                            <p>A: Yes, we offer bulk order discounts. Please reach out to our customer support team for pricing and further details on bulk orders.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Q: Do you offer technical support?</div>
                        <div className="collapse-content">
                            <p>A: Yes, we offer 24/7 technical support for troubleshooting and guidance. You can contact us through email, phone, or our live chat option on the website.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Q: Are there any financing options?</div>
                        <div className="collapse-content">
                            <p>A: Yes, we provide financing options through trusted payment providers. Check the payment section during checkout for available options like installment payments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;