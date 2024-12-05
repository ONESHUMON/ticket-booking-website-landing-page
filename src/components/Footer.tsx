import React from 'react';
import { Ticket, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Ticket className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-orange-500">TicketHub</span>
            </div>
            <p className="text-gray-400">Your trusted platform for booking event tickets worldwide.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Concerts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Sports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Theater</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Festivals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TicketHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}