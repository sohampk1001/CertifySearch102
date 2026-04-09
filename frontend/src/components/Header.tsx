import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-yellow-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="CertifySearch" className="h-14 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-yellow-500 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-yellow-500 transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-yellow-500 hover:bg-yellow-500/10">
              Sign In
            </Button>
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-500/20">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-yellow-500 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-yellow-500 transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">
                About
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-yellow-500/20">
                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                  Sign In
                </Button>
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}