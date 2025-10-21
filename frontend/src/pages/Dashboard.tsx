import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Star, 
  DollarSign, 
  Clock, 
  Eye, 
  MessageSquare, 
  TrendingUp,
  Users,
  Briefcase,
  CheckCircle
} from 'lucide-react';

const Dashboard = () => {
  const [userRole] = useState('freelancer'); // This would come from auth context

  // Mock data
  const stats = {
    freelancer: {
      totalEarnings: 12450,
      activeProjects: 3,
      completedJobs: 27,
      rating: 4.9
    },
    client: {
      activeGigs: 5,
      totalSpent: 8900,
      hiredFreelancers: 15,
      averageRating: 4.7
    }
  };

  const recentActivity = [
    {
      id: 1,
      type: 'proposal',
      title: 'React Dashboard Development',
      client: 'TechStart Inc.',
      amount: 1200,
      status: 'pending',
      date: '2 hours ago'
    },
    {
      id: 2,
      type: 'project',
      title: 'E-commerce Mobile App',
      client: 'RetailCorp',
      amount: 2500,
      status: 'in-progress',
      date: '1 day ago'
    },
    {
      id: 3,
      type: 'completed',
      title: 'Landing Page Design',
      client: 'StartupXYZ',
      amount: 800,
      status: 'completed',
      date: '3 days ago'
    }
  ];

  const activeGigs = [
    {
      id: 1,
      title: 'Full Stack Web Developer Needed',
      description: 'Looking for an experienced developer for a SaaS project',
      budget: '$2000 - $4000',
      proposals: 12,
      posted: '2 days ago',
      status: 'active'
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Designer',
      description: 'Design beautiful and intuitive mobile interfaces',
      budget: '$1500 - $2500',
      proposals: 8,
      posted: '1 week ago',
      status: 'in-review'
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {userRole === 'freelancer' ? 'Freelancer' : 'Client'}!
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your {userRole === 'freelancer' ? 'freelance work' : 'projects'}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {userRole === 'freelancer' ? (
          <>
            <Card className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${stats.freelancer.totalEarnings.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline h-3 w-3 mr-1" />
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.freelancer.activeProjects}</div>
                <p className="text-xs text-muted-foreground">2 due this week</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Jobs</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.freelancer.completedJobs}</div>
                <p className="text-xs text-muted-foreground">95% success rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center">
                  <Star className="h-5 w-5 fill-current text-yellow-500 mr-1" />
                  {stats.freelancer.rating}
                </div>
                <p className="text-xs text-muted-foreground">From 27 reviews</p>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <Card className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Gigs</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.client.activeGigs}</div>
                <p className="text-xs text-muted-foreground">2 receiving proposals</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${stats.client.totalSpent.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Across 15 projects</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hired Freelancers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.client.hiredFreelancers}</div>
                <p className="text-xs text-muted-foreground">10 recurring</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center">
                  <Star className="h-5 w-5 fill-current text-yellow-500 mr-1" />
                  {stats.client.averageRating}
                </div>
                <p className="text-xs text-muted-foreground">From freelancers</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue={userRole === 'freelancer' ? 'activity' : 'gigs'} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value={userRole === 'freelancer' ? 'activity' : 'gigs'}>
            {userRole === 'freelancer' ? 'Recent Activity' : 'My Gigs'}
          </TabsTrigger>
          <TabsTrigger value="projects">
            {userRole === 'freelancer' ? 'Active Projects' : 'Active Projects'}
          </TabsTrigger>
          <TabsTrigger value="earnings">
            {userRole === 'freelancer' ? 'Earnings' : 'Payments'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value={userRole === 'freelancer' ? 'activity' : 'gigs'} className="space-y-6">
          {userRole === 'freelancer' ? (
            <Card className="bg-card border-0 shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest proposals and projects</CardDescription>
                  </div>
                  <Link to="/gigs">
                    <Button variant="outline">Browse More Gigs</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {item.type === 'proposal' && <Eye className="h-5 w-5 text-primary" />}
                          {item.type === 'project' && <Briefcase className="h-5 w-5 text-primary" />}
                          {item.type === 'completed' && <CheckCircle className="h-5 w-5 text-success" />}
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.client} • {item.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${item.amount}</p>
                        <Badge variant={
                          item.status === 'completed' ? 'default' : 
                          item.status === 'in-progress' ? 'secondary' : 'outline'
                        }>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card border-0 shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>My Posted Gigs</CardTitle>
                    <CardDescription>Manage your job postings</CardDescription>
                  </div>
                  <Link to="/post-gig">
                    <Button className="bg-gradient-hero hover:opacity-90">
                      <Plus className="mr-2 h-4 w-4" />
                      Post New Gig
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeGigs.map((gig) => (
                    <div key={gig.id} className="p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{gig.title}</h3>
                        <Badge variant={gig.status === 'active' ? 'default' : 'secondary'}>
                          {gig.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{gig.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium text-primary">{gig.budget}</span>
                          <span className="text-muted-foreground">{gig.proposals} proposals</span>
                          <span className="text-muted-foreground">Posted {gig.posted}</span>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-1 h-3 w-3" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="mr-1 h-3 w-3" />
                            Proposals
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="projects">
          <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>
                {userRole === 'freelancer' 
                  ? 'Projects you are currently working on' 
                  : 'Projects with hired freelancers'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No active projects yet</p>
                <Link to={userRole === 'freelancer' ? '/gigs' : '/post-gig'}>
                  <Button className="mt-4" variant="outline">
                    {userRole === 'freelancer' ? 'Find Projects' : 'Post a Project'}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings">
          <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>
                {userRole === 'freelancer' ? 'Earnings Overview' : 'Payment History'}
              </CardTitle>
              <CardDescription>
                {userRole === 'freelancer' 
                  ? 'Track your earnings and payment history' 
                  : 'View your payment transactions'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {userRole === 'freelancer' 
                    ? 'Start working on projects to see your earnings' 
                    : 'No payment history yet'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;