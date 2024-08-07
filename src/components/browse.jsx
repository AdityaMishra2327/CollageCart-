import React from "react";

import book from '../Images/Books.jpeg';

const BrowseCat = () => {
    return (
        <div id="browse" className="py-5  h-screen">
            <h1 className="text-center py-5 text-2xl font-bold">Browse Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center px-5 py-5">
                <div className=" w-64 mx-auto">

                    <img
                        src={book}
                        alt="Books"
                        className="w-full h-64 object-cover rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
                    />

                    <h3 className="py-2 text-lg font-semibold">Books</h3>
                </div>
                <div className=" w-64 mx-auto">

                    <img
                        src={book}
                        alt="Books"
                        className="w-full h-64 object-cover rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
                    />

                    <h3 className="py-2 text-lg font-semibold">Books</h3>
                </div>
                <div className=" w-64 mx-auto">

                    <img
                        src={book}
                        alt="Books"
                        className="w-full h-64 object-cover rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
                    />

                    <h3 className="py-2 text-lg font-semibold">Books</h3>
                </div>
                <div className=" w-64 mx-auto">

                    <img
                        src={book}
                        alt="Books"
                        className="w-full h-64 object-cover rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
                    />

                    <h3 className="py-2 text-lg font-semibold">Books</h3>
                </div>
                <div className=" w-64 mx-auto">

                    <img
                        src={book}
                        alt="Books"
                        className="w-full h-64 object-cover rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
                    />

                    <h3 className="py-2 text-lg font-semibold">Books</h3>
                </div>
                <div className=" w-64 mx-auto">

                    <img
                        src={book}
                        alt="Books"
                        className="w-full h-64 object-cover rounded-lg transition-transform duration-200 ease-in-out hover:scale-110"
                    />

                    <h3 className="py-2 text-lg font-semibold">Books</h3>
                </div>

            </div>
        </div>
    );
};

export default BrowseCat;
