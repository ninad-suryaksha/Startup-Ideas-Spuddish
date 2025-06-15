
import { useState } from "react";
import { Search, Filter, Star, TrendingUp, Users, DollarSign, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GlassCard } from "@/components/GlassCard";
import { MetricCard } from "@/components/MetricCard";
import { FloatingButton } from "@/components/FloatingButton";

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
      case "Low": return "text-emerald-500";
      case "Medium": return "text-amber-500";
      case "High": return "text-rose-500";
      default: return "text-gray-400";
    }
  };

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
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
              <button 
                onClick={() => setSelectedIdea(null)}
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors font-display text-xl font-semibold"
              >
                ← Spuddish Garden
              </button>
              <div className="flex gap-3">
                <FloatingButton>Save Idea</FloatingButton>
                <FloatingButton variant="ghost">Share</FloatingButton>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                {idea.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {idea.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <MetricCard
                icon={<Star className="w-6 h-6" />}
                label="Viability Score"
                value={`${idea.viabilityScore}/10`}
                color="text-amber-500"
              />
              <MetricCard
                icon={<DollarSign className="w-6 h-6" />}
                label="Market Size"
                value={idea.marketSize}
                color="text-emerald-500"
              />
              <MetricCard
                icon={<TrendingUp className="w-6 h-6" />}
                label="Competition"
                value={idea.competition}
                color={getCompetitionColor(idea.competition)}
              />
              <MetricCard
                icon={<Clock className="w-6 h-6" />}
                label="Time to Market"
                value={idea.timeToMarket}
                color="text-blue-500"
              />
            </div>

            {/* Analysis Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Market Analysis</h3>
                <div className="space-y-4 text-gray-700 font-body leading-relaxed">
                  <p>The {idea.category.toLowerCase()} market is experiencing rapid growth, with increasing demand for innovative solutions.</p>
                  <p>Target market segments include early adopters willing to pay premium prices for cutting-edge solutions.</p>
                  <p>Key success factors include product-market fit, scalable technology infrastructure, and strategic partnerships.</p>
                </div>
              </Card>

              <Card className="p-8 shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Technical Requirements</h3>
                <div className="space-y-4 text-gray-700 font-body leading-relaxed">
                  <p>Development complexity: Medium to High</p>
                  <p>Required team: 3-5 full-stack developers, 1 UI/UX designer, 1 product manager</p>
                  <p>Technology stack: Modern web/mobile frameworks with cloud infrastructure</p>
                  <p>Estimated development time: {idea.timeToMarket}</p>
                </div>
              </Card>

              <Card className="p-8 shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Go-to-Market Strategy</h3>
                <div className="space-y-4 text-gray-700 font-body leading-relaxed">
                  <p>Phase 1: MVP development and beta testing with select users</p>
                  <p>Phase 2: Product launch with targeted digital marketing campaigns</p>
                  <p>Phase 3: Scale through partnerships and word-of-mouth growth</p>
                </div>
              </Card>

              <Card className="p-8 shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Financial Projections</h3>
                <div className="space-y-4 text-gray-700 font-body leading-relaxed">
                  <p>Year 1 Revenue: $100K - $500K</p>
                  <p>Year 2 Revenue: $1M - $5M</p>
                  <p>Year 3 Revenue: $5M - $15M</p>
                  <p>Funding needed: $500K - $2M for initial development and marketing</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero Section */}
      <div 
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '2.35/1' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/lovable-uploads/a4bb8de8-fdb3-410a-9d63-9a22c4f6f69c.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
            <h1 className="font-display text-2xl font-bold text-white tracking-tight">Spuddish Garden</h1>
            <div className="flex items-center gap-6">
              <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 font-medium tracking-wide">
                About
              </Button>
              <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 font-medium tracking-wide">
                Contact
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Content - Positioned to avoid center overlap */}
        <div className="absolute inset-0 flex items-end justify-start pb-16 pl-8">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tight">
                CULTIVATE<br />
                <span className="text-blue-400">YOUR NEXT</span><br />
                BIG IDEA
              </h1>
              <div className="flex items-center gap-4 mt-8">
                <div className="h-1 w-16 bg-blue-400"></div>
                <p className="text-xl text-white/90 max-w-xl font-body leading-relaxed">
                  Expertly curated, co-founder validated startup opportunities for 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="absolute bottom-8 right-8">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            Explore Ideas →
          </Button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
          
          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                  50+
                </div>
                <div className="text-gray-600 font-medium tracking-wide">Curated Ideas</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                  $2.5B+
                </div>
                <div className="text-gray-600 font-medium tracking-wide">Market Size</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                  95%
                </div>
                <div className="text-gray-600 font-medium tracking-wide">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                  2025
                </div>
                <div className="text-gray-600 font-medium tracking-wide">Future Ready</div>
              </div>
            </div>
          </div>

          {/* Featured Idea - New Design */}
          {featuredIdea && (
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
                  FEATURED <span className="text-blue-500">OPPORTUNITY</span>
                </h2>
                <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
              </div>
              
              <div 
                className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 cursor-pointer group hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedIdea(featuredIdea.id)}
              >
                <div className="absolute top-6 right-6">
                  <Badge className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm">
                    ⭐ FEATURED
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
                      {featuredIdea.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {featuredIdea.description}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-display font-black text-blue-600">
                          {featuredIdea.viabilityScore}/10
                        </div>
                        <div className="text-sm text-gray-600">Viability</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-display font-black text-emerald-600">
                          {featuredIdea.marketSize}
                        </div>
                        <div className="text-sm text-gray-600">Market Size</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-display font-black ${getCompetitionColor(featuredIdea.competition)}`}>
                          {featuredIdea.competition}
                        </div>
                        <div className="text-sm text-gray-600">Competition</div>
                      </div>
                    </div>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold group-hover:scale-105 transition-transform">
                      Explore This Idea →
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <div className="text-white text-6xl">💡</div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-12 h-12 text-yellow-800 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 mb-4">
                  DISCOVER <span className="text-blue-500">MORE IDEAS</span>
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <Input
                    placeholder="Search startup ideas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-16 h-16 text-lg font-body border-2 border-gray-200 focus:border-blue-500 rounded-2xl"
                  />
                </div>
                
                <div className="flex items-center gap-4 bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4">
                  <Filter className="text-gray-400 w-6 h-6" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-transparent text-gray-700 border-none outline-none font-medium text-lg"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIdeas.filter(idea => !idea.featured).map((idea) => (
              <div
                key={idea.id}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 cursor-pointer group hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedIdea(idea.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-700 font-semibold border-0">
                    {idea.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-900 font-bold">{idea.viabilityScore}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {idea.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {idea.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">Market Size</span>
                    <span className="text-gray-900 font-bold">{idea.marketSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">Competition</span>
                    <span className={`font-bold ${getCompetitionColor(idea.competition)}`}>
                      {idea.competition}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">Time to Market</span>
                    <span className="text-gray-900 font-bold">{idea.timeToMarket}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 border-t-2 border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="text-gray-600 mb-8 text-lg font-body">
              © 2025 Spuddish Garden. Cultivating the future of startups.
            </div>
            <div className="flex justify-center gap-8">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600 font-semibold">
                Privacy
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600 font-semibold">
                Terms
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600 font-semibold">
                Contact
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
