import React from 'react';

// Hero Images
import image1 from './../../public/images/image1.png';
import graduate from './../../public/images/graduate.png'
import image2 from './../../public/images/image2.png';
import guy from './../../public/images/guy.png'
import image3 from './../../public/images/image3.png';
import Ellipse1 from './../../public/images/Ellipse1.png';
import Ellipse2 from './../../public/images/Ellipse2.png';
import Ellipse3 from './../../public/images/Ellipse3.png';
import Ellipse4 from './../../public/images/Ellipse4.png';
import Ellipse5 from './../../public/images/Ellipse5.png';
import category1 from './../../public/images/Rectangle 1080.png';
import category2 from './../../public/images/Rectangle 1136.png';
import johndoe from './../../public/images/john doe.png';
import image10 from './../../public/images/image 10.png';
import GP143 from './../../public/images/Group 143.png';

// Icons
import { IoTelescopeOutline } from "react-icons/io5";
import { GoCodeSquare } from "react-icons/go";
import { LuBriefcase, LuAtom } from "react-icons/lu";
import { HiArrowNarrowRight } from "react-icons/hi";

/* ---------- Shared Components ---------- */

const Category = ({ icon, name, courses }) => (
  <div className="flex flex-col items-center justify-center p-5 bg-white rounded-xl hover:shadow-md transition text-center">
    <div className="bg-blue-200 text-blue-500 p-4 rounded-full mb-4">{icon}</div>
    <p className="text-base font-bold text-gray-800">{name}</p>
    <p className="text-sm text-gray-500">{courses}</p>
  </div>
);

const ArrowBtn = ({ direction }) => {
  const isLeft = direction === 'left';
  return (
    <button className="p-2 bg-gray-500 rounded hover:bg-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isLeft ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
        />
      </svg>
    </button>
  );
};

/* ---------------- Hero ----------------- */

const Hero = () => {
  return (
    <div className="w-full bg-white pt-10">
      {/* Hero Top Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Unlock Your Potential <br /> with Byway
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0 text-base sm:text-lg">
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we’re
            here to guide you on your journey to success.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded text-sm sm:text-base">
            Start your instructor journey
          </button>
        </div>

        {/* Image Content */}
<div className="flex-1 relative flex items-center justify-center mt-10 md:mt-0">
  <div className="relative w-[360px] sm:w-[440px] aspect-square">

    {/* dotted accent near graduate */}
    <div
      className="absolute top-24 left-4 w-24 h-16 opacity-50"
      style={{
        backgroundImage: 'radial-gradient(#cfe3ff 1.5px, transparent 1.5px)',
        backgroundSize: '10px 10px'
      }}
    />

   {/* ========== Graduate (top-left) ========== */}
<div className="absolute top-12 left-2">
  <div className="relative">
    {/* light-gray half ring at the bottom */}
    <div
      className="absolute bottom-[-8px] left-0 w-full h-16 rounded-t-full border-2 border-gray-200"
      style={{
        clipPath:
          'polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%, 15% 80%, 70% 80%, 70% 20%, 0% 20%)'
      }}
    />
    {/* colored red circle */}
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#F55757] flex items-end justify-center shadow">
      {/* Image centered inside the circle */}
      <img
        src={image1}
        alt="Graduate"
        className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover"
      />
    </div>
  </div>
</div>

{/* ========== Guy (top-right) ========== */}
<div className="absolute -top-3 right-1">
  <div className="relative">
{/* light-gray half ring */}
        <div
          className="absolute -inset-5 rounded-full border-2 border-gray-200"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 0%, 100% 100%, 45% 100%, 45% 80%, 90% 80%, 90% 20%, 50% 20%)'
          }}
        />
    {/* colored blue circle */}
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#5AA7FF] flex items-end justify-center shadow">
      {/* Image centered inside the circle */}
      <img
        src={image2}
        alt="Guy"
        className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover"
      />
    </div>
  </div>
</div>

{/* ========== Girl (bottom-right) ========== */}
<div className="absolute bottom-2 right-4">
  <div className="relative">
{/* light-gray half ring */}
        <div
          className="absolute -inset-5 rounded-full border-2 border-gray-200"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 0%, 100% 100%, 45% 100%, 45% 80%, 90% 80%, 90% 20%, 50% 20%)'
          }}
        />
    {/* colored yellow circle */}
    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#F9C32E] flex items-end justify-center shadow">
      {/* Image centered inside the circle */}
      <img
        src={image3}
        alt="Girl"
        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover"
      />
    </div>
  </div>
</div>


    {/* ===== Students Popup (attached & centered text) ===== */}
    <div className="absolute bottom-8 left-16 sm:left-20 bg-white shadow-lg rounded-xl px-4 py-3 z-40">
      {/* avatars row with overlap */}
      <div className="flex items-center justify-center -space-x-2 mb-2">
        {[Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Student"
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
          />
        ))}
      </div>
      {/* centered text below */}
      <p className="text-xs sm:text-sm text-gray-700 text-center leading-tight font-bold">
        Join our community of <br className="hidden sm:block" /> 1200+ Students
      </p>
    </div>
  </div>
