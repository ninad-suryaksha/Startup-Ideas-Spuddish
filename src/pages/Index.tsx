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
      case "Low": return "text-emerald-400";
      case "Medium": return "text-amber-400";
      case "High": return "text-rose-400";
      default: return "text-gray-400";
    }
  };

  if (selectedIdea) {
    const idea = startupIdeas.find(i => i.id === selectedIdea);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/lovable-uploads/a4bb8de8-fdb3-410a-9d63-9a22c4f6f69c.png)' }}
        />
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
          <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
            <button 
              onClick={() => setSelectedIdea(null)}
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors font-display text-lg font-semibold"
            >
              ← Spuddish Garden
            </button>
            <div className="flex gap-3">
              <FloatingButton>
                Save Idea
              </FloatingButton>
              <FloatingButton variant="ghost">
                Share
              </FloatingButton>
            </div>
          </div>
        </nav>

        {/* Idea Detail Content */}
        <div className="pt-24 px-8 max-w-6xl mx-auto pb-16">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-3 mb-8">
              {idea.tags.map((tag, index) => (
                <Badge key={index} className="glass-button text-white/80 border-white/10 font-medium px-4 py-2">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {idea.title}
            </h1>
            <p className="text-xl text-white/70 mb-12 max-w-4xl font-body leading-relaxed">
              {idea.description}
            </p>
            
            {/* Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricCard
                icon={<Star className="w-6 h-6" />}
                label="Viability Score"
                value={`${idea.viabilityScore}/10`}
                color="text-amber-400"
              />
              <MetricCard
                icon={<DollarSign className="w-6 h-6" />}
                label="Market Size"
                value={idea.marketSize}
                color="text-emerald-400"
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
                color="text-blue-400"
              />
            </div>
          </div>

          {/* Analysis Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Market Analysis</h3>
              <div className="space-y-4 text-white/70 font-body leading-relaxed">
                <p>The {idea.category.toLowerCase()} market is experiencing rapid growth, with increasing demand for innovative solutions.</p>
                <p>Target market segments include early adopters willing to pay premium prices for cutting-edge solutions.</p>
                <p>Key success factors include product-market fit, scalable technology infrastructure, and strategic partnerships.</p>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Technical Requirements</h3>
              <div className="space-y-4 text-white/70 font-body leading-relaxed">
                <p>Development complexity: Medium to High</p>
                <p>Required team: 3-5 full-stack developers, 1 UI/UX designer, 1 product manager</p>
                <p>Technology stack: Modern web/mobile frameworks with cloud infrastructure</p>
                <p>Estimated development time: {idea.timeToMarket}</p>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Go-to-Market Strategy</h3>
              <div className="space-y-4 text-white/70 font-body leading-relaxed">
                <p>Phase 1: MVP development and beta testing with select users</p>
                <p>Phase 2: Product launch with targeted digital marketing campaigns</p>
                <p>Phase 3: Scale through partnerships and word-of-mouth growth</p>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Financial Projections</h3>
              <div className="space-y-4 text-white/70 font-body leading-relaxed">
                <p>Year 1 Revenue: $100K - $500K</p>
                <p>Year 2 Revenue: $1M - $5M</p>
                <p>Year 3 Revenue: $5M - $15M</p>
                <p>Funding needed: $500K - $2M for initial development and marketing</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/lovable-uploads/a4bb8de8-fdb3-410a-9d63-9a22c4f6f69c.png)' }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-white">Spuddish Garden</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5 font-medium">
              About
            </Button>
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5 font-medium">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-28 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Cultivate Your Next
            <span className="block text-gradient mt-2">
              Big Idea
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-body leading-relaxed">
            Discover expertly curated, co-founder validated startup opportunities for 2025
          </p>
        </div>
        
        {/* Featured Idea */}
        {featuredIdea && (
          <div className="mb-20">
            <GlassCard 
              className="p-8 max-w-4xl mx-auto"
              onClick={() => setSelectedIdea(featuredIdea.id)}
            >
              <div className="flex items-center justify-between mb-6">
                <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-black font-semibold px-4 py-2">
                  ✦ Featured Idea
                </Badge>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="text-white font-semibold">{featuredIdea.viabilityScore}/10</span>
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">{featuredIdea.title}</h3>
              <p className="text-white/70 text-lg mb-8 font-body leading-relaxed">{featuredIdea.description}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/80">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">{featuredIdea.marketSize} Market</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className={`font-medium ${getCompetitionColor(featuredIdea.competition)}`}>
                    {featuredIdea.competition} Competition
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span className="font-medium">{featuredIdea.timeToMarket}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6 text-white/60">
                <span className="font-medium">Explore this idea</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </GlassCard>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <Input
                placeholder="Search startup ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 glass-input text-white placeholder:text-white/40 h-14 text-lg font-body"
              />
            </div>
            
            <div className="flex items-center gap-3 glass-button px-4 py-3">
              <Filter className="text-white/60 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-white border-none outline-none font-medium"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredIdeas.filter(idea => !idea.featured).map((idea) => (
            <GlassCard
              key={idea.id}
              className="p-6"
              onClick={() => setSelectedIdea(idea.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <Badge className="glass-button border-white/10 text-white/80 font-medium">
                  {idea.category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-white font-semibold">{idea.viabilityScore}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-display font-semibold text-white mb-3">{idea.title}</h3>
              <p className="text-white/60 mb-6 line-clamp-3 font-body leading-relaxed">{idea.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm font-medium">Market Size</span>
                  <span className="text-white font-semibold">{idea.marketSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm font-medium">Competition</span>
                  <span className={`font-semibold ${getCompetitionColor(idea.competition)}`}>
                    {idea.competition}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm font-medium">Time to Market</span>
                  <span className="text-white font-semibold">{idea.timeToMarket}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {idea.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-white/20 text-white/60">
                    {tag}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-16 border-t border-white/10 glass-nav">
          <div className="text-white/40 mb-6 font-body">
            © 2025 Spuddish Garden. Cultivating the future of startups.
          </div>
          <div className="flex justify-center gap-8">
            <Button variant="ghost" className="text-white/40 hover:text-white/70 hover:bg-white/5">
              Privacy
            </Button>
            <Button variant="ghost" className="text-white/40 hover:text-white/70 hover:bg-white/5">
              Terms
            </Button>
            <Button variant="ghost" className="text-white/40 hover:text-white/70 hover:bg-white/5">
              Contact
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
