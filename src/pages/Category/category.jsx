import React from 'react';

const courses = [
  {
    title: "Beginner's Guide to Design",
    instructor: 'By Ronald Richards',
    rating: 4.8,
    totalHours: 22,
    lectures: 155,
    price: '$149.9',
  },
  {
    title: "Advanced Design Concepts",
    instructor: 'By Sarah Lee',
    rating: 4.7,
    totalHours: 30,
    lectures: 200,
    price: '$199.9',
  },
  {
    title: "UI/UX Design for Beginners",
    instructor: 'By John Smith',
    rating: 4.9,
    totalHours: 18,
    lectures: 120,
    price: '$129.9',
  },
  {
    title: "Mastering Graphic Design",
    instructor: 'By Lisa Adams',
    rating: 4.6,
    totalHours: 25,
    lectures: 180,
    price: '$179.9',
  },
  {
    title: "Product Design for Professionals",
    instructor: 'By Michael Johnson',
    rating: 4.5,
    totalHours: 35,
    lectures: 240,
    price: '$249.9',
  },
  {
    title: "Illustration Basics",
    instructor: 'By Emma Clark',
    rating: 4.7,
    totalHours: 15,
    lectures: 110,
    price: '$99.9',
  },
  {
    title: "Web Design Techniques",
    instructor: 'By Brian Taylor',
    rating: 4.9,
    totalHours: 40,
    lectures: 300,
    price: '$229.9',
  },
  {
    title: "Innovation",
    instructor: 'By Jennifer Davis',
    rating: 4.8,
    totalHours: 28,
    lectures: 210,
    price: '$199.9',
  },
  {
    title: "Typography Design",
    instructor: 'By David Wilson',
    rating: 4.7,
    totalHours: 18,
    lectures: 130,
    price: '$149.9',
  }
]

function CategoryPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
          <header className="text-center">
            <h1 className="text-3xl font-semibold">Design Courses</h1>
            <p className="text-xl text-gray-600">All Development Courses</p>
          </header>
        </div>

        {/* Right Section (Course Grid) */}
        <div className="flex-3">
          <main>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-lg rounded-lg p-6"
                  style={{
                    width: '100%', 
                    maxWidth: '298px',
                    height: 'auto',
                    gap: '8px',
                    borderRadius: '16px',
                    borderWidth: '1px',
                    padding: '16px',
                  }}
                >
                  {/* Display the image */}
                  <img
                    src="/images/Rectangle 1080.png"
                    alt="course"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-gray-600">{course.instructor}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-500">{course.rating}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    {course.totalHours} Total Hours | {course.lectures} Lectures
                  </p>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
