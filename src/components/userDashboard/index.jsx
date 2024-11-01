'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { ClipboardCopy, Facebook, Instagram, Mail, Share2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedItinerary, setSelectedItinerary] = useState(null);

  const itineraries = [
    {
      id: 1,
      name: 'Weekend in Detroit',
      date: '2023-05-15',
      description: 'Explore the best of Detroit in 48 hours',
    },
    {
      id: 2,
      name: 'Detroit Art Tour',
      date: '2023-06-22',
      description: "Discover Detroit's vibrant art scene",
    },
    {
      id: 3,
      name: 'Motor City Adventure',
      date: '2023-07-10',
      description: "Experience Detroit's automotive heritage",
    },
  ];

  const referralProgress = {
    creditsEarned: 75,
    creditsNeeded: 100,
    friendsReferred: 3,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="itineraries">Itineraries</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-semibold">John Doe</h2>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              <Button>Edit Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="itineraries">
          <Card>
            <CardHeader>
              <CardTitle>Saved Itineraries</CardTitle>
              <CardDescription>
                View and manage your saved trips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {itineraries.map((itinerary) => (
                  <li
                    key={itinerary.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">{itinerary.name}</h3>
                      <p className="text-sm text-gray-500">{itinerary.date}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedItinerary(itinerary)}
                        >
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Share Your Itinerary</DialogTitle>
                          <DialogDescription>
                            {itinerary.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <img
                              src="/placeholder.svg"
                              alt={itinerary.name}
                              className="col-span-4 h-40 w-full object-cover rounded-md"
                            />
                          </div>
                          <div className="flex justify-between">
                            <Button variant="outline" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Facebook className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Instagram className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input
                              id="itinerary-link"
                              value={`https://visit-detroit.com/itinerary/${itinerary.id}`}
                              readOnly
                            />
                            <Button size="sm" className="shrink-0">
                              Copy
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="referrals">
          <Card>
            <CardHeader>
              <CardTitle>Your Referral Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Your Referral Code
                    </CardTitle>
                    <CardDescription>
                      Share this code with your friends
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      DETROITYXDEHA
                    </code>
                    <Button size="icon" variant="ghost">
                      <ClipboardCopy className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Referral Stats</CardTitle>
                    <CardDescription>
                      See how many friends you have referred
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="p-0">
                          View Referral Progress
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Referral Progress</DialogTitle>
                          <DialogDescription>
                            Track your referral rewards
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>Credits Earned</span>
                              <span className="font-semibold">
                                ${referralProgress.creditsEarned}
                              </span>
                            </div>
                            <Progress
                              value={
                                (referralProgress.creditsEarned /
                                  referralProgress.creditsNeeded) *
                                100
                              }
                              className="w-full"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                              ${referralProgress.creditsEarned} / $
                              {referralProgress.creditsNeeded} to next reward
                            </p>
                          </div>
                          <p>
                            {referralProgress.friendsReferred} friends referred
                          </p>
                          <Button className="w-full">
                            Invite More Friends
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Invite Friends</CardTitle>
                  <CardDescription>
                    Send referral invitations to your friends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" /> Send Invitations
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
