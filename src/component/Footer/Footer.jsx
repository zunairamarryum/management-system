import React from 'react'
import logoimage from './../../././../public/images/logo image.png'
import ftIcon from './../../../public/images/ft icon.png'

const Footer = () => {
    return (
        <footer className="bg-[#1E293B] w-full h-auto text-white py-10">
            <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Byway Branding */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src={logoimage} alt="logo image" className="w-[111px] h-[40px]" />
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                        Empowering learners through accessible and engaging online education.
                    </p>
                    <p className="text-sm text-gray-300">
                        Byway is a leading online learning platform dedicated to providing high-quality, flexible,
                        and affordable educational experiences.
                    </p>
                </div>

                {/* Get Help */}
                <div>
                    <h3 className="text-base font-semibold mb-3">Get Help</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Latest Articles</a></li>
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h3 className="text-base font-semibold mb-3">Programs</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:underline">Art & Design</a></li>
                        <li><a href="#" className="hover:underline">Business</a></li>
                        <li><a href="#" className="hover:underline">IT & Software</a></li>
                        <li><a href="#" className="hover:underline">Languages</a></li>
                        <li><a href="#" className="hover:underline">Programming</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-base font-semibold mb-3">Contact Us</h3>
                    <p className="text-sm text-gray-300">Address: 123 Main Street, Anytown, CA 12345</p>
                    <p className="text-sm text-gray-300 mt-1">Tel: +1 (123) 456-7890</p>
                    <p className="text-sm text-gray-300 mt-1">Mail: bywayedu@website.in</p>
                    <div className="flex gap-3 mt-4 text-xl text-white">
                        <img src={ftIcon} alt="Icon" className="w-[296px] h-[40px]" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer