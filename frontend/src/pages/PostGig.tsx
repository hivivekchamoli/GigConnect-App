import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  X, 
  Plus, 
  Upload, 
  DollarSign, 
  Clock, 
  Users,
  Eye,
  Lightbulb
} from 'lucide-react';

const PostGig = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    budgetType: 'fixed',
    budgetMin: '',
    budgetMax: '',
    duration: '',
    experienceLevel: '',
    skills: [] as string[],
    attachments: [] as File[]
  });

  const [currentSkill, setCurrentSkill] = useState('');

  const categories = [
    'Web Development',
    'Mobile Development', 
    'Design & Creative',
    'Writing & Translation',
    'Digital Marketing',
    'Data Science',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'Business',
    'Lifestyle'
  ];

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level', description: 'Looking for freelancers with little to no experience' },
    { value: 'intermediate', label: 'Intermediate', description: 'Looking for substantial experience in this skill' },
    { value: 'expert', label: 'Expert', description: 'Looking for comprehensive and deep experience' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setCurrentSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Gig posted:', formData);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold mb-2">Post a New Gig</h1>
        <p className="text-muted-foreground">
          Tell us about your project and find the perfect freelancer
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card className="bg-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                1
              </div>
              Basic Information
            </CardTitle>
            <CardDescription>
              Start with the basics - give your gig a title and choose a category
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Gig Title *</Label>
              <Input
                id="title"
                placeholder="e.g. Build a responsive website with React"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                required
              />
              <p className="text-sm text-muted-foreground">
                A good title is clear and describes what you need done
              </p>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label>Category *</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Project Description */}
        <Card className="bg-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                2
              </div>
              Project Description
            </CardTitle>
            <CardDescription>
              Describe your project in detail to attract the right freelancers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe what you need, include any specific requirements, timeline, and expectations..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={8}
                required
              />
              <div className="bg-accent/50 border border-accent rounded-lg p-4 mt-4">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Tips for a great description:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Be specific about what you want delivered</li>
                      <li>• Mention your industry or business context</li>
                      <li>• Include any specific requirements or preferences</li>
                      <li>• Describe your ideal freelancer's experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Required */}
        <Card className="bg-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                3
              </div>
              Skills Required
            </CardTitle>
            <CardDescription>
              What skills should your freelancer have?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="e.g. React, JavaScript, Node.js"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                />
                <Button type="button" onClick={addSkill} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              {formData.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center space-x-1">
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Budget and Timeline */}
        <Card className="bg-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  4
                </div>
                Budget & Timeline
              </CardTitle>
              <CardDescription>
                Set your budget and expected timeline for the project
              </CardDescription>
            </CardHeader>
          <CardContent className="space-y-6">
            {/* Budget Type */}
            <div className="space-y-4">
              <Label>Budget Type *</Label>
              <RadioGroup 
                value={formData.budgetType} 
                onValueChange={(value) => handleInputChange('budgetType', value)}
                className="grid grid-cols-1 gap-4"
              >
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors">
                  <RadioGroupItem value="fixed" id="fixed" />
                  <div className="flex items-center flex-1">
                    <DollarSign className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <Label htmlFor="fixed" className="font-medium cursor-pointer">
                        Fixed Price
                      </Label>
                      <p className="text-sm text-muted-foreground">Pay a set amount for the entire project</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors">
                  <RadioGroupItem value="hourly" id="hourly" />
                  <div className="flex items-center flex-1">
                    <Clock className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <Label htmlFor="hourly" className="font-medium cursor-pointer">
                        Hourly Rate
                      </Label>
                      <p className="text-sm text-muted-foreground">Pay by the hour for ongoing work</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Budget Range */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budgetMin">
                  {formData.budgetType === 'fixed' ? 'Minimum Budget' : 'Min Hourly Rate'} *
                </Label>
                <Input
                  id="budgetMin"
                  type="number"
                  placeholder={formData.budgetType === 'fixed' ? '500' : '25'}
                  value={formData.budgetMin}
                  onChange={(e) => handleInputChange('budgetMin', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budgetMax">
                  {formData.budgetType === 'fixed' ? 'Maximum Budget' : 'Max Hourly Rate'} *
                </Label>
                <Input
                  id="budgetMax"
                  type="number"
                  placeholder={formData.budgetType === 'fixed' ? '2000' : '75'}
                  value={formData.budgetMax}
                  onChange={(e) => handleInputChange('budgetMax', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <Label htmlFor="duration">Expected Duration *</Label>
              <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3-days">1-3 days</SelectItem>
                  <SelectItem value="1-week">1 week</SelectItem>
                  <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                  <SelectItem value="6-months-plus">6+ months</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Experience Level */}
        <Card className="bg-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                5
              </div>
              Experience Level
            </CardTitle>
            <CardDescription>
              What level of experience should your freelancer have?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              value={formData.experienceLevel} 
              onValueChange={(value) => handleInputChange('experienceLevel', value)}
              className="space-y-4"
            >
              {experienceLevels.map((level) => (
                <div key={level.value} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors">
                  <RadioGroupItem value={level.value} id={level.value} />
                  <div className="flex items-center flex-1">
                    <Users className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <Label htmlFor={level.value} className="font-medium cursor-pointer">
                        {level.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Attachments */}
        <Card className="bg-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                6
              </div>
              Attachments (Optional)
            </CardTitle>
            <CardDescription>
              Upload any files that will help freelancers understand your project better
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">
                Drag and drop files here, or click to browse
              </p>
              <p className="text-sm text-muted-foreground">
                Support for PDF, DOC, DOCX, XLS, XLSX, PNG, JPG (max 10MB each)
              </p>
              <Button variant="outline" className="mt-4">
                Choose Files
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <Button variant="outline" size="lg">
            <Eye className="mr-2 h-4 w-4" />
            Preview Gig
          </Button>
          <Button type="submit" size="lg" className="bg-gradient-hero hover:opacity-90">
            Post Your Gig
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostGig;