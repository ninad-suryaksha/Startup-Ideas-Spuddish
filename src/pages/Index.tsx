
import { useState } from "react";
import { Search, ArrowRight, Star, TrendingUp, Lightbulb, Target, Play, Calendar, ChevronDown, Filter } from "lucide-react";
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
    color: "from-blue-500 to-purple-600",
    tags: ["Perfect Timing", "Massive Market", "AI-Driven"]
  },
  {
    id: 2,
    title: "Sustainable Packaging",
    description: "Revolutionary eco-friendly B2B marketplace for sustainable packaging solutions",
    marketSize: "$6.8B",
    viabilityScore: 9.2,
    category: "Sustainability",
    color: "from-green-500 to-emerald-600",
    tags: ["Climate Tech", "B2B", "Growing Demand"]
  },
  {
    id: 3,
    title: "Gen Z Mental Health",
    description: "Anonymous peer support platform designed specifically for Gen Z mental wellness",
    marketSize: "$3.1B",
    viabilityScore: 7.8,
    category: "HealthTech",
    color: "from-pink-500 to-rose-600",
    tags: ["Social Impact", "Mental Health", "Gen Z"]
  },
  {
    id: 4,
    title: "Gig Worker Finance",
    description: "Comprehensive financial planning and budgeting tools for irregular income workers",
    marketSize: "$2.9B",
    viabilityScore: 8.1,
    category: "FinTech",
    color: "from-yellow-500 to-orange-600",
    tags: ["FinTech", "Future of Work", "Growing Market"]
  },
  {
    id: 5,
    title: "AR Home Design",
    description: "Augmented reality interior design with real-time furniture placement and visualization",
    marketSize: "$5.4B",
    viabilityScore: 8.9,
    category: "AR/VR",
    color: "from-indigo-500 to-blue-600",
    tags: ["AR/VR", "Home Tech", "Visual Innovation"]
  },
  {
    id: 6,
    title: "Climate Analytics",
    description: "Advanced carbon tracking and environmental impact analytics for small-medium businesses",
    marketSize: "$8.1B",
    viabilityScore: 9.5,
    category: "Climate Tech",
    color: "from-teal-500 to-cyan-600",
    tags: ["ESG", "Analytics", "Climate Solutions"]
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [currentDate] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  });

  const filteredIdeas = startupIdeas.filter(idea => 
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedIdea) {
    const idea = startupIdeas.find(i => i.id === selectedIdea);
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Cinematic Header */}
        <header className="relative bg-black text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedIdea(null)}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium tracking-wide">BACK TO IDEAS</span>
              </button>
              
              <div className="flex items-center gap-4">
                <img 
                  src="/lovable-uploads/6aa0175d-2a66-40cc-884c-0a6d0eee3688.png" 
                  alt="Spuddish Down" 
                  className="w-10 h-10 hover:hidden transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/27bc7be9-4cfe-46b2-a139-755d766cbbe5.png" 
                  alt="Spuddish Up" 
                  className="w-10 h-10 hidden hover:block transition-all duration-300"
                />
                <div>
                  <div className="font-display font-bold text-xl tracking-wider">SPUDDISH</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Garden</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cinematic Idea Hero */}
        <div className="relative h-96 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${idea.color}`}></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative max-w-7xl mx-auto px-8 h-full flex items-end pb-16">
            <div className="text-white">
              <div className="text-sm font-medium mb-2 tracking-widest uppercase opacity-80">{idea.category}</div>
              <h1 className="text-6xl md:text-7xl font-display font-bold mb-4 tracking-tight">
                {idea.title}
              </h1>
              <div className="flex items-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium">Score: {idea.viabilityScore}/10</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium">{idea.marketSize} Market</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-8 py-20">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">About This Opportunity</h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              {idea.description}. This represents a significant opportunity in the {idea.category.toLowerCase()} 
              space with strong market validation and clear path to profitability.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Opportunity</h3>
                <p className="text-gray-600 leading-relaxed">
                  With a total addressable market of {idea.marketSize}, this sector shows unprecedented growth 
                  potential and increasing demand for innovative solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Now?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Market dynamics are favorable with technological advancement, changing consumer behavior, 
                  and regulatory support creating the perfect storm for disruption.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {idea.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimalist Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6aa0175d-2a66-40cc-884c-0a6d0eee3688.png" 
                  alt="Spuddish Down" 
                  className="w-12 h-12 group-hover:opacity-0 transition-opacity duration-300"
                />
                <img 
                  src="/lovable-uploads/27bc7be9-4cfe-46b2-a139-755d766cbbe5.png" 
                  alt="Spuddish Up" 
                  className="w-12 h-12 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-gray-900 tracking-wider">SPUDDISH</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">Garden</div>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium tracking-wide transition-colors">Ideas</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium tracking-wide transition-colors">Trends</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium tracking-wide transition-colors">About</a>
              </nav>
              <div className="text-sm text-gray-500 font-medium tracking-wide">{currentDate}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium tracking-wide uppercase">
                Idea of the Day
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-display font-bold text-gray-900 tracking-tight mb-8 leading-none">
              Startup ideas that<br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                actually matter
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Carefully curated opportunities for the next generation of entrepreneurs. 
              Discover ideas with real potential, backed by market research and timing analysis.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search ideas, categories, markets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-14 h-14 text-lg bg-gray-50 border-0 rounded-2xl focus:bg-white focus:shadow-lg transition-all duration-300"
                />
              </div>
              <Button variant="outline" className="h-14 px-6 border-0 bg-gray-50 hover:bg-gray-100 rounded-2xl">
                <Filter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas Grid */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900">Featured Opportunities</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Updated daily</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredIdeas.map((idea, index) => (
              <div
                key={idea.id}
                className={`group cursor-pointer ${index === 0 ? 'lg:col-span-2' : ''}`}
                onClick={() => setSelectedIdea(idea.id)}
              >
                <div className="bg-white rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className={`${index === 0 ? 'h-80' : 'h-64'} bg-gradient-to-r ${idea.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-5 h-5 text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Viability Score */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-sm font-semibold">{idea.viabilityScore}/10</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-white/80 text-sm font-medium mb-2 tracking-widest uppercase">{idea.category}</div>
                      <h3 className={`${index === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'} font-display font-bold text-white mb-4 tracking-tight`}>
                        {idea.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-white/90 text-lg font-semibold">{idea.marketSize}</span>
                        <span className="text-white/70">market size</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {idea.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {idea.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Market Validation
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              The numbers behind the magic
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expertly curated opportunities validated by market research and entrepreneurial expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-blue-600 mb-3">150+</div>
              <div className="text-gray-600 font-medium">Curated Ideas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-purple-600 mb-3">$2.1T</div>
              <div className="text-gray-600 font-medium">Total Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-green-600 mb-3">8.7</div>
              <div className="text-gray-600 font-medium">Avg Viability Score</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-pink-600 mb-3">12</div>
              <div className="text-gray-600 font-medium">Industry Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/lovable-uploads/6aa0175d-2a66-40cc-884c-0a6d0eee3688.png" 
                  alt="Spuddish" 
                  className="w-10 h-10"
                />
                <div>
                  <div className="font-display font-bold text-xl text-gray-900">SPUDDISH GARDEN</div>
                  <div className="text-sm text-gray-500">Cultivating the future</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                A curated collection of startup opportunities for the next generation of entrepreneurs. 
                Every idea is researched, validated, and ready to build.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">All Ideas</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">AI & Tech</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FinTech</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-12 pt-8 flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2025 Spuddish Garden. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with care in the digital garden
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
