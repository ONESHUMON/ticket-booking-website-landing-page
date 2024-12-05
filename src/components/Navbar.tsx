import React from 'react';
import { Ticket, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Ticket className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-orange-500">TicketHub</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-gray-600 hover:text-orange-500">Events</a>
            <a href="#features" className="text-gray-600 hover:text-orange-500">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-orange-500">Pricing</a>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Book Now
            </button>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}