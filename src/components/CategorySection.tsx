import React from 'react';
import { Music, Theater, Ticket, Camera, Mic, PartyPopper } from 'lucide-react';

export function CategorySection() {
  const categories = [
    { icon: <Music className="h-8 w-8" />, name: "Concerts", count: "2,345" },
    { icon: <Theater className="h-8 w-8" />, name: "Theater", count: "1,129" },
    { icon: <PartyPopper className="h-8 w-8" />, name: "Sports", count: "890" },
    { icon: <Camera className="h-8 w-8" />, name: "Exhibitions", count: "567" },
    { icon: <Mic className="h-8 w-8" />, name: "Stand-up", count: "234" },
    { icon: <Ticket className="h-8 w-8" />, name: "Festivals", count: "456" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Browse by Category</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Discover events that match your interests</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-orange-50 rounded-xl p-6 flex flex-col items-center transition-all duration-300 group-hover:bg-orange-500 group-hover:transform group-hover:-translate-y-2">
                <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-white">{category.name}</h3>
                <p className="mt-2 text-orange-500 group-hover:text-white">{category.count} events</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}