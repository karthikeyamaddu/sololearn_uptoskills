import React, { useState, useMemo } from 'react';
import { Brain, Code, BookOpen, Globe, Database, Layout } from 'lucide-react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const topCourses = [
    { title: "Python", icon: <Brain className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-200" /> },
    { title: "Java", icon: <Code className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-200" /> },
    { title: "C", icon: <BookOpen className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-200" />},
    { title: "C++", icon: <Globe className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-200" />},
    { title: "SQL", icon: <Database className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-200" />},
    { title: "HTML", icon: <Layout className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-200" /> },
  ];

  const languages = ["Python", "HTML", "Java", "C++", "SQL", "C"];

  const filteredCourses = useMemo(() => {
    return searchQuery
      ? topCourses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()))
      : topCourses;
  }, [searchQuery]);

  const handleLanguageClick = (language) => {
    setSearchQuery(language);
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Top-Rated Courses Section */}
        <h2 className="text-3xl font-bold text-black mb-6">Top-Rated Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Link key={index} to="/SignIn">
              <button
                className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.students} students</p>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>

        {/* Popular Languages Section */}
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Popular Languages</h2>
        <div className="flex flex-wrap gap-3">
          {languages.map((language, index) => (
            <button
              key={index}
              onClick={() => handleLanguageClick(language)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ease-in-out transform hover:scale-105 ${
                searchQuery === language
                  ? 'bg-blue-600 text-white'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
