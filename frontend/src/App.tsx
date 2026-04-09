import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { LogoCarousel } from "./components/LogoCarousel";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";

import ResultCard from './components/ResultCard';
import FilterBar from './components/FilterBar';
import SkeletonLoader from './components/SkeletonLoader';
import useLocalStorage from './hooks/useLocalStorage';
import { Bookmark, ShieldCheck, Globe, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "./components/ui/button";

export default function App() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [lastQuery, setLastQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [history, setHistory] = useLocalStorage('search-history', []);
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', []);

  const handleSearch = async (query?: string) => {
    const q = query || searchQuery;
    if (!q) return;
    
    setLoading(true);
    setError(null);
    setLastQuery(q);

    try {
      const response = await axios.get(`/api/search?q=${encodeURIComponent(q)}`);
      const searchResults = response.data;
      setResults(searchResults);
      
      // Auto-redirect if there's exactly one perfect match
      if (searchResults.length === 1 && (
        searchResults[0].company.toLowerCase() === q.toLowerCase() ||
        searchResults[0].title.toLowerCase().includes(q.toLowerCase())
      )) {
        window.open(searchResults[0].link, '_blank');
      }
      
      setHistory((prev: string[]) => {
        const newHistory = [q, ...prev.filter(h => h !== q)].slice(0, 10);
        return newHistory;
      });

      // Scroll to results
      const resultsSection = document.getElementById('results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      setError('Failed to fetch results. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev: string[]) => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId) 
        : [...prev, filterId]
    );
  };

  const toggleBookmark = (result: any) => {
    setBookmarks((prev: any[]) => {
      const isBookmarked = prev.some(b => b.link === result.link);
      if (isBookmarked) {
        return prev.filter(b => b.link !== result.link);
      } else {
        return [...prev, result];
      }
    });
  };

  const filteredResults = useMemo(() => {
    if (activeFilters.length === 0) return results;
    return results.filter((item: any) => 
      activeFilters.every(filter => item.tags.includes(filter))
    );
  }, [results, activeFilters]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
      <Header />
      
      <main>
        <Hero 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          onSearch={handleSearch} 
        />
        
        <LogoCarousel />

        {/* Results Section Integration */}
        <section id="results" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatePresence>
              {lastQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                      <h2 className="text-4xl font-bold text-white tracking-tighter uppercase mb-4">
                        Search <span className="text-yellow-500">Intel</span>: {lastQuery}
                      </h2>
                      <FilterBar activeFilters={activeFilters} onFilterToggle={toggleFilter} />
                    </div>
                  </div>

                  {loading ? (
                    <SkeletonLoader />
                  ) : error ? (
                    <div className="text-center py-20 border border-yellow-500/20 rounded-[2rem] p-12 max-w-lg mx-auto bg-gray-900/50">
                      <p className="text-xl font-bold text-red-500 mb-4">{error}</p>
                      <Button onClick={() => handleSearch(lastQuery)} className="bg-yellow-500 text-black">Try Again</Button>
                    </div>
                  ) : filteredResults.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredResults.map((result: any) => (
                        <ResultCard
                          key={result.link}
                          result={result}
                          isBookmarked={bookmarks.some((b: any) => b.link === result.link)}
                          onBookmarkToggle={toggleBookmark}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 border border-yellow-500/20 rounded-[2rem] p-12 max-w-lg mx-auto text-gray-400 bg-gray-900/50">
                      No official portal found for "{lastQuery}". Try a major company like "Google" or "Dell".
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Stats />
        <Features />
        <HowItWorks />

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-900/30 transition-colors">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-4">About CertifySearch</h2>
              <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 rounded-[2rem] bg-black shadow-xl border border-yellow-500/10 transition-all hover:scale-105">
                <div className="w-14 h-14 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Official Sources Only</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  We only index direct links to official certification portals of industry leaders like Google, AWS, and Microsoft.
                </p>
              </div>
              
              <div className="p-8 rounded-[2rem] bg-black shadow-xl border border-yellow-500/10 transition-all hover:scale-105">
                <div className="w-14 h-14 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Global Discovery</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  Find internships, simulations, and verified skill paths from companies worldwide like Tata and Unilever.
                </p>
              </div>

              <div className="p-8 rounded-[2rem] bg-black shadow-xl border border-yellow-500/10 transition-all hover:scale-105">
                <div className="w-14 h-14 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Professional Growth</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  Tailored for students and professionals looking to level up their careers with credible certifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bookmarks Section Integration */}
        <section id="bookmarks" className="py-24 bg-gray-900/20 border-t border-yellow-500/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <Bookmark className="w-8 h-8 text-yellow-500" />
              <h2 className="text-4xl font-bold text-white tracking-tighter uppercase">My Saved Vault</h2>
            </div>
            
            {bookmarks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bookmarks.map((result: any) => (
                  <ResultCard
                    key={result.link}
                    result={result}
                    isBookmarked={true}
                    onBookmarkToggle={toggleBookmark}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border-dashed border-2 border-yellow-500/10 rounded-[2rem] bg-gray-900/10">
                <p className="text-gray-400 font-medium">Your certification vault is empty. Search and save intel to build it!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
