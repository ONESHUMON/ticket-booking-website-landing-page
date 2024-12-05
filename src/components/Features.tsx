import React from 'react';
import { Shield, Zap, Clock, Gift } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Secure Booking",
      description: "Your transactions are protected with bank-level security"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Instant Confirmation",
      description: "Get your tickets delivered to your email instantly"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "24/7 Support",
      description: "Our customer service team is always here to help"
    },
    {
      icon: <Gift className="h-8 w-8 text-orange-500" />,
      title: "Exclusive Deals",
      description: "Access to special offers and early bird tickets"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose <span className="text-orange-500">TicketHub</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}