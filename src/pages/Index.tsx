
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Minimal startup ideas data
const startupIdeas = [
  {
    id: 1,
    title: "AI Wellness Coach",
    description: "Personalized wellness for remote workers",
    marketSize: "$4.2B",
    viabilityScore: 8.5,
    category: "AI",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Packaging",
    description: "Eco-friendly B2B marketplace",
    marketSize: "$6.8B",
    viabilityScore: 9.2,
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Gen Z Mental Health",
    description: "Anonymous peer support platform",
    marketSize: "$3.1B",
    viabilityScore: 7.8,
    category: "HealthTech"
  },
  {
    id: 4,
    title: "Gig Worker Finance",
    description: "Financial planning for irregular income",
    marketSize: "$2.9B",
    viabilityScore: 8.1,
    category: "FinTech"
  },
  {
    id: 5,
    title: "AR Home Design",
    description: "Interior design with AR placement",
    marketSize: "$5.4B",
    viabilityScore: 8.9,
    category: "AR/VR"
  },
  {
    id: 6,
    title: "Climate Analytics",
    description: "Carbon tracking for SMBs",
    marketSize: "$8.1B",
    viabilityScore: 9.5,
    category: "Climate Tech"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIdea, setSelectedIdea] = useState(null);

  const filteredIdeas = startupIdeas.filter(idea => 
    idea.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedIdea) {
    const idea = startupIdeas.find(i => i.id === selectedIdea);
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div 
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: '2.35/1' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/lovable-uploads/44974d19-da48-4d1d-9cb2-394df3f61a52.png)' }}
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-50 p-8">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedIdea(null)}
                className="text-white text-sm tracking-wider hover:opacity-70 transition-opacity"
              >
                ← BACK
              </button>
            </div>
          </nav>

          {/* Title on image */}
          <div className="absolute bottom-8 left-8">
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">
              {idea.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16 mb-16">
              <div>
                <div className="text-xs text-gray-500 tracking-wider mb-2">MARKET SIZE</div>
                <div className="text-2xl font-light">{idea.marketSize}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 tracking-wider mb-2">VIABILITY</div>
                <div className="text-2xl font-light">{idea.viabilityScore}/10</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 tracking-wider mb-2">CATEGORY</div>
                <div className="text-2xl font-light">{idea.category}</div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                {idea.description}. This represents a significant opportunity in the {idea.category.toLowerCase()} 
                space with strong market validation and clear path to profitability.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '2.35/1' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/lovable-uploads/44974d19-da48-4d1d-9cb2-394df3f61a52.png)' }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-8">
          <div className="flex items-center justify-between">
            <div className="text-white text-sm tracking-wider">SPUDDISH GARDEN</div>
            <div className="text-white text-sm tracking-wider">2025</div>
          </div>
        </nav>

        {/* Hero text positioned to avoid center */}
        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tight leading-none">
            CULTIVATE<br />
            YOUR NEXT<br />
            BIG IDEA
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white px-8 py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Search */}
          <div className="mb-20">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search ideas"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-16 h-16 text-lg border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-black transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="space-y-1">
            {filteredIdeas.map((idea, index) => (
              <div
                key={idea.id}
                className="group cursor-pointer border-b border-gray-100 py-8 hover:bg-gray-50 transition-colors"
                onClick={() => setSelectedIdea(idea.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-8">
                      <div className="text-sm text-gray-400 w-8">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-light text-black group-hover:text-gray-600 transition-colors mb-2">
                          {idea.title}
                        </h3>
                        <p className="text-gray-600 font-light text-lg">
                          {idea.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-light text-black mb-1">
                          {idea.marketSize}
                        </div>
                        <div className="text-sm text-gray-500">
                          {idea.viabilityScore}/10
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-32 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-sm text-gray-500 tracking-wider">
                © 2025 SPUDDISH GARDEN
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
