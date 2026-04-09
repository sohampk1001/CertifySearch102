import React from 'react';
import { Search, Bookmark, Menu, Award, Info, Home } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ bookmarkCount }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4 mr-2" />, href: '#home' },
    { id: 'search', label: 'Search', icon: <Search className="w-4 h-4 mr-2" />, href: '#search-section' },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4 mr-2" />, href: '#about' },
    { id: 'bookmarks', label: `Saved (${bookmarkCount})`, icon: <Bookmark className="w-4 h-4 mr-2" />, href: '#bookmarks' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Certify<span className="text-primary">Search</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex items-center px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary transition-all"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-4"></div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Menu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