</div>

      </div> {/* ← close hero row */}

      {/* Stats Section */}
      <div className="bg-gray-50 mt-16 py-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-6 px-4 sm:px-6">
          <div className="flex flex-col items-center pr-4">
            <div className="flex flex-col items-center pr-4 border-r-4 border-gray-300">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{250}+</p>
              <p className="text-gray-600 text-sm">Courses by our best mentors</p>
            </div>
          </div>
          <div className="flex flex-col items-center pr-4 border-r-4 border-gray-300">
            <p className="text-xl sm:text-2xl font-bold text-gray-900">{1000}+</p>
            <p className="text-gray-600 text-sm">Courses by our best mentors</p>
          </div>
          <div className="flex flex-col items-center pr-4 border-r-4 border-gray-300">
            <p className="text-xl sm:text-2xl font-bold text-gray-900">{15}+</p>
            <p className="text-gray-600 text-sm">Courses by our best mentors</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl sm:text-2xl font-bold text-gray-900">{2400}+</p>
            <p className="text-gray-600 text-sm">Courses by our best mentors</p>
          </div>
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Top Categories</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
            See All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Category icon={<IoTelescopeOutline />} name="Astrology" courses="11 Courses" />
          <Category icon={<GoCodeSquare />} name="Development" courses="12 Courses" />
          <Category icon={<LuBriefcase />} name="Marketing" courses="12 Courses" />
          <Category icon={<LuAtom />} name="Physics" courses="14 Courses" />
        </div>
      </div>

      {/* Top Courses Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-12 mb-16">
        <div className="flex items-center justify-between mb-6 mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Top Courses</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
            See All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img src={category1} alt="Course" className="w-full h-40 object-cover" />
              <div className="p-4 space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  Beginner's Guide to Design
                </h3>
                <p className="text-xs text-gray-500">By Ronald Richards</p>
                <div className="flex items-center text-yellow-500 text-sm">
                  {'★'.repeat(5)}{' '}
                  <span className="ml-2 text-gray-500 text-xs">(1200 Ratings)</span>
                </div>
                <p className="text-xs text-gray-600">
                  22 Total Hours. 155 Lectures. Beginner
                </p>
                <p className="text-blue-600 font-semibold text-base mt-1">$149.9</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Instructors Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Top Instructors</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
            See All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 border-solid p-4">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="w-[212px] h-[281px] p-4 rounded-[16px] border border-[#E2E8F0] shadow-[0px_0px_8px_0px_#3B82F61F] bg-white flex flex-col items-center justify-center gap-4 transition"
            >
              <img
                src={category2}
                alt="Instructor"
                className="w-full h-[160px] object-cover rounded-xl mb-4"
              />
              <h3 className="text-sm text-gray-800 font-bold text-center">Ronald Richards</h3>
              <p className="text-xs text-gray-500 text-center">UI/UX Designer</p>
              <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                <span>★</span>
                <span className="text-gray-800 font-semibold">4.9</span>
              </div>
              <p className="text-xs text-gray-500 text-center">2400 Students</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-16 bg-gray-50 w-[1440px] h-[512px] gap-16">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            What Our Customer Say <br className="hidden sm:block" /> About Us
          </h2>
          <div className="flex text-white gap-2">
            <ArrowBtn direction="left" />
            <ArrowBtn direction="right" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-0 flex-1 bg-white rounded-xl p-6 shadow-sm"
            >
              <div
                className="text-blue-600"
                style={{
                  width: '35.6619987487793px',
                  height: '27.354000091552734px',
                  top: '9.65px',
                  left: '6px',
                  fontSize: '2.25rem',
                  fontWeight: '800',
                  marginBottom: '0.5rem'
                }}
              >
                “
              </div>
              <p className="text-sm text-black w-[384px] h-[104px] mb-4 leading-relaxed">
                “Byway’s tech courses are top-notch! As someone who's always looking to
                stay ahead in the rapidly evolving tech world, I appreciate the
                up-to-date content and engaging multimedia.”
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={johndoe}
                  alt="Jane Doe"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-900">Jane Doe</p>
                  <p className="text-xs text-gray-500">Designer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section1: Become an Instructor */}
      <div className="max-w-[1123px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 gap-[60px] mt-16">
        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <img
            src={image10}
            alt="Transform"
            className="w-[400px] h-[425px] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Become an Instructor
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0 text-base sm:text-lg">
            Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.
          </p>
          <button className="bg-gray-950 text-white font-medium px-6 py-3 rounded text-sm sm:text-base flex items-center justify-center gap-2">
            Start Your Instructor Journey
            <HiArrowNarrowRight className="text-white flex" />
          </button>
        </div>
      </div>

      {/* Section2: Transform your life through education */}
      <div className="max-w-[1123px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 gap-[60px] mt-16 py-12 rounded-lg">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Transform Your Life Through Education
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0 text-base sm:text-lg">
            Learners around the world are launching new careers, advancing in their fields, and enriching their lives.
          </p>
          <button className="bg-gray-950 text-white font-medium px-6 py-3 rounded text-sm sm:text-base flex items-center justify-center gap-2">
            Checkout Courses
            <HiArrowNarrowRight className="text-white flex" />
          </button>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <img src={GP143} alt="Transform" className="max-w-xs sm:max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
