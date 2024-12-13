import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const skills = {
  'Programming Languages': ['Python', 'Java', 'JavaScript/TypeScript', 'C++'],
  'Web Technologies': ['React', 'Node.js', 'HTML/CSS', 'REST APIs'],
  'Computer Science': ['Data Structures', 'Algorithms', 'System Design', 'Object-Oriented Programming'],
  'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Linux'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}