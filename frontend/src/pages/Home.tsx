import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Briefcase, 
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Award
} from 'lucide-react';

const Home = () => {
  const featuredGigs = [
    {
      id: 1,
      title: "React Web Application Development",
      description: "Build a modern, responsive web application using React and TypeScript",
      budget: "$500 - $1500",
      duration: "2-4 weeks",
      client: "TechStart Inc.",
      rating: 4.9,
      skills: ["React", "TypeScript", "Node.js"],
      proposals: 12
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design",
      description: "Design beautiful and intuitive user interfaces for iOS and Android",
      budget: "$800 - $2000",
      duration: "1-3 weeks",
      client: "Design Studio",
      rating: 5.0,
      skills: ["Figma", "UI/UX", "Mobile Design"],
      proposals: 8
    },
    {
      id: 3,
      title: "E-commerce Website Development",
      description: "Create a full-stack e-commerce solution with payment integration",
      budget: "$1000 - $3000",
      duration: "3-6 weeks",
      client: "Online Retailer",
      rating: 4.8,
      skills: ["Next.js", "Stripe", "PostgreSQL"],
      proposals: 15
    }
  ];

  const topFreelancers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Full Stack Developer",
      rating: 4.9,
      completedJobs: 127,
      hourlyRate: "$45/hr",
      location: "New York, USA",
      skills: ["React", "Node.js", "Python"]
    },
    {
      id: 2,
      name: "Alex Chen",
      title: "UI/UX Designer",
      rating: 5.0,
      completedJobs: 89,
      hourlyRate: "$60/hr",
      location: "San Francisco, USA",
      skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "Mobile Developer",
      rating: 4.8,
      completedJobs: 156,
      hourlyRate: "$50/hr",
      location: "Austin, USA",
      skills: ["React Native", "Flutter", "iOS"]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Hiring",
      description: "Find qualified freelancers in minutes, not weeks"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected payments with milestone-based releases"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Work with top-rated professionals and get quality results"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find the Perfect 
            <span className="block text-white/90">Freelance Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with talented freelancers worldwide and bring your projects to life
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Input 
                  placeholder="Search for services (e.g., web development, design...)"
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                <Users className="mr-2 h-5 w-5" />
                Hire Freelancers
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8">
                <Briefcase className="mr-2 h-5 w-5" />
                Find Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GigConnect?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most trusted platform for freelance work with built-in protection and quality assurance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Gigs</h2>
              <p className="text-lg text-muted-foreground">
                Discover high-quality projects from verified clients
              </p>
            </div>
            <Link to="/gigs">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Gigs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGigs.map((gig) => (
              <Card key={gig.id} className="hover:shadow-lg transition-all duration-300 bg-card border-0 shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{gig.client}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                      {gig.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{gig.title}</CardTitle>
                  <CardDescription className="text-sm">{gig.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {gig.budget}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {gig.duration}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {gig.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">
                        {gig.proposals} proposals
                      </span>
                      <Link to={`/gigs/${gig.id}`}>
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Freelancers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Freelancers</h2>
              <p className="text-lg text-muted-foreground">
                Work with the best talent on the platform
              </p>
            </div>
            <Button variant="outline">
              View All Freelancers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFreelancers.map((freelancer) => (
              <Card key={freelancer.id} className="hover:shadow-lg transition-all duration-300 bg-card border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {freelancer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{freelancer.name}</CardTitle>
                  <CardDescription>{freelancer.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                        <span className="font-medium">{freelancer.rating}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {freelancer.completedJobs} jobs
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {freelancer.location}
                    </div>
                    
                    <div className="text-lg font-semibold text-primary">
                      {freelancer.hourlyRate}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link to={`/profile/${freelancer.id}`}>
                      <Button className="w-full mt-4" variant="outline">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses and freelancers who trust GigConnect for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                Join as Client
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8">
                Join as Freelancer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;