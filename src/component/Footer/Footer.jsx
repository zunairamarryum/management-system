import React from 'react'
import {
    FaFacebookF,
    FaPinterestP,
    FaGoogle,
    FaTwitter,
    FaGithub,
    FaWindows,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1E293B] text-white py-10">
            <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Byway Branding */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-blue-500 rounded-full" />
                        <span className="text-lg font-semibold">Byway</span>
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
                        <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                        <FaPinterestP className="hover:text-red-400 cursor-pointer" />
                        <FaGoogle className="hover:text-red-500 cursor-pointer" />
                        <FaTwitter className="hover:text-blue-300 cursor-pointer" />
                        <FaGithub className="hover:text-gray-400 cursor-pointer" />
                        <FaWindows className="hover:text-blue-500 cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer