import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const getEventColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-600';
      case 'education':
        return 'bg-green-600';
      case 'award':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="relative container mx-auto px-6 py-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`mb-8 flex justify-between items-center w-full ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="w-5/12" />
          <div className="z-20">
            <div className={`flex items-center justify-center w-6 h-6 ${getEventColor(event.type)} rounded-full`}>
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div className="w-5/12">
            <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-200">
              <span className="font-bold text-blue-600">{event.year}</span>
              <h3 className="text-lg font-bold mb-1">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.organization}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;