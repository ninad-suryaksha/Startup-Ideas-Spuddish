
import { useState } from "react";
import { Search, ArrowRight, TrendingUp, DollarSign, Target } from "lucide-react";
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
    featured: true,
    trend: "+24%"
  },
  {
    id: 2,
    title: "Sustainable Packaging",
    description: "Eco-friendly B2B marketplace",
    marketSize: "$6.8B",
    viabilityScore: 9.2,
    category: "Sustainability",
    trend: "+18%"
  },
  {
    id: 3,
    title: "Gen Z Mental Health",
    description: "Anonymous peer support platform",
    marketSize: "$3.1B",
    viabilityScore: 7.8,
    category: "HealthTech",
    trend: "+31%"
  },
  {
    id: 4,
    title: "Gig Worker Finance",
    description: "Financial planning for irregular income",
    marketSize: "$2.9B",
    viabilityScore: 8.1,
    category: "FinTech",
    trend: "+15%"
  },
  {
    id: 5,
    title: "AR Home Design",
    description: "Interior design with AR placement",
    marketSize: "$5.4B",
    viabilityScore: 8.9,
    category: "AR/VR",
    trend: "+42%"
  },
  {
    id: 6,
    title: "Climate Analytics",
    description: "Carbon tracking for SMBs",
    marketSize: "$8.1B",
    viabilityScore: 9.5,
    category: "Climate Tech",
    trend: "+28%"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredIdeas = startupIdeas.filter(idea => 
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.category.toLowerCase().includes(searchTerm.toLowerCase())
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
            style={{ backgroundImage: 'url(/lovable-uploads/a4bb8de8-fdb3-410a-9d63-9a22c4f6f69c.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-50 p-8">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedIdea(null)}
                className="text-white text-sm font-medium tracking-wider hover:opacity-70 transition-all duration-300 flex items-center gap-2 group"
              >
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                BACK TO IDEAS
              </button>
            </div>
          </nav>

          {/* Title on image */}
          <div className="absolute bottom-12 left-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                {idea.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-display leading-none">
              {idea.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <div className="text-sm text-gray-500 font-semibold tracking-wider">MARKET SIZE</div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{idea.marketSize}</div>
                <div className="text-sm text-green-600 font-medium mt-2">{idea.trend} growth</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                  <div className="text-sm text-gray-500 font-semibold tracking-wider">VIABILITY</div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{idea.viabilityScore}/10</div>
                <div className="text-sm text-blue-600 font-medium mt-2">High potential</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  <div className="text-sm text-gray-500 font-semibold tracking-wider">CATEGORY</div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{idea.category}</div>
                <div className="text-sm text-purple-600 font-medium mt-2">Trending sector</div>
              </div>
            </div>
            
            <div className="prose prose-xl max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 font-light">
                {idea.description}. This represents a significant opportunity in the {idea.category.toLowerCase()} 
                space with strong market validation and clear path to profitability. The market shows consistent 
                growth with increasing demand and favorable regulatory environment.
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
          style={{ backgroundImage: 'url(/lovable-uploads/a4bb8de8-fdb3-410a-9d63-9a22c4f6f69c.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-8">
          <div className="flex items-center justify-between">
            <div className="text-white text-sm font-medium tracking-wider">SPUDDISH GARDEN</div>
            <div className="text-white/80 text-sm tracking-wider">2025 COLLECTION</div>
          </div>
        </nav>

        {/* Hero text positioned to avoid center */}
        <div className="absolute bottom-12 left-12 right-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium tracking-wide">
              Curated Startup Ideas
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none font-display">
            CULTIVATE<br />
            YOUR NEXT<br />
            <span className="text-blue-400">BIG IDEA</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mt-6 max-w-2xl">
            Discover validated opportunities with market data, viability scores, and growth potential
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white px-8 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Search Section */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Opportunity</h2>
              <p className="text-gray-600">Search through curated startup ideas by name or category</p>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search ideas or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-16 h-14 text-lg border-2 border-gray-200 rounded-2xl bg-gray-50 focus:border-blue-500 focus:bg-white transition-all shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600">{filteredIdeas.length}</div>
              <div className="text-sm text-blue-800 font-medium">Available Ideas</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-3xl font-bold text-green-600">$30B+</div>
              <div className="text-sm text-green-800 font-medium">Combined Market Size</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600">8.6</div>
              <div className="text-sm text-purple-800 font-medium">Average Viability Score</div>
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="space-y-4">
            {filteredIdeas.map((idea, index) => (
              <div
                key={idea.id}
                className={`group cursor-pointer border-2 border-gray-100 rounded-2xl p-8 transition-all duration-300 ${
                  hoveredCard === idea.id 
                    ? 'border-blue-300 bg-blue-50 shadow-xl scale-[1.02]' 
                    : 'hover:border-gray-200 hover:bg-gray-50 hover:shadow-lg'
                }`}
                onClick={() => setSelectedIdea(idea.id)}
                onMouseEnter={() => setHoveredCard(idea.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8 flex-1">
                    <div className="text-sm text-gray-400 font-bold w-12 text-center">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {idea.title}
                        </h3>
                        <span className="px-3 py-1 bg-gray-200 group-hover:bg-blue-200 text-gray-700 group-hover:text-blue-800 text-xs font-semibold rounded-full transition-colors">
                          {idea.category}
                        </span>
                        {idea.featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-medium text-lg mb-2">
                        {idea.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-semibold">{idea.marketSize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 font-semibold">{idea.viabilityScore}/10</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-purple-600" />
                          <span className="text-purple-600 font-semibold">{idea.trend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-6 h-6 text-gray-400 transition-all duration-300 ${
                    hoveredCard === idea.id 
                      ? 'text-blue-600 translate-x-2' 
                      : 'group-hover:text-gray-600 group-hover:translate-x-1'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredIdeas.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No ideas found</h3>
              <p className="text-gray-600">Try searching for different keywords or categories</p>
            </div>
          )}

          {/* Footer */}
          <div className="mt-32 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-sm text-gray-500 tracking-wider font-medium">
                © 2025 SPUDDISH GARDEN — CURATED WITH PRECISION
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
