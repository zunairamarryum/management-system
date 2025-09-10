import React from 'react';

// Hero Images
import personImg from './../../public/images/image 9.png';
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
import { PiCertificateBold } from "react-icons/pi";


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
  // numbers for the gauge
  const completion = 87.6;
  const radius = 38;
  const circumference = Math.PI * radius;
  const progress = (completion / 100) * circumference;

  // avatars (from your imported Ellipse1..5)
  const [E1, E2, E3, E4, E5] = [Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5];

  return (
    <div className="w-full bg-white pt-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 gap-10">
        {/* ===== Left text ===== */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Unlock Your Potential <br /> with Byway
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0 text-base sm:text-lg">
            Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we’re here to guide you on your journey to success.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded text-sm sm:text-base">
            Start your instructor journey
          </button>
        </div>

        {/* ===== Right side (exact like image) ===== */}
        <div className="flex-1 relative mt-10 md:mt-0 md:flex md:justify-end">
          <div className="relative w-[640px] h-[520px]">

            {/* Blue panel */}
            <div
              className="absolute bg-[#93C5FD] rounded-[24px] overflow-hidden"
              style={{ width: 470, height: 430, top: 70, left: 90 }}
            >
              {/* dotted grid half outside (right) */}
              <div
                className="absolute rounded-lg pointer-events-none"
                style={{
                  width: 140,
                  height: 180,
                  right: -70,
                  top: '58%',
                  transform: 'translateY(-50%)',
                  backgroundImage: 'radial-gradient(#cfe3ff 2px, transparent 2px)',
                  backgroundSize: '12px 12px',
                  opacity: 1,
                }}
              />
            </div>

            {/* Person */}
            <img
              src={personImg ?? "/person.png"}
              alt="Instructor"
              className="absolute object-cover"
              style={{ width: 360, height: 470, left: 150, top: 30, borderRadius: 18 }}
            />

            {/* == Card base class */}
            {/* border #E5E7EB, radius 12, subtle shadow like figma */}
            {/* Add this utility once in your file if you prefer: */}
            {/* className="rounded-xl bg-white border border-gray-200 shadow-[0_6px_24px_rgba(16,24,40,0.06)]" */}

            {/* Community card (top-left) */}
            <div
              className="absolute rounded-xl bg-white border border-gray-200 shadow-[0_6px_24px_rgba(16,24,40,0.06)]"
              style={{ width: 200, height: 121, top: 30, left: 40, padding: 16 }}
            >
              <div className="flex items-center -space-x-2 mb-2">
                {[Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-8 w-8 rounded-full" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-tight">
                <span className="font-semibold">Join our community</span> of <br /> 1200+ Students
              </p>
            </div>

            {/* Gauge card (top-right) */}
            <div
              className="absolute rounded-xl bg-white border border-gray-200 shadow-[0_6px_24px_rgba(16,24,40,0.06)] text-center"
              style={{ width: 200, height: 160, top: 0, right: 10, padding: '12px 16px' }}
            >
              <div className="mx-auto w-[140px] h-[80px] relative">
                <svg width="150" height="100" viewBox="0 0 140 80" className="overflow-visible">
                  {/* track */}
                  <path d="M 20 70 A 50 50 0 0 1 120 70" fill="none" stroke="#E5E7EB" strokeWidth="12" strokeLinecap="round" />
                  {/* progress (87.6%) */}
                  <path
                    d="M 20 70 A 50 50 0 0 1 120 70"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${Math.PI * 50 * 0.876} ${Math.PI * 50}`}
                  />
                </svg>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-3 h-3 rounded-full bg-[#2563EB]" />
              </div>
              <p className="text-2xl font-bold leading-none mt-1">87.6%</p>
              <p className="text-xs text-gray-500 mt-1">Completion rate of our courses</p>
            </div>

            {/* Courses sold card (bottom-left) — EXACT props */}
            <div
              className="absolute rounded-xl bg-white border border-gray-200 shadow-[0_6px_24px_rgba(16,24,40,0.06)] flex items-center gap-3"
              style={{ width: 236, height: 121, left: 40, bottom: 20, padding: 16 }}
            >
              <div className="w-9 h-9 rounded-full bg-blue-600 grid place-items-center">
                <PiCertificateBold className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <p className="text-xs text-gray-500">Number of courses sold</p>
                <p className="text-base font-bold text-black">100,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      < div className="bg-gray-50 mt-50 py-10" >
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
      </div >


      {/* Top Categories Section */}
      < div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-10" >
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
      </div >

      {/* Top Courses Section */}
      < div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-12 mb-16" >
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
      </div >

      {/* Top Instructors Section */}
      < div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-12" >
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
      </div >

      {/* Testimonials Section */}
      < div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-16 bg-gray-50 w-[1440px] h-[512px] gap-16" >
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
      </div >

      {/* Section1: Become an Instructor */}
      < div className="max-w-[1123px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 gap-[60px] mt-16" >
        {/* Image Content */}
        < div className="flex-1 flex justify-center items-center mt-10 md:mt-0" >
          <img
            src={image10}
            alt="Transform"
            className="w-[400px] h-[425px] object-cover"
          />
        </div >

        {/* Text Content */}
        < div className="flex-1 text-center md:text-left" >
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
        </div >
      </div >

      {/* Section2: Transform your life through education */}
      < div className="max-w-[1123px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 gap-[60px] mt-16 py-12 rounded-lg" >
        {/* Text Content */}
        < div className="flex-1 text-center md:text-left px-6" >
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
        </div >

        {/* Image Content */}
        < div className="flex-1 flex justify-center items-center mt-10 md:mt-0" >
          <img src={GP143} alt="Transform" className="max-w-xs sm:max-w-md" />
        </div >
      </div >
    </div >
  );
};

export default Hero;
