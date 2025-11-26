"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Trophy, 
  TrendingUp, 
  Award, 
  Star, 
  Target,
  Search,
  Download,
  Filter,
  Clock,
  GitBranch,
  Zap,
  Users,
  Activity,
  Calendar,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Medal
} from 'lucide-react';

interface Contributor {
  id: string;
  address: string;
  reputation: number;
  contributions: number;
  rank: number;
  joinedAt: string;
  tier: 'Basic' | 'Power' | 'Elite' | 'Legend';
  avatar?: string;
  successRate: number;
  avgAccuracy: number;
  totalRewards: number;
  activeModels: number;
  lastActive: string;
  achievements: string[];
  monthlyContributions: number[];
}

interface Activity {
  id: string;
  contributorId: string;
  type: 'training' | 'validation' | 'reward' | 'achievement';
  description: string;
  timestamp: string;
  value?: number;
}

const ContributorsDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('all-time');
  const [selectedContributor, setSelectedContributor] = useState<string | null>(null);

  const contributors: Contributor[] = [
    {
      id: '1',
      address: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
      reputation: 4850,
      contributions: 187,
      rank: 1,
      joinedAt: '2024-01-15T10:30:00Z',
      tier: 'Legend',
      successRate: 98.5,
      avgAccuracy: 94.2,
      totalRewards: 12450,
      activeModels: 8,
      lastActive: '2 hours ago',
      achievements: ['First Place', 'Century Club', 'Accuracy Master', 'Speed Demon'],
      monthlyContributions: [45, 52, 48, 42]
    },
    {
      id: '2',
      address: '0x2b3c4d5e6f7890abcdef1234567890abcdef123',
      reputation: 3920,
      contributions: 156,
      rank: 2,
      joinedAt: '2024-01-10T14:22:00Z',
      tier: 'Legend',
      successRate: 96.8,
      avgAccuracy: 92.7,
      totalRewards: 10230,
      activeModels: 6,
      lastActive: '5 hours ago',
      achievements: ['Top 10', 'Consistency King', 'Team Player'],
      monthlyContributions: [38, 42, 39, 37]
    },
    {
      id: '3',
      address: '0x3c4d5e6f7890abcdef1234567890abcdef12345',
      reputation: 3450,
      contributions: 134,
      rank: 3,
      joinedAt: '2024-01-08T09:15:00Z',
      tier: 'Elite',
      successRate: 95.2,
      avgAccuracy: 91.3,
      totalRewards: 8960,
      activeModels: 5,
      lastActive: '1 day ago',
      achievements: ['Top 10', 'Fast Learner', 'Quality Control'],
      monthlyContributions: [32, 35, 34, 33]
    },
    {
      id: '4',
      address: '0x4d5e6f7890abcdef1234567890abcdef1234567',
      reputation: 2840,
      contributions: 112,
      rank: 4,
      joinedAt: '2024-01-12T16:45:00Z',
      tier: 'Elite',
      successRate: 93.7,
      avgAccuracy: 89.8,
      totalRewards: 7340,
      activeModels: 4,
      lastActive: '3 hours ago',
      achievements: ['Dedicated', 'Rising Star'],
      monthlyContributions: [28, 30, 28, 26]
    },
    {
      id: '5',
      address: '0x5e6f7890abcdef1234567890abcdef123456789',
      reputation: 2310,
      contributions: 89,
      rank: 5,
      joinedAt: '2024-01-05T11:30:00Z',
      tier: 'Power',
      successRate: 92.1,
      avgAccuracy: 88.4,
      totalRewards: 5980,
      activeModels: 3,
      lastActive: '12 hours ago',
      achievements: ['Reliable', 'Newcomer'],
      monthlyContributions: [22, 24, 22, 21]
    },
    {
      id: '6',
      address: '0x6f7890abcdef1234567890abcdef1234567890a',
      reputation: 1890,
      contributions: 73,
      rank: 6,
      joinedAt: '2024-01-03T13:20:00Z',
      tier: 'Power',
      successRate: 90.5,
      avgAccuracy: 86.9,
      totalRewards: 4870,
      activeModels: 3,
      lastActive: '1 day ago',
      achievements: ['Steady'],
      monthlyContributions: [18, 20, 18, 17]
    },
    {
      id: '7',
      address: '0x7890abcdef1234567890abcdef1234567890abc',
      reputation: 1450,
      contributions: 58,
      rank: 7,
      joinedAt: '2024-01-07T15:10:00Z',
      tier: 'Basic',
      successRate: 88.3,
      avgAccuracy: 85.2,
      totalRewards: 3760,
      activeModels: 2,
      lastActive: '2 days ago',
      achievements: ['Beginner'],
      monthlyContributions: [14, 16, 15, 13]
    },
    {
      id: '8',
      address: '0x890abcdef1234567890abcdef1234567890abcd',
      reputation: 1120,
      contributions: 45,
      rank: 8,
      joinedAt: '2024-01-09T17:05:00Z',
      tier: 'Basic',
      successRate: 86.7,
      avgAccuracy: 83.5,
      totalRewards: 2890,
      activeModels: 2,
      lastActive: '3 days ago',
      achievements: ['First Steps'],
      monthlyContributions: [11, 13, 12, 9]
    },
  ];

  const recentActivities: Activity[] = [
    {
      id: '1',
      contributorId: '1',
      type: 'training',
      description: 'Completed training session for ResNet-50',
      timestamp: '2 hours ago',
      value: 450
    },
    {
      id: '2',
      contributorId: '2',
      type: 'reward',
      description: 'Received reward for quality contribution',
      timestamp: '5 hours ago',
      value: 230
    },
    {
      id: '3',
      contributorId: '1',
      type: 'achievement',
      description: 'Unlocked "Century Club" achievement',
      timestamp: '1 day ago'
    },
    {
      id: '4',
      contributorId: '3',
      type: 'validation',
      description: 'Validated gradient submission',
      timestamp: '1 day ago',
      value: 180
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Legend':
        return 'bg-amber-100 text-amber-900 border-2 border-amber-900';
      case 'Elite':
        return 'bg-purple-100 text-purple-900 border-2 border-purple-900';
      case 'Power':
        return 'bg-blue-100 text-blue-900 border-2 border-blue-900';
      default:
        return 'bg-zinc-100 text-zinc-900 border-2 border-zinc-900';
    }
  };

  const getRankDisplay = (rank: number) => {
    if (rank === 1) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-100 border-2 border-amber-900 rounded-lg flex items-center justify-center">
            <Trophy className="w-4 h-4 text-amber-900" />
          </div>
          <span className="font-bold text-amber-900">1st</span>
        </div>
      );
    } else if (rank === 2) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-100 border-2 border-zinc-400 rounded-lg flex items-center justify-center">
            <Medal className="w-4 h-4 text-zinc-600" />
          </div>
          <span className="font-bold text-zinc-600">2nd</span>
        </div>
      );
    } else if (rank === 3) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-100 border-2 border-orange-900 rounded-lg flex items-center justify-center">
            <Medal className="w-4 h-4 text-orange-900" />
          </div>
          <span className="font-bold text-orange-900">3rd</span>
        </div>
      );
    }
    return <span className="font-bold text-zinc-900">#{rank}</span>;
  };

  const filteredContributors = contributors.filter(c => {
    const matchesSearch = c.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier = selectedTier === 'all' || c.tier.toLowerCase() === selectedTier.toLowerCase();
    return matchesSearch && matchesTier;
  });

  const selectedContributorData = contributors.find(c => c.id === selectedContributor);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-2 border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900">Contributors Leaderboard</h1>
              <p className="text-zinc-600 mt-1">Top performers in decentralized AI training</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-2 border-zinc-200">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-zinc-900 hover:bg-zinc-800 text-white">
                <TrendingUp className="w-4 h-4 mr-2" />
                View My Stats
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-zinc-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-600 mb-1">Total Contributors</div>
                  <div className="text-3xl font-bold text-zinc-900">15,734</div>
                  <div className="text-xs text-green-700 mt-1">+234 this week</div>
                </div>
                <div className="p-3 bg-zinc-100 rounded-lg">
                  <Users className="w-6 h-6 text-zinc-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-zinc-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-600 mb-1">Active Sessions</div>
                  <div className="text-3xl font-bold text-zinc-900">892</div>
                  <div className="text-xs text-blue-700 mt-1">Training now</div>
                </div>
                <div className="p-3 bg-zinc-100 rounded-lg">
                  <Activity className="w-6 h-6 text-zinc-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-zinc-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-600 mb-1">Total Rewards</div>
                  <div className="text-3xl font-bold text-zinc-900">8.9M</div>
                  <div className="text-xs text-zinc-600 mt-1">SUI distributed</div>
                </div>
                <div className="p-3 bg-zinc-100 rounded-lg">
                  <Award className="w-6 h-6 text-zinc-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-zinc-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-600 mb-1">Avg Success Rate</div>
                  <div className="text-3xl font-bold text-zinc-900">94.2%</div>
                  <div className="text-xs text-green-700 mt-1">+2.1% from last month</div>
                </div>
                <div className="p-3 bg-zinc-100 rounded-lg">
                  <Target className="w-6 h-6 text-zinc-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-2 border-zinc-200 mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <Input
                    placeholder="Search by address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-2 border-zinc-200"
                  />
                </div>
              </div>
              <Select value={selectedTier} onValueChange={setSelectedTier}>
                <SelectTrigger className="w-48 border-2 border-zinc-200">
                  <SelectValue placeholder="Filter by tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tiers</SelectItem>
                  <SelectItem value="legend">Legend</SelectItem>
                  <SelectItem value="elite">Elite</SelectItem>
                  <SelectItem value="power">Power</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-48 border-2 border-zinc-200">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-time">All Time</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-2 border-zinc-200">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard Table */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-zinc-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Global Rankings</span>
                  <Badge variant="outline" className="border-2 border-zinc-200">
                    {filteredContributors.length} Contributors
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Top performers across all models and training sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2 border-zinc-200">
                      <TableHead className="w-32">Rank</TableHead>
                      <TableHead>Contributor</TableHead>
                      <TableHead className="text-right">Reputation</TableHead>
                      <TableHead className="text-right">Success Rate</TableHead>
                      <TableHead className="text-center">Tier</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContributors.map((contributor) => (
                      <TableRow 
                        key={contributor.id}
                        className="border-b border-zinc-200 hover:bg-zinc-50 cursor-pointer"
                        onClick={() => setSelectedContributor(contributor.id)}
                      >
                        <TableCell>
                          {getRankDisplay(contributor.rank)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-zinc-200">
                              <AvatarFallback className="bg-zinc-100 text-zinc-700 font-medium">
                                {contributor.address.substring(2, 4).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-zinc-900">
                                {contributor.address.substring(0, 8)}...{contributor.address.substring(contributor.address.length - 6)}
                              </div>
                              <div className="text-xs text-zinc-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {contributor.lastActive}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="font-bold text-zinc-900">
                            {contributor.reputation.toLocaleString()}
                          </div>
                          <div className="text-xs text-zinc-500">
                            {contributor.contributions} contributions
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="font-medium text-zinc-900">
                            {contributor.successRate}%
                          </div>
                          <div className="text-xs text-zinc-500">
                            Avg: {contributor.avgAccuracy}%
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge className={getTierColor(contributor.tier)}>
                            {contributor.tier}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          {contributor.lastActive.includes('hours') || contributor.lastActive.includes('minutes') ? (
                            <Badge className="bg-green-100 text-green-900 border-2 border-green-900">
                              <Wifi className="w-3 h-3 mr-1" />
                              Active
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-2 border-zinc-200">
                              <Clock className="w-3 h-3 mr-1" />
                              Idle
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tier Information */}
            {/* <Card className="border-2 border-zinc-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Star className="w-5 h-5 text-zinc-700" />
                  Contributor Tiers
                </CardTitle>
                <CardDescription>
                  Level up by earning reputation points
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-zinc-50 border-2 border-zinc-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-zinc-100 text-zinc-900 border-2 border-zinc-900">
                      Basic
                    </Badge>
                    <span className="text-sm font-medium text-zinc-900">0-1,500</span>
                  </div>
                  <p className="text-xs text-zinc-600">Starting tier for new contributors</p>
                </div>

                <div className="p-3 bg-blue-50 border-2 border-blue-900 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-900 border-2 border-blue-900">
                      Power
                    </Badge>
                    <span className="text-sm font-medium text-blue-900">1,501-2,500</span>
                  </div>
                  <p className="text-xs text-blue-800">Enhanced rewards and features</p>
                </div>

                <div className="p-3 bg-purple-50 border-2 border-purple-900 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-100 text-purple-900 border-2 border-purple-900">
                      Elite
                    </Badge>
                    <span className="text-sm font-medium text-purple-900">2,501-4,000</span>
                  </div>
                  <p className="text-xs text-purple-800">Priority access and bonuses</p>
                </div>

                <div className="p-3 bg-amber-50 border-2 border-amber-900 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-amber-100 text-amber-900 border-2 border-amber-900">
                      Legend
                    </Badge>
                    <span className="text-sm font-medium text-amber-900">4,000+</span>
                  </div>
                  <p className="text-xs text-amber-800">Elite status with exclusive perks</p>
                </div>
              </CardContent>
            </Card> */}

            {/* Recent Activity */}
            <Card className="border-2 border-zinc-200">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
                <CardDescription>Latest contributor actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => {
                    const contributor = contributors.find(c => c.id === activity.contributorId);
                    return (
                      <div key={activity.id} className="flex gap-3 pb-4 border-b border-zinc-200 last:border-0 last:pb-0">
                        <div className="p-2 bg-zinc-100 rounded-lg h-fit">
                          {activity.type === 'training' && <Cpu className="w-4 h-4 text-zinc-700" />}
                          {activity.type === 'validation' && <CheckCircle className="w-4 h-4 text-zinc-700" />}
                          {activity.type === 'reward' && <Award className="w-4 h-4 text-zinc-700" />}
                          {activity.type === 'achievement' && <Trophy className="w-4 h-4 text-zinc-700" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-zinc-900 font-medium truncate">
                            {contributor?.address.substring(0, 8)}...
                          </p>
                          <p className="text-xs text-zinc-600">{activity.description}</p>
                          <p className="text-xs text-zinc-500 mt-1">{activity.timestamp}</p>
                        </div>
                        {activity.value && (
                          <div className="text-sm font-bold text-zinc-900">
                            +{activity.value}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-2 border-zinc-200">
              <CardHeader>
                <CardTitle className="text-lg">Performance Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
                  <span className="text-sm text-zinc-700">Top Accuracy</span>
                  <span className="font-bold text-zinc-900">94.2%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
                  <span className="text-sm text-zinc-700">Avg Reward</span>
                  <span className="font-bold text-zinc-900">567 SUI</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
                  <span className="text-sm text-zinc-700">Active Models</span>
                  <span className="font-bold text-zinc-900">1,234</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Contributor View */}
        {selectedContributorData && (
          <Card className="border-2 border-zinc-200 mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-zinc-200">
                    <AvatarFallback className="bg-zinc-100 text-zinc-700 text-xl font-bold">
                      {selectedContributorData.address.substring(2, 4).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">
                      {selectedContributorData.address}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge className={getTierColor(selectedContributorData.tier)}>
                        {selectedContributorData.tier}
                      </Badge>
                      <span>Rank #{selectedContributorData.rank}</span>
                      <span>•</span>
                      <span>Joined {new Date(selectedContributorData.joinedAt).toLocaleDateString()}</span>
                    </CardDescription>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedContributor(null)}
                  className="border-2 border-zinc-200"
                >
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="border-b border-zinc-200 bg-transparent w-full justify-start rounded-none h-auto p-0 mb-6">
                  <TabsTrigger 
                    value="overview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 data-[state=active]:bg-transparent"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="performance"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 data-[state=active]:bg-transparent"
                  >
                    Performance
                  </TabsTrigger>
                  <TabsTrigger 
                    value="achievements"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 data-[state=active]:bg-transparent"
                  >
                    Achievements
                  </TabsTrigger>
                  <TabsTrigger 
                    value="history"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 data-[state=active]:bg-transparent"
                  >
                    History
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-4 gap-4">
                    <Card className="border-2 border-zinc-200">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-zinc-900">
                            {selectedContributorData.reputation.toLocaleString()}
                          </div>
                          <div className="text-sm text-zinc-600 mt-1">Reputation</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-zinc-200">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-zinc-900">
                            {selectedContributorData.contributions}
                          </div>
                          <div className="text-sm text-zinc-600 mt-1">Contributions</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-zinc-200">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-zinc-900">
                            {selectedContributorData.successRate}%
                          </div>
                          <div className="text-sm text-zinc-600 mt-1">Success Rate</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-zinc-200">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-zinc-900">
                            {selectedContributorData.totalRewards.toLocaleString()}
                          </div>
                          <div className="text-sm text-zinc-600 mt-1">Total Rewards (SUI)</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <Card className="border-2 border-zinc-200">
                      <CardHeader>
                        <CardTitle className="text-base">Activity Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600">Active Models</span>
                          <span className="font-bold text-zinc-900">{selectedContributorData.activeModels}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600">Average Accuracy</span>
                          <span className="font-bold text-zinc-900">{selectedContributorData.avgAccuracy}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600">Last Active</span>
                          <span className="font-bold text-zinc-900">{selectedContributorData.lastActive}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-zinc-200">
                      <CardHeader>
                        <CardTitle className="text-base">Monthly Contributions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {selectedContributorData.monthlyContributions.map((count, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-zinc-600">Month {index + 1}</span>
                                <span className="font-medium text-zinc-900">{count}</span>
                              </div>
                              <div className="w-full bg-zinc-100 rounded-full h-2 border border-zinc-200">
                                <div 
                                  className="bg-zinc-900 h-full rounded-full"
                                  style={{ width: `${(count / Math.max(...selectedContributorData.monthlyContributions)) * 100}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="performance" className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="border-2 border-zinc-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-zinc-600">Training Speed</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-zinc-900">Fast</div>
                        <div className="text-xs text-zinc-500 mt-1">Top 5% globally</div>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-zinc-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-zinc-600">Quality Score</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-zinc-900">9.6/10</div>
                        <div className="text-xs text-zinc-500 mt-1">Excellent quality</div>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-zinc-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-zinc-600">Reliability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-zinc-900">99.2%</div>
                        <div className="text-xs text-zinc-500 mt-1">Highly reliable</div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="achievements" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {selectedContributorData.achievements.map((achievement, index) => (
                      <Card key={index} className="border-2 border-zinc-200">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-amber-100 border-2 border-amber-900 rounded-lg">
                              <Trophy className="w-6 h-6 text-amber-900" />
                            </div>
                            <div>
                              <div className="font-bold text-zinc-900">{achievement}</div>
                              <div className="text-xs text-zinc-600">Unlocked</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="flex items-center gap-4 p-4 border-2 border-zinc-200 rounded-lg">
                        <div className="p-2 bg-zinc-100 rounded-lg">
                          <GitBranch className="w-4 h-4 text-zinc-700" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-zinc-900">Training Session #{item}</div>
                          <div className="text-sm text-zinc-600">Model: ResNet-50 • Accuracy: 93.{item}%</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-zinc-900">+{120 + item * 10} pts</div>
                          <div className="text-xs text-zinc-500">{item} days ago</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ContributorsDashboard;