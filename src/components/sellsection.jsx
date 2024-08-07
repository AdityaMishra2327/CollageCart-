import React from 'react';

import sellimg from '../Images/sellimg.webp';

const SellSection = () => {
    return (
        <div id="sell-section" className="py-12 bg-white text-center h-max">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold mb-5 text-slate-900">Sell Your Items</h2>
                <div className="image bg-white p-5">
                    <img
                        src={sellimg}

                        alt="Sell your items"
                        className="w-96 rounded-lg mx-auto"
                    />
                </div>
                <p className="leading-relaxed text-lg mb-5 text-slate-900 max-lg:text-sm">
                    Selling on CollegeCart is simple and free. Just create a listing, upload photos, set your price, and connect with buyers directly. It's a great way to declutter, earn some extra money, and help other students find what they need.
                </p>
                <p className="leading-relaxed text-lg mb-5 text-slate-900 max-lg:text-sm" >
                    Ready to get started? Click the button below to create your first listing and start selling today!
                </p>
                <a href="#sell" className="inline-block px-5 py-2 text-lg text-white bg-slate-900 rounded hover:opacity-80 transition-all duration-200">
                    Start Selling
                </a>
            </div>
        </div>
    );
};

export default SellSection;
