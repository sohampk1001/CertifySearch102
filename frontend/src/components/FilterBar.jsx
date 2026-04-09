import React from 'react';
import { Filter, Layers, CheckCircle2, DollarSign, Briefcase } from 'lucide-react';

const FilterBar = ({ activeFilters, onFilterToggle }) => {
  const filters = [
    { id: 'FREE', label: 'Free Only', icon: <CheckCircle2 className="w-4 h-4 mr-2" /> },
    { id: 'PAID', label: 'Paid Only', icon: <DollarSign className="w-4 h-4 mr-2" /> },
    { id: 'OFFICIAL', label: 'Official Sources', icon: <Briefcase className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
      <div className="flex items-center text-sm font-medium text-gray-500 dark:text-slate-400 mr-2 whitespace-nowrap">
        <Filter className="w-4 h-4 mr-2" />
        Filter by:
      </div>
      {filters.map((filter) => (
        <button
            key={filter.id}
            onClick={() => onFilterToggle(filter.id)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${
              activeFilters.includes(filter.id)
                ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20'
                : 'bg-background text-foreground border-border hover:border-primary'
            }`}
          >
          {filter.icon}
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
