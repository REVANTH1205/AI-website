import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl">DevStudent</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
            </a>
            <a href="mailto:student@example.com">
              <Mail className="w-5 h-5 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}