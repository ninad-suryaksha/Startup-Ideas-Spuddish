
import { useState } from "react";
import { Search, ArrowRight, Star, TrendingUp, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Startup ideas data
const startupIdeas = [
  {
    id: 1,
    title: "AI Wellness Coach",
    description: "Personalized wellness guidance for remote workers using advanced AI algorithms",
    marketSize: "$4.2B",
    viabilityScore: 8.5,
    category: "AI & Health",
    featured: true,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Sustainable Packaging",
    description: "Revolutionary eco-friendly B2B marketplace for sustainable packaging solutions",
    marketSize: "$6.8B",
    viabilityScore: 9.2,
    category: "Sustainability",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    title: "Gen Z Mental Health",
    description: "Anonymous peer support platform designed specifically for Gen Z mental wellness",
    marketSize: "$3.1B",
    viabilityScore: 7.8,
    category: "HealthTech",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 4,
    title: "Gig Worker Finance",
    description: "Comprehensive financial planning and budgeting tools for irregular income workers",
    marketSize: "$2.9B",
    viabilityScore: 8.1,
    category: "FinTech",
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 5,
    title: "AR Home Design",
    description: "Augmented reality interior design with real-time furniture placement and visualization",
    marketSize: "$5.4B",
    viabilityScore: 8.9,
    category: "AR/VR",
    color: "from-indigo-500 to-blue-600"
  },
  {
    id: 6,
    title: "Climate Analytics",
    description: "Advanced carbon tracking and environmental impact analytics for small-medium businesses",
    marketSize: "$8.1B",
    viabilityScore: 9.5,
    category: "Climate Tech",
    color: "from-teal-500 to-cyan-600"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIdea, setSelectedIdea] = useState(null);

  const filteredIdeas = startupIdeas.filter(idea => 
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedIdea) {
    const idea = startupIdeas.find(i => i.id === selectedIdea);
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Header */}
        <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedIdea(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span className="font-medium">Back to Ideas</span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                <span className="font-display font-semibold text-gray-900">Spuddish</span>
              </div>
            </div>
          </div>
        </header>

        {/* Idea Detail */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className={`w-full h-64 bg-gradient-to-r ${idea.color} rounded-3xl mb-12 flex items-end p-8`}>
            <div>
              <div className="text-white/80 text-sm font-medium mb-2">{idea.category}</div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                {idea.title}
              </h1>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Market Size</div>
                  <div className="text-2xl font-display font-bold text-gray-900">{idea.marketSize}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Viability Score</div>
                  <div className="text-2xl font-display font-bold text-gray-900">{idea.viabilityScore}/10</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Category</div>
                  <div className="text-lg font-semibold text-gray-900">{idea.category}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">About This Opportunity</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {idea.description}. This represents a significant opportunity in the {idea.category.toLowerCase()} 
              space with strong market validation and clear path to profitability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The market dynamics are favorable, with increasing demand for innovative solutions in this sector. 
              Early movers have the potential to capture significant market share while building sustainable 
              competitive advantages through technology and strategic partnerships.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-gray-900">Spuddish</div>
                <div className="text-xs text-gray-500">Startup Ideas Library</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">2025 Collection</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 tracking-tight mb-6">
            Startup ideas that<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              feel like magic
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Curated opportunities in your inbox, every alternate Saturday. Discover the next big thing 
            before everyone else does.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search startup ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-14 h-14 text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 shadow-sm"
            />
          </div>
        </div>

        {/* Featured Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIdeas.map((idea) => (
            <div
              key={idea.id}
              className="group cursor-pointer"
              onClick={() => setSelectedIdea(idea.id)}
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={`h-48 bg-gradient-to-r ${idea.color} relative`}>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-medium">{idea.viabilityScore}/10</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <div className="text-white/80 text-sm font-medium mb-1">{idea.category}</div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {idea.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {idea.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Market Size</div>
                      <div className="text-lg font-bold text-gray-900">{idea.marketSize}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Stats */}
        <div className="mt-24 bg-white rounded-3xl border border-gray-100 shadow-sm p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Welcome to our public library of the collective imagination
            </h2>
            <p className="text-gray-600 text-lg">
              Expertly curated startup opportunities validated by successful entrepreneurs
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Curated Ideas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-blue-600 mb-2">$2.1T</div>
              <div className="text-gray-600">Total Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-green-600 mb-2">8.7</div>
              <div className="text-gray-600">Avg Viability Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-pink-600 mb-2">12</div>
              <div className="text-gray-600">Industry Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="font-display font-bold text-gray-900">Spuddish Garden</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Spuddish Garden. Cultivating the future, one idea at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
