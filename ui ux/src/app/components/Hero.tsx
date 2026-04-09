import { Search, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-yellow-500 text-sm font-medium">Trusted by 10,000+ Organizations</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Verify Certifications</span>
            <br />
            <span className="text-yellow-500">In Seconds</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            The most comprehensive certification verification platform. Search, verify, and manage 
            professional certifications from thousands of issuing organizations worldwide.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Enter certificate number or name..."
                  className="pl-12 h-14 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-500"
                />
              </div>
              <Button className="h-14 px-8 bg-yellow-500 text-black hover:bg-yellow-400 font-medium">
                Search Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span>Instant Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
