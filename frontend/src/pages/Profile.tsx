import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  MapPin, 
  Calendar, 
  DollarSign,
  MessageSquare,
  Heart,
  Share,
  CheckCircle,
  Award,
  Clock,
  Users,
  Briefcase,
  ArrowLeft
} from 'lucide-react';

const Profile = () => {
  const { id } = useParams();
  const [isOwner] = useState(false); // This would be determined by comparing with current user ID

  // Mock data - in real app, this would be fetched based on the ID
  const profile = {
    id: 1,
    name: "Sarah Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    location: "New York, USA",
    timezone: "EST (UTC-5)",
    memberSince: "2020",
    verified: true,
    hourlyRate: 45,
    bio: "Passionate full-stack developer with 8+ years of experience building scalable web applications. I specialize in React, Node.js, and modern JavaScript technologies. I love creating beautiful, functional user experiences that solve real business problems.\n\nI've worked with startups and Fortune 500 companies, helping them build everything from MVPs to enterprise-level applications. My approach combines technical excellence with strong communication and project management skills.\n\nWhen I'm not coding, you can find me contributing to open source projects, mentoring junior developers, or exploring new technologies.",
    stats: {
      jobsCompleted: 127,
      totalEarned: 285000,
      rating: 4.9,
      reviewCount: 89,
      repeatClients: 67,
      onTime: 98,
      responseTime: "2 hours"
    },
    skills: [
      "React", "Node.js", "JavaScript", "TypeScript", "Python", 
      "PostgreSQL", "MongoDB", "AWS", "Docker", "Git",
      "UI/UX Design", "Figma", "HTML/CSS", "GraphQL", "REST APIs"
    ],
    portfolio: [
      {
        id: 1,
        title: "E-commerce Dashboard",
        description: "Modern admin dashboard for e-commerce platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#"
      },
      {
        id: 2,
        title: "Mobile Banking App",
        description: "Secure mobile banking application with biometric auth",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400", 
        technologies: ["React Native", "Firebase", "TypeScript"],
        link: "#"
      },
      {
        id: 3,
        title: "SaaS Analytics Platform",
        description: "Real-time analytics dashboard for SaaS companies",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
        technologies: ["Vue.js", "Python", "PostgreSQL"],
        link: "#"
      }
    ],
    reviews: [
      {
        id: 1,
        client: "TechStart Inc.",
        rating: 5,
        comment: "Sarah delivered exactly what we needed and more. Her attention to detail and communication throughout the project was exceptional. Highly recommend!",
        project: "React Dashboard Development",
        date: "2 weeks ago",
        verified: true
      },
      {
        id: 2,
        client: "Digital Agency Co.",
        rating: 5,
        comment: "Outstanding work on our mobile app. Sarah went above and beyond to ensure the user experience was perfect. Will definitely work with her again.",
        project: "Mobile App UI/UX",
        date: "1 month ago",
        verified: true
      },
      {
        id: 3,
        client: "E-commerce Startup",
        rating: 4,
        comment: "Great developer with strong technical skills. Delivered on time and within budget. Minor communication delays but overall very satisfied.",
        project: "E-commerce Platform",
        date: "2 months ago",
        verified: false
      }
    ],
    workHistory: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        client: "TechCorp Inc.",
        duration: "6 months",
        budget: 25000,
        rating: 5,
        feedback: "Excellent work on our enterprise dashboard redesign.",
        completed: true
      },
      {
        id: 2,
        title: "Full Stack Development",
        client: "StartupXYZ",
        duration: "3 months", 
        budget: 18000,
        rating: 5,
        feedback: "Sarah built our entire MVP from scratch. Amazing work!",
        completed: true
      },
      {
        id: 3,
        title: "React Native App",
        client: "Mobile Solutions",
        duration: "4 months",
        budget: 22000,
        rating: 4,
        feedback: "Good technical skills, timely delivery.",
        completed: true
      }
    ]
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Back Button */}
      <Link 
        to="/gigs" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Browse
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="space-y-6">
          {/* Profile Card */}
          <Card className="bg-card border-0 shadow-md">
            <CardContent className="p-6">
              <div className="text-center">
                {/* Profile Image */}
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Name and Title */}
                <h1 className="text-xl font-bold mb-2">{profile.name}</h1>
                <p className="text-muted-foreground mb-4">{profile.title}</p>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-current text-yellow-500 mr-1" />
                    <span className="font-semibold text-lg">{profile.stats.rating}</span>
                  </div>
                  <span className="text-muted-foreground">
                    ({profile.stats.reviewCount} reviews)
                  </span>
                  {profile.verified && (
                    <Badge variant="outline" className="text-xs">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Location and Rate */}
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {profile.location}
                  </div>
                  <div className="flex items-center justify-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    ${profile.hourlyRate}/hour
                  </div>
                  <div className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Member since {profile.memberSince}
                  </div>
                </div>

                {/* Action Buttons */}
                {!isOwner && (
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <Heart className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                )}

                {isOwner && (
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline">
                      Edit Profile
                    </Button>
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      View as Client
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Jobs completed</span>
                  <span className="font-semibold">{profile.stats.jobsCompleted}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">On-time delivery</span>
                  <span className="font-semibold">{profile.stats.onTime}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Repeat clients</span>
                  <span className="font-semibold">{profile.stats.repeatClients}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Response time</span>
                  <span className="font-semibold">{profile.stats.responseTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total earned</span>
                  <span className="font-semibold">${profile.stats.totalEarned.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="work-history">Work History</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about">
              <Card className="bg-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle>About {profile.name.split(' ')[0]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-foreground whitespace-pre-line">{profile.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Portfolio Tab */}
            <TabsContent value="portfolio">
              <div className="space-y-6">
                <Card className="bg-card border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription>Recent work and projects</CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profile.portfolio.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-all duration-300 bg-card border-0 shadow-md">
                      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          View Project
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews">
              <div className="space-y-6">
                <Card className="bg-card border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Client Reviews</CardTitle>
                    <CardDescription>
                      {profile.stats.reviewCount} reviews • {profile.stats.rating} average rating
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="space-y-4">
                  {profile.reviews.map((review) => (
                    <Card key={review.id} className="bg-card border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-foreground">
                                {review.client.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{review.client}</p>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${
                                    i < review.rating ? 'fill-current text-yellow-500' : 'text-muted-foreground'
                                  }`} 
                                />
                              ))}
                            </div>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-2">{review.comment}</p>
                        <p className="text-sm font-medium">{review.project}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Work History Tab */}
            <TabsContent value="work-history">
              <div className="space-y-6">
                <Card className="bg-card border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Work History</CardTitle>
                    <CardDescription>
                      Completed projects and client feedback
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="space-y-4">
                  {profile.workHistory.map((work) => (
                    <Card key={work.id} className="bg-card border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{work.title}</h3>
                            <p className="text-muted-foreground mb-2">{work.client}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {work.duration}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />
                                ${work.budget.toLocaleString()}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${
                                    i < work.rating ? 'fill-current text-yellow-500' : 'text-muted-foreground'
                                  }`} 
                                />
                              ))}
                            </div>
                            <Badge variant={work.completed ? 'default' : 'secondary'}>
                              {work.completed ? 'Completed' : 'In Progress'}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic">"{work.feedback}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;