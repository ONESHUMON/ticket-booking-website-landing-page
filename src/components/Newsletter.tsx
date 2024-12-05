import React from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-20 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Never Miss an Event
            </h2>
            <p className="text-xl text-orange-100">
              Subscribe to our newsletter and stay updated with the latest events
            </p>
          </div>
          
          <div className="w-full md:w-96">
            <div className="bg-white rounded-lg p-2 flex">
              <div className="flex items-center px-3">
                <Mail className="h-5 w-5 text-orange-500" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-orange-100 text-sm mt-2">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}