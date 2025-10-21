import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  MapPin, 
  Bookmark,
  Heart,
  TrendingUp,
  Eye
} from 'lucide-react';

const GigFeed = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [savedGigs, setSavedGigs] = useState<number[]>([]);

  const categories = [
    'Web Development',
    'Mobile Development',
    'Design & Creative',
    'Writing & Translation',
    'Digital Marketing',
    'Data Science',
    'Video & Animation',
    'Music & Audio'
  ];

  const gigs = [
    {
      id: 1,
      title: "Build a Modern E-commerce Website with React",
      description: "Looking for an experienced React developer to build a full-featured e-commerce platform with payment integration, admin dashboard, and responsive design.",
      client: {
        name: "TechRetail Inc.",
        rating: 4.9,
        reviewCount: 127,
        verified: true
      },
      budget: {
        type: "fixed",
        min: 2000,
        max: 4000
      },
      duration: "2-3 months",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      posted: "2 hours ago",
      proposals: 12,
      category: "Web Development",
      level: "Expert",
      featured: true
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design for Fitness App",
      description: "Design beautiful and intuitive user interfaces for iOS and Android fitness tracking application. Need someone with experience in mobile design patterns.",
      client: {
        name: "FitLife Studios",
        rating: 4.8,
        reviewCount: 89,
        verified: true
      },
      budget: {
        type: "fixed",
        min: 1200,
        max: 2500
      },
      duration: "3-4 weeks",
      skills: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
      posted: "5 hours ago",
      proposals: 8,
      category: "Design & Creative",
      level: "Intermediate",
      featured: false
    },
    {
      id: 3,
      title: "Python Data Analysis and Visualization",
      description: "Analyze large dataset and create interactive dashboards using Python, Pandas, and visualization libraries. Experience with machine learning is a plus.",
      client: {
        name: "DataCorp Analytics",
        rating: 4.7,
        reviewCount: 56,
        verified: false
      },
      budget: {
        type: "hourly",
        min: 30,
        max: 60
      },
      duration: "1-2 months",
      skills: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      posted: "1 day ago",
      proposals: 15,
      category: "Data Science",
      level: "Intermediate",
      featured: false
    },
    {
      id: 4,
      title: "Content Writing for Tech Blog",
      description: "Write engaging, SEO-optimized articles about emerging technologies, software development, and digital trends. 10-15 articles per month.",
      client: {
        name: "TechBlog Media",
        rating: 4.6,
        reviewCount: 234,
        verified: true
      },
      budget: {
        type: "fixed",
        min: 800,
        max: 1500
      },
      duration: "Ongoing",
      skills: ["Content Writing", "SEO", "Technology", "Research"],
      posted: "2 days ago",
      proposals: 23,
      category: "Writing & Translation",
      level: "Intermediate",
      featured: false
    },
    {
      id: 5,
      title: "Flutter Mobile App Development",
      description: "Develop cross-platform mobile application using Flutter framework. App includes user authentication, real-time chat, and push notifications.",
      client: {
        name: "StartupXYZ",
        rating: 4.9,
        reviewCount: 45,
        verified: true
      },
      budget: {
        type: "fixed",
        min: 3000,
        max: 5000
      },
      duration: "2-4 months",
      skills: ["Flutter", "Dart", "Firebase", "REST API"],
      posted: "3 days ago",
      proposals: 19,
      category: "Mobile Development",
      level: "Expert",
      featured: true
    }
  ];

  const toggleSaveGig = (gigId: number) => {
    setSavedGigs(prev => 
      prev.includes(gigId) 
        ? prev.filter(id => id !== gigId)
        : [...prev, gigId]
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Browse Gigs</h1>
        <p className="text-muted-foreground">
          Discover projects that match your skills and interests
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8 bg-card border-0 shadow-md">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for gigs (e.g., React developer, logo design...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Budget</SelectItem>
                  <SelectItem value="under-500">Under $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                  <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                  <SelectItem value="over-5000">$5,000+</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Showing {gigs.length} gigs • Updated just now
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="budget-high">Budget: High to Low</SelectItem>
              <SelectItem value="budget-low">Budget: Low to High</SelectItem>
              <SelectItem value="proposals">Fewest Proposals</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Gig Cards */}
      <div className="space-y-6">
        {gigs.map((gig) => (
          <Card key={gig.id} className={`hover:shadow-lg transition-all duration-300 bg-card border-0 shadow-md ${gig.featured ? 'ring-2 ring-primary/20' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {gig.featured && (
                      <Badge className="bg-gradient-hero text-primary-foreground">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                    <Badge variant="outline">{gig.category}</Badge>
                    <Badge variant="secondary">{gig.level}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-primary cursor-pointer">
                    <Link to={`/gigs/${gig.id}`}>{gig.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {gig.description}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleSaveGig(gig.id)}
                  className={savedGigs.includes(gig.id) ? 'text-red-500' : 'text-muted-foreground'}
                >
                  <Heart 
                    className={`h-4 w-4 ${savedGigs.includes(gig.id) ? 'fill-current' : ''}`} 
                  />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">
                        {gig.client.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{gig.client.name}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-current text-yellow-500 mr-1" />
                        {gig.client.rating} ({gig.client.reviewCount} reviews)
                        {gig.client.verified && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget and Duration */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {gig.budget.type === 'fixed' 
                        ? `$${gig.budget.min} - $${gig.budget.max}` 
                        : `$${gig.budget.min} - $${gig.budget.max}/hr`
                      }
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {gig.duration}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {gig.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Posted {gig.posted}</span>
                    <span>{gig.proposals} proposals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-1 h-3 w-3" />
                      View Details
                    </Button>
                    <Link to={`/gigs/${gig.id}`}>
                      <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                        Submit Proposal
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">
          Load More Gigs
        </Button>
      </div>
    </div>
  );
};

export default GigFeed;