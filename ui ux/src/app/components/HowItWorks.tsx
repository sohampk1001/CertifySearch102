import { Search, Link2, BookOpen, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Enter Company Name",
    description: "Type in the company name like Microsoft, Google, Amazon, or any other organization.",
    step: "01"
  },
  {
    icon: Link2,
    title: "Redirected to Link",
    description: "Get instantly redirected to the company's official certification portal.",
    step: "02"
  },
  {
    icon: BookOpen,
    title: "Open Link & Do Courses",
    description: "Access the certification courses and complete your training on the official platform.",
    step: "03"
  },
  {
    icon: RotateCcw,
    title: "Come Again for New Course",
    description: "Return to search for more certifications from different companies and expand your skills.",
    step: "04"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Verify any certification in just four simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
                )}

                <div className="text-center relative z-10">
                  {/* Step Number */}
                  <div className="text-yellow-500/30 text-6xl font-bold mb-4">{step.step}</div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-black" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}