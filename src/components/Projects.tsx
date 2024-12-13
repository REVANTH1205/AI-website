import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Algorithm Visualizer',
    description: 'Interactive platform for visualizing sorting and pathfinding algorithms. Built with React and TypeScript.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400',
    tech: ['React', 'TypeScript', 'Algorithms'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Smart Task Manager',
    description: 'AI-powered task management system with priority scheduling and deadline optimization.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400',
    tech: ['Python', 'Machine Learning', 'Flask'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Distributed Cache System',
    description: 'Implemented a distributed caching system with consistency protocols and fault tolerance.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
    tech: ['Java', 'Redis', 'System Design'],
    github: 'https://github.com',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-600 hover:text-blue-600">
                    <Github className="w-5 h-5 mr-1" /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="flex items-center text-gray-600 hover:text-blue-600">
                      <ExternalLink className="w-5 h-5 mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}