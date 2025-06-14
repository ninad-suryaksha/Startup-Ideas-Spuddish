
import { useState } from "react";
import { Search, Filter, Star, TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Sample startup ideas data
const startupIdeas = [
  {
    id: 1,
    title: "AI Wellness Coach for Remote Workers",
    description: "Personalized AI-driven wellness platform that adapts to remote work schedules and stress patterns.",
    marketSize: "$4.2B",
    competition: "Medium",
    viabilityScore: 8.5,
    timeToMarket: "8-12 months",
    category: "AI",
    tags: ["Wellness", "Remote Work", "AI"],
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Packaging Marketplace",
    description: "B2B platform connecting eco-friendly packaging suppliers with e-commerce businesses.",
    marketSize: "$6.8B",
    competition: "Low",
    viabilityScore: 9.2,
    timeToMarket: "6-9 months",
    category: "Sustainability",
    tags: ["E-commerce", "Sustainability", "B2B"]
  },
  {
    id: 3,
    title: "Gen Z Mental Health Platform",
    description: "Anonymous peer support network with gamified therapy modules designed for digital natives.",
    marketSize: "$3.1B",
    competition: "High",
    viabilityScore: 7.8,
    timeToMarket: "10-14 months",
    category: "HealthTech",
    tags: ["Mental Health", "Gen Z", "Gamification"]
  },
  {
    id: 4,
    title: "Gig Worker Financial Planning",
    description: "Automated savings and investment platform tailored for irregular income streams.",
    marketSize: "$2.9B",
    competition: "Medium",
    viabilityScore: 8.1,
    timeToMarket: "12-15 months",
    category: "FinTech",
    tags: ["Gig Economy", "Financial Planning", "Automation"]
  },
  {
    id: 5,
    title: "AR Home Design Assistant",
    description: "Augmented reality app for interior design with real-time furniture placement and purchasing.",
    marketSize: "$5.4B",
    competition: "Low",
    viabilityScore: 8.9,
    timeToMarket: "15-18 months",
    category: "AR/VR",
    tags: ["Interior Design", "AR", "E-commerce"]
  },
  {
    id: 6,
    title: "Climate Data Analytics for SMBs",
    description: "Carbon footprint tracking and sustainability recommendations for small-medium businesses.",
    marketSize: "$8.1B",
    competition: "Low",
    viabilityScore: 9.5,
    timeToMarket: "9-12 months",
    category: "Climate Tech",
    tags: ["Analytics", "Climate", "SMB"]
  },
  {
    id: 7,
    title: "Elderly Tech Companion",
    description: "Voice-first platform connecting seniors with family, health services, and entertainment.",
    marketSize: "$4.7B",
    competition: "Medium",
    viabilityScore: 8.3,
    timeToMarket: "12-16 months",
    category: "HealthTech",
    tags: ["Voice Tech", "Elderly Care", "Family"]
  },
  {
    id: 8,
    title: "Creator Content Automation",
    description: "AI-powered content generation and scheduling platform for social media creators.",
    marketSize: "$7.2B",
    competition: "High",
    viabilityScore: 7.5,
    timeToMarket: "6-10 months",
    category: "Creator Economy",
    tags: ["Content Creation", "AI", "Social Media"]
  },
  {
    id: 9,
    title: "Smart City Traffic Optimization",
    description: "IoT-based traffic management system reducing urban congestion through predictive analytics.",
    marketSize: "$9.6B",
    competition: "Low",
    viabilityScore: 9.0,
    timeToMarket: "18-24 months",
    category: "Smart City",
    tags: ["IoT", "Traffic", "Analytics"]
  },
  {
    id: 10,
    title: "Personalized Learning AI Tutor",
    description: "Adaptive learning platform that customizes educational content based on individual learning patterns.",
    marketSize: "$6.3B",
    competition: "Medium",
    viabilityScore: 8.7,
    timeToMarket: "12-15 months",
    category: "EdTech",
    tags: ["Education", "AI", "Personalization"]
  }
];

const categories = ["All", "AI", "FinTech", "HealthTech", "Sustainability", "AR/VR", "Climate Tech", "Creator Economy", "Smart City", "EdTech"];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIdea, setSelectedIdea] = useState(null);

  const featuredIdea = startupIdeas.find(idea => idea.featured);
  const filteredIdeas = startupIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCompetitionColor = (competition) => {
    switch (competition) {
      case "Low": return "text-green-400";
      case "Medium": return "text-yellow-400";
      case "High": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  if (selectedIdea) {
    const idea = startupIdeas.find(i => i.id === selectedIdea);
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/lovable-uploads/a4bb8de8-fdb3-410a-9d63-9a22c4f6f69c.png)' }}
        />
        
        {/* Glass Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button 
              onClick={() => setSelectedIdea(null)}
              className="text-2xl font-bold text-white hover:text-green-300 transition-colors"
            >
              ← Spuddish Garden
            </button>
            <div className="flex space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Save Idea
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Share
              </Button>
            </div>
          </div>
        </nav>

        {/* Idea Detail Content */}
        <div className="pt-20 px-6 max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="relative mb-12 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                {idea.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{idea.title}</h1>
              <p className="text-xl text-green-100 mb-8">{idea.description}</p>
              
              {/* Metrics Dashboard */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-green-100 text-sm">Viability Score</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{idea.viabilityScore}/10</div>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-green-100 text-sm">Market Size</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{idea.marketSize}</div>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-green-100 text-sm">Competition</span>
                  </div>
                  <div className={`text-2xl font-bold ${getCompetitionColor(idea.competition)}`}>
                    {idea.competition}
                  </div>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-green-100 text-sm">Time to Market</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{idea.timeToMarket}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Analysis Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Market Analysis</h3>
              <div className="space-y-4 text-green-100">
                <p>The {idea.category.toLowerCase()} market is experiencing rapid growth, with increasing demand for innovative solutions.</p>
                <p>Target market segments include early adopters willing to pay premium prices for cutting-edge solutions.</p>
                <p>Key success factors include product-market fit, scalable technology infrastructure, and strategic partnerships.</p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Requirements</h3>
              <div className="space-y-4 text-green-100">
                <p>Development complexity: Medium to High</p>
                <p>Required team: 3-5 full-stack developers, 1 UI/UX designer, 1 product manager</p>
                <p>Technology stack: Modern web/mobile frameworks with cloud infrastructure</p>
                <p>Estimated development time: {idea.timeToMarket}</p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Go-to-Market Strategy</h3>
              <div className="space-y-4 text-green-100">
                <p>Phase 1: MVP development and beta testing with select users</p>
                <p>Phase 2: Product launch with targeted digital marketing campaigns</p>
                <p>Phase 3: Scale through partnerships and word-of-mouth growth</p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Financial Projections</h3>
              <div className="space-y-4 text-green-100">
                <p>Year 1 Revenue: $100K - $500K</p>
                <p>Year 2 Revenue: $1M - $5M</p>
                <p>Year 3 Revenue: $5M - $15M</p>
                <p>Funding needed: $500K - $2M for initial development and marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/lovable-uploads/a4bb8de8-fdb3-410a-9d63-9a22c4f6f69c.png)' }}
      />
      
      {/* Glass Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Spuddish Garden</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              About
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Featured Idea */}
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        {featuredIdea && (
          <div className="mb-16 relative">
            <div className="text-center mb-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Cultivate Your Next
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  Big Idea
                </span>
              </h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Discover expertly curated, co-founder validated startup opportunities for 2025
              </p>
            </div>
            
            {/* Featured Idea Card */}
            <div className="relative max-w-4xl mx-auto">
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer transform hover:scale-105"
                   onClick={() => setSelectedIdea(featuredIdea.id)}>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold">
                    🌟 Featured Idea
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{featuredIdea.viabilityScore}/10</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{featuredIdea.title}</h3>
                <p className="text-green-100 text-lg mb-6">{featuredIdea.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-white">{featuredIdea.marketSize} Market</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className={`${getCompetitionColor(featuredIdea.competition)}`}>
                      {featuredIdea.competition} Competition
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-white">{featuredIdea.timeToMarket}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300 w-5 h-5" />
              <Input
                placeholder="Search startup ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 backdrop-blur-xl bg-white/10 border-white/20 text-white placeholder:text-green-200 rounded-2xl h-14 text-lg"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 backdrop-blur-xl bg-white/10 rounded-2xl p-2 border border-white/20">
              <Filter className="text-green-300 w-5 h-5 ml-2" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-white border-none outline-none pr-4"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-green-900 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {filteredIdeas.filter(idea => !idea.featured).map((idea) => (
            <Card
              key={idea.id}
              className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl rounded-3xl overflow-hidden"
              onClick={() => setSelectedIdea(idea.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {idea.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{idea.viabilityScore}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{idea.title}</h3>
                <p className="text-green-100 mb-4 line-clamp-3">{idea.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-green-200 text-sm">Market Size</span>
                    <span className="text-white font-semibold">{idea.marketSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-200 text-sm">Competition</span>
                    <span className={`font-semibold ${getCompetitionColor(idea.competition)}`}>
                      {idea.competition}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-200 text-sm">Time to Market</span>
                    <span className="text-white font-semibold">{idea.timeToMarket}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {idea.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-white/30 text-green-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-white/20 backdrop-blur-xl bg-white/5">
          <div className="text-white/60 mb-4">
            © 2025 Spuddish Garden. Cultivating the future of startups.
          </div>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              Privacy
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              Terms
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              Contact
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
