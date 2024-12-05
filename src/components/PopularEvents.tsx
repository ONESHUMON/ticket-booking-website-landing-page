import React from 'react';
import { Star } from 'lucide-react';

export function PopularEvents() {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80",
      title: "Summer Music Festival",
      date: "July 15-17, 2024",
      location: "Central Park",
      price: "$99"
    },
    {
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
      title: "Stand-up Comedy Night",
      date: "June 25, 2024",
      location: "Comedy Club",
      price: "$45"
    },
    {
      image: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=800&q=80",
      title: "Basketball Championship",
      date: "August 5, 2024",
      location: "Sports Arena",
      price: "$75"
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Popular Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <span className="text-orange-500 font-bold">{event.price}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Star className="h-4 w-4 text-orange-500 mr-1" />
                  <Star className="h-4 w-4 text-orange-500 mr-1" />
                  <Star className="h-4 w-4 text-orange-500 mr-1" />
                  <Star className="h-4 w-4 text-orange-500 mr-1" />
                  <Star className="h-4 w-4 text-orange-500" />
                </div>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}