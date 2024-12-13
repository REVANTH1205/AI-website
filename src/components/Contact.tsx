import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <Mail className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-center">student@example.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <Phone className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 text-center">(123) 456-7890</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <MapPin className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600 text-center">San Francisco, CA</p>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}