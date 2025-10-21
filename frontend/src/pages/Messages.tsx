import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Search, 
  Send, 
  Paperclip, 
  Phone, 
  Video, 
  MoreHorizontal,
  Star,
  Clock,
  CheckCircle2
} from 'lucide-react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      name: "TechStart Inc.",
      project: "React Dashboard Development",
      lastMessage: "Thanks for the update! The dashboard looks great.",
      timestamp: "2 min ago",
      unread: 0,
      online: true,
      avatar: "TS"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      project: "E-commerce Website",
      lastMessage: "I'll have the wireframes ready by tomorrow",
      timestamp: "1 hour ago",
      unread: 2,
      online: false,
      avatar: "SJ"
    },
    {
      id: 3,
      name: "Digital Agency Co.",
      project: "Mobile App Design",
      lastMessage: "Can we schedule a call for Monday?",
      timestamp: "3 hours ago",
      unread: 1,
      online: true,
      avatar: "DA"
    },
    {
      id: 4,
      name: "StartupXYZ",
      project: "Full Stack Development",
      lastMessage: "Perfect! Let's move forward with this approach.",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      avatar: "SX"
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: "TechStart Inc.",
      content: "Hi! I saw your proposal for the React dashboard project. Very impressive portfolio!",
      timestamp: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      senderId: 1,
      senderName: "You",
      content: "Thank you! I'm excited about this project. I have extensive experience with React and modern dashboard frameworks.",
      timestamp: "10:35 AM",
      isOwn: true
    },
    {
      id: 3,
      senderId: 2,
      senderName: "TechStart Inc.",
      content: "That's great to hear. Could you walk me through your approach for the data visualization components?",
      timestamp: "10:40 AM",
      isOwn: false
    },
    {
      id: 4,
      senderId: 1,
      senderName: "You",
      content: "Absolutely! I'd recommend using Chart.js or D3.js for the visualizations, depending on the complexity. For your use case, I think Chart.js would be perfect - it's lightweight and handles real-time updates well.",
      timestamp: "10:45 AM",
      isOwn: true
    },
    {
      id: 5,
      senderId: 2,
      senderName: "TechStart Inc.",
      content: "Sounds perfect. What about the authentication system?",
      timestamp: "11:00 AM",
      isOwn: false
    },
    {
      id: 6,
      senderId: 1,
      senderName: "You",
      content: "I'll implement JWT-based authentication with role-based access control. Users will have different permission levels based on their roles.",
      timestamp: "11:05 AM",
      isOwn: true
    },
    {
      id: 7,
      senderId: 2,
      senderName: "TechStart Inc.",
      content: "Thanks for the update! The dashboard looks great.",
      timestamp: "2:30 PM",
      isOwn: false
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground">
          Communicate with clients and freelancers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Conversations List */}
        <Card className="bg-card border-0 shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              <div className="space-y-1 p-4 pt-0">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedChat === conversation.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                          selectedChat === conversation.id
                            ? 'bg-primary-foreground text-primary'
                            : 'bg-gradient-hero text-primary-foreground'
                        }`}>
                          {conversation.avatar}
                        </div>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-medium text-sm truncate ${
                            selectedChat === conversation.id ? 'text-primary-foreground' : 'text-foreground'
                          }`}>
                            {conversation.name}
                          </h4>
                          <span className={`text-xs ${
                            selectedChat === conversation.id 
                              ? 'text-primary-foreground/70' 
                              : 'text-muted-foreground'
                          }`}>
                            {conversation.timestamp}
                          </span>
                        </div>
                        <p className={`text-xs mb-1 ${
                          selectedChat === conversation.id
                            ? 'text-primary-foreground/70'
                            : 'text-muted-foreground'
                        }`}>
                          {conversation.project}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className={`text-xs truncate ${
                            selectedChat === conversation.id
                              ? 'text-primary-foreground/80'
                              : 'text-muted-foreground'
                          }`}>
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <Badge 
                              variant="destructive" 
                              className="ml-2 px-2 py-0 text-xs min-w-[20px] h-5"
                            >
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <div className="lg:col-span-2">
          {selectedConversation ? (
            <Card className="bg-card border-0 shadow-md h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center font-semibold text-primary-foreground">
                        {selectedConversation.avatar}
                      </div>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedConversation.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>{selectedConversation.project}</span>
                        {selectedConversation.online && (
                          <Badge variant="outline" className="text-xs">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                            Online
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] rounded-lg p-3 ${
                        message.isOwn
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent text-foreground'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <div className={`flex items-center justify-end space-x-1 mt-2 text-xs ${
                          message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          <span>{message.timestamp}</span>
                          {message.isOwn && (
                            <CheckCircle2 className="h-3 w-3" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <CardContent className="border-t border-border p-4">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" type="button">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="sm" className="bg-gradient-hero hover:opacity-90">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card border-0 shadow-md h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No conversation selected</h3>
                <p className="text-muted-foreground">
                  Choose a conversation from the sidebar to start messaging
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;