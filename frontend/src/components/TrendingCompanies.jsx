import React from 'react';
import { TrendingUp, Award } from 'lucide-react';

const TrendingCompanies = ({ onCompanyClick }) => {
  const companies = [
    { name: 'Google', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    { name: 'Microsoft', color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' },
    { name: 'AWS', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
    { name: 'Cisco', color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20' },
    { name: 'IBM', color: 'bg-blue-600/10 text-blue-700 dark:text-blue-400 border-blue-600/20' },
  ];

  return (
    <div className="max-w-2xl mx-auto w-full px-4 mt-8">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
        <TrendingUp className="w-4 h-4" />
        Trending Platforms
      </div>
      <div className="flex flex-wrap gap-3">
        {companies.map((company) => (
          <button
            key={company.name}
            onClick={() => onCompanyClick(company.name)}
            className={`px-5 py-2.5 rounded-2xl border border-border text-sm font-bold flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-muted/50 hover:bg-primary hover:text-primary-foreground`}
          >
            <Award className="w-4 h-4" />
            {company.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingCompanies;
