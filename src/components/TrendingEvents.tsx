import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function TrendingEvents() {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
      title: "Rock Music Festival 2024",
      date: "Aug 20-22, 2024",
      location: "Sunset Arena",
      attendees: "15K+",
      price: "$149",
      category: "Music",
      tags: ["rock", "live music", "festival"]
    },
    {
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      title: "Broadway Musical Night",
      date: "July 30, 2024",
      location: "Grand Theater",
      attendees: "5K+",
      price: "$89",
      category: "Theater",
      tags: ["musical", "broadway", "theater"]
    },
    {
      image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80",
      title: "UEFA Champions League Final",
      date: "June 15, 2024",
      location: "Olympic Stadium",
      attendees: "80K+",
      price: "$299",
      category: "Sports",
      tags: ["football", "sports", "championship"]
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      title: "Food & Wine Festival",
      date: "Sept 5-7, 2024",
      location: "City Gardens",
      attendees: "10K+",
      price: "$79",
      category: "Festival",
      tags: ["food", "wine", "culinary"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending This Week</h2>
            <p className="text-xl text-gray-600">Don't miss out on these hot tickets</p>
          </div>
          <button className="text-orange-500 font-semibold hover:text-orange-600">View All Events →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    {event.attendees} attending
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">{event.price}</span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}