import React from 'react';
import { Calendar, MapPin, Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Book Your Next <span className="text-orange-500">Adventure</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover and book amazing events happening around you. From concerts to sports, we've got you covered.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center border rounded-lg p-3">
                <Search className="h-5 w-5 text-orange-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-3">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-3">
                <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                <input
                  type="text"
                  placeholder="Date"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Find Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}