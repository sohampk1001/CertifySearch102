import React, { useState, useEffect, useRef } from 'react';
import { Search, X, History } from 'lucide-react';

const SearchBar = ({ onSearch, initialValue = '', history = [], onHistoryClick, onClearHistory }) => {
  const [query, setQuery] = useState(initialValue);
  const [showHistory, setShowHistory] = useState(false);
  const historyRef = useRef(null);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (historyRef.current && !historyRef.current.contains(event.target)) {
        setShowHistory(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setShowHistory(false);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50">
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-12 py-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-full shadow-sm hover:shadow-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-lg"
          placeholder="Search certifications (e.g., Google, AWS, Cisco...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowHistory(true)}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-12 flex items-center pr-3 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </form>

      {showHistory && history.length > 0 && (
        <div 
          ref={historyRef}
          className="absolute mt-2 w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex justify-between items-center px-4 py-2 bg-gray-50 dark:bg-slate-800/50 text-xs font-medium text-gray-500 dark:text-slate-400">
            <span>RECENT SEARCHES</span>
            <button 
              onClick={onClearHistory}
              className="hover:text-red-500 transition-colors"
            >
              Clear All
            </button>
          </div>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    onHistoryClick(item);
                    setShowHistory(false);
                  }}
                  className="w-full px-4 py-3 flex items-center text-left hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <History className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-gray-700 dark:text-slate-200">{item}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
