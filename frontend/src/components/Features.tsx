import { Search, Shield, Zap, Database, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Advanced Search",
    description: "Search across millions of certificates with powerful filters and instant results.",
    color: "yellow"
  },
  {
    icon: Shield,
    title: "Secure Verification",
    description: "Industry-leading encryption and security protocols to protect sensitive data.",
    color: "blue"
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Get instant notifications when certificate statuses change or expire.",
    color: "purple"
  },
  {
    icon: Database,
    title: "Massive Database",
    description: "Access to over 50 million certificates from 10,000+ issuing organizations.",
    color: "green"
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Verification results in under 3 seconds with 99.9% accuracy guaranteed.",
    color: "orange"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Support for certifications from 150+ countries and territories worldwide.",
    color: "pink"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to verify, manage, and track professional certifications
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
