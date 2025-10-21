import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Clock, 
  DollarSign, 
  MapPin, 
  Calendar,
  Users,
  Heart,
  Share,
  ArrowLeft,
  Send,
  Paperclip,
  CheckCircle
} from 'lucide-react';

const GigDetails = () => {
  const { id } = useParams();
  const [proposalText, setProposalText] = useState('');
  const [proposalBudget, setProposalBudget] = useState('');
  const [proposalDuration, setProposalDuration] = useState('');

  // Mock data - in real app, this would be fetched based on the ID
  const gig = {
    id: 1,
    title: "Build a Modern E-commerce Website with React",
    description: "Looking for an experienced React developer to build a full-featured e-commerce platform with payment integration, admin dashboard, and responsive design. The project requires someone with strong experience in modern web technologies and attention to detail.\n\nThe ideal freelancer should have:\n- 5+ years of React development experience\n- Experience with Node.js and Express\n- Knowledge of payment gateway integration (Stripe/PayPal)\n- Understanding of responsive design principles\n- Experience with database design (MongoDB/PostgreSQL)\n- Knowledge of authentication systems\n\nProject deliverables include:\n- Complete e-commerce frontend (React)\n- Backend API (Node.js)\n- Admin dashboard\n- Payment integration\n- User authentication\n- Product catalog management\n- Order management system\n- Mobile-responsive design\n\nWe prefer to work with someone who can provide regular updates and is available for calls in EST timezone.",
    client: {
      name: "TechRetail Inc.",
      rating: 4.9,
      reviewCount: 127,
      verified: true,
      memberSince: "2020",
      location: "New York, USA",
      totalSpent: 45000,
      hireRate: 85,
      activeJobs: 3
    },
    budget: {
      type: "fixed",
      min: 2000,
      max: 4000
    },
    duration: "2-3 months",
    skills: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JavaScript", "CSS", "HTML"],
    posted: "2 hours ago",
    proposals: 12,
    category: "Web Development",
    level: "Expert",
    featured: true,
    attachments: [
      { name: "project-requirements.pdf", size: "2.3 MB" },
      { name: "wireframes.fig", size: "1.8 MB" }
    ]
  };

  const similarGigs = [
    {
      id: 2,
      title: "React Dashboard Development",
      budget: "$1500 - $3000",
      client: "StartupXYZ",
      rating: 4.8,
      proposals: 8
    },
    {
      id: 3,
      title: "E-commerce Mobile App",
      budget: "$2500 - $5000",
      client: "RetailCorp",
      rating: 4.7,
      proposals: 15
    }
  ];

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle proposal submission
    console.log('Proposal submitted:', {
      text: proposalText,
      budget: proposalBudget,
      duration: proposalDuration
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Back Button */}
      <Link 
        to="/gigs" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Gigs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Gig Header */}
          <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    {gig.featured && (
                      <Badge className="bg-gradient-hero text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                    <Badge variant="outline">{gig.category}</Badge>
                    <Badge variant="secondary">{gig.level}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3">{gig.title}</CardTitle>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {gig.budget.type === 'fixed' 
                        ? `$${gig.budget.min} - $${gig.budget.max}` 
                        : `$${gig.budget.min} - $${gig.budget.max}/hr`
                      }
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {gig.duration}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Posted {gig.posted}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {gig.proposals} proposals
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Gig Details Tabs */}
          <Tabs defaultValue="description" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="client">About Client</TabsTrigger>
              <TabsTrigger value="similar">Similar Gigs</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <Card className="bg-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Project Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line text-foreground mb-6">
                      {gig.description}
                    </div>
                    
                    {/* Skills Required */}
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Skills Required</h4>
                      <div className="flex flex-wrap gap-2">
                        {gig.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Attachments */}
                    {gig.attachments && gig.attachments.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Attachments</h4>
                        <div className="space-y-2">
                          {gig.attachments.map((file, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
                              <Paperclip className="h-4 w-4 text-muted-foreground" />
                              <div className="flex-1">
                                <p className="font-medium text-sm">{file.name}</p>
                                <p className="text-xs text-muted-foreground">{file.size}</p>
                              </div>
                              <Button variant="outline" size="sm">
                                Download
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="client">
              <Card className="bg-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle>About the Client</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Client Profile */}
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-primary-foreground">
                          {gig.client.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{gig.client.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                            <span className="font-medium">{gig.client.rating}</span>
                            <span className="text-muted-foreground ml-1">
                              ({gig.client.reviewCount} reviews)
                            </span>
                          </div>
                          {gig.client.verified && (
                            <Badge variant="outline" className="text-xs">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {gig.client.location}
                        </div>
                      </div>
                    </div>

                    {/* Client Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-accent rounded-lg">
                        <div className="font-semibold text-lg">
                          ${gig.client.totalSpent.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Total Spent</div>
                      </div>
                      <div className="text-center p-3 bg-accent rounded-lg">
                        <div className="font-semibold text-lg">{gig.client.hireRate}%</div>
                        <div className="text-xs text-muted-foreground">Hire Rate</div>
                      </div>
                      <div className="text-center p-3 bg-accent rounded-lg">
                        <div className="font-semibold text-lg">{gig.client.activeJobs}</div>
                        <div className="text-xs text-muted-foreground">Active Jobs</div>
                      </div>
                      <div className="text-center p-3 bg-accent rounded-lg">
                        <div className="font-semibold text-lg">{gig.client.memberSince}</div>
                        <div className="text-xs text-muted-foreground">Member Since</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="similar">
              <Card className="bg-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Similar Gigs</CardTitle>
                  <CardDescription>Other projects you might be interested in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {similarGigs.map((similarGig) => (
                      <div key={similarGig.id} className="p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <Link 
                              to={`/gigs/${similarGig.id}`}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {similarGig.title}
                            </Link>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                              <span className="font-medium text-primary">{similarGig.budget}</span>
                              <span>{similarGig.client}</span>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-current text-yellow-500 mr-1" />
                                {similarGig.rating}
                              </div>
                              <span>{similarGig.proposals} proposals</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Submit Proposal */}
          <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Submit a Proposal</CardTitle>
              <CardDescription>
                Stand out from the {gig.proposals} other proposals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitProposal} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="proposal">Cover Letter</Label>
                  <Textarea
                    id="proposal"
                    placeholder="Describe your approach to this project..."
                    value={proposalText}
                    onChange={(e) => setProposalText(e.target.value)}
                    rows={5}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Your Budget</Label>
                    <Input
                      id="budget"
                      placeholder="$2500"
                      value={proposalBudget}
                      onChange={(e) => setProposalBudget(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      placeholder="6 weeks"
                      value={proposalDuration}
                      onChange={(e) => setProposalDuration(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Proposal
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Gig Stats */}
          <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Gig Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Proposals</span>
                  <span className="font-medium">{gig.proposals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last viewed</span>
                  <span className="font-medium">1 hour ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Interviewing</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Invites sent</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unanswered invites</span>
                  <span className="font-medium">0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Activity */}
          <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Client Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Last active</span>
                  <span className="font-medium text-green-600">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Local time</span>
                  <span className="font-medium">2:30 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avg. response time</span>
                  <span className="font-medium">4 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GigDetails;