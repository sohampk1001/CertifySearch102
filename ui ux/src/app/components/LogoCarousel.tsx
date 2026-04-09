export function LogoCarousel() {
  // Company logos with names for fallback
  const companies = [
    { name: "Google", color: "#4285F4" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "IBM", color: "#0F62FE" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Cisco", color: "#049FD9" },
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-12 bg-black border-y border-yellow-500/20 overflow-hidden">
      <div className="mb-8 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wider">
          Search these top MNCs courses right now
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-left">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: "180px" }}
            >
              <div className="text-center">
                <div 
                  className="text-4xl font-bold opacity-40 hover:opacity-70 transition-opacity"
                  style={{ color: company.color }}
                >
                  {company.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          display: flex;
          animation: scroll-left 20s linear infinite;
          width: fit-content;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}