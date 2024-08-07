import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-white py-10 text-center ">
      <div className="container mx-auto max-w-5xl">
        <div className="footer-columns flex flex-wrap justify-between">
          <div className="footer-column flex-1 min-w-[250px] p-5">
            <h3 className="mb-4 text-xl font-bold text-slate-100">About CollegeCart</h3>
            <p className="text-base mb-3">
              CollegeCart is your go-to marketplace for buying and selling items within your college community. Our mission is to make campus life easier and more affordable for students everywhere.
            </p>
          </div>
          <div className="footer-column flex-1 min-w-[250px] p-5">
            <h3 className="mb-4 text-xl">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#home" className="text-white no-underline text-base hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white no-underline text-base hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#sell" className="text-white no-underline text-base hover:underline">
                  Sell
                </a>
              </li>
              <li className="mb-2">
                <a href="#browse" className="text-white no-underline text-base hover:underline">
                  Browse
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white no-underline text-base hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column flex-1 min-w-[250px] p-5">
            <h3 className="mb-4 text-xl">Contact Us</h3>
            <p className="text-base mb-3">Email: support@collegecart.com</p>
            <p className="text-base mb-3">Phone: (123) 456-7890</p>
           
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-5 border-t border-slate-900 pt-3">
        <p className="text-sm text-gray-300">&copy; 2024 CollegeCart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
