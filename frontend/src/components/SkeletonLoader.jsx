import React from 'react';

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {[...Array(count)].map((_, idx) => (
        <div 
          key={idx} 
          className="p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm space-y-4"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-200 dark:bg-slate-800 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-200 dark:bg-slate-800 rounded-full"></div>
            </div>
            <div className="h-8 w-8 bg-gray-200 dark:bg-slate-800 rounded-full"></div>
          </div>
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-slate-800 rounded-lg"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-slate-800 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 dark:bg-slate-800 rounded"></div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <div className="h-4 w-4 bg-gray-200 dark:bg-slate-800 rounded-full"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-slate-800 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
