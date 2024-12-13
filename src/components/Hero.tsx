import React from 'react';
import { ArrowRight, Code2, Database, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-6 ring-4 ring-white shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alex Chen
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Computer Science Student & Aspiring Software Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full flex items-center">
              <Code2 className="w-4 h-4 mr-2" /> Full-Stack Development
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full flex items-center">
              <Database className="w-4 h-4 mr-2" /> Data Structures
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full flex items-center">
              <Globe className="w-4 h-4 mr-2" /> Algorithms
            </span>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center"
          >
            Get in touch <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}