import React from 'react';
import { ExternalLink, Bookmark, BookmarkCheck, Globe, ShieldCheck, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const ResultCard = ({ result, isBookmarked, onBookmarkToggle }) => {
  const { title, description, link, domain, tags } = result;

  const getTagColor = (tag) => {
    switch (tag) {
      case 'FREE':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'PAID':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'OFFICIAL':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onBookmarkToggle(result)}
          className={`p-2 rounded-full transition-colors ${
            isBookmarked ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:bg-muted'
          }`}
        >
          {isBookmarked ? <BookmarkCheck className="w-5 h-5 fill-current" /> : <Bookmark className="w-5 h-5" />}
        </button>
      </div>

      <h3 className="text-xl font-bold text-card-foreground mb-2 hover:text-primary transition-colors">
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          {title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        <Globe className="w-3 h-3 mr-1.5" />
        {domain}
      </div>
    </motion.div>
  );
};

export default ResultCard;
