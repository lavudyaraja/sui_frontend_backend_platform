'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuthStore } from '@/store/useAuthStore';
import { Wallet, Zap, Brain, Users, CheckCircle, ExternalLink, TrendingUp, Activity, Award, Download, Info, AlertCircle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { JSX } from 'react';

// Mock fetch function
const fetchTopContributors = async (limit: number = 5) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return [
    { id: '1', address: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12', contributions: 145, reputation: 2450 },
    { id: '2', address: '0x9f8e7d6c5b4a3c2b1a0f9e8d7c6b5a4f3c2b1a0f', contributions: 132, reputation: 2180 },
    { id: '3', address: '0x4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b', contributions: 98, reputation: 1650 },
    { id: '4', address: '0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c', contributions: 87, reputation: 1420 },
    { id: '5', address: '0x5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d', contributions: 76, reputation: 1280 },
  ];
};

export default function JoinNetworkPage(): JSX.Element {
  const { isAuthenticated, userAddress, connecting, connectWallet } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [networkStats, setNetworkStats] = useState({ contributors: 1248, models: 24, sessions: 876, gradients: 1200000 });

  const shortAddress = userAddress 
    ? `${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}`
    : '';

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkStats(prev => ({
        ...prev,
        contributors: prev.contributors + Math.floor(Math.random() * 2),
        sessions: prev.sessions + Math.floor(Math.random() * 5),
        gradients: prev.gradients + Math.floor(Math.random() * 1000)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { data: contributors = [], isLoading } = useQuery({
    queryKey: ['contributors', 'leaderboard'],
    queryFn: () => fetchTopContributors(5),
    refetchInterval: 30000,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert('Please connect your wallet first');
      return;
    }
    if (!agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setOrganization('');
      setRole('');
      setAgreeTerms(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-indigo-50 text-indigo-700 border-2 border-indigo-200">
              <Zap className="h-3.5 w-3.5 mr-2" />
              Join Our Network
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Join the Training Network</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Start contributing to decentralized AI today and work your way up through our contribution tiers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Join Form */}
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Wallet className="h-5 w-5 text-indigo-600 mr-2" />
                  Connect to Start Contributing
                </CardTitle>
                <CardDescription>
                  Connect your Sui wallet to join the decentralized training network
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isAuthenticated ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="p-5 rounded-full bg-indigo-50 border-2 border-indigo-200 mb-6">
                      <Wallet className="h-12 w-12 text-indigo-600" />
                    </div>
                    <p className="text-slate-600 mb-6 text-center leading-relaxed max-w-md">
                      Connect your Sui wallet to begin contributing to decentralized AI models. 
                      You'll be able to participate in training sessions and earn reputation points.
                    </p>
                    <Button 
                      onClick={connectWallet}
                      disabled={connecting}
                      className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 border-2 border-indigo-600"
                    >
                      <Wallet className="mr-2 h-4 w-4" />
                      {connecting ? 'Connecting...' : 'Connect Wallet'}
                    </Button>
                    <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-900">
                          <p className="font-medium mb-1">Need a Sui wallet?</p>
                          <p className="text-blue-700">Download Sui Wallet browser extension or use Suiet wallet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                        <span className="font-semibold text-emerald-800">Wallet Connected</span>
                      </div>
                      <p className="text-sm text-emerald-700">
                        Your wallet <span className="font-mono font-medium">{shortAddress}</span> is connected and ready to contribute.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your full name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="h-11 border-2 border-slate-300 focus:border-indigo-400"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-11 border-2 border-slate-300 focus:border-indigo-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization" className="text-sm font-medium">Organization (Optional)</Label>
                        <Input 
                          id="organization" 
                          placeholder="Company or university name" 
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className="h-11 border-2 border-slate-300 focus:border-indigo-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role" className="text-sm font-medium">Your Role *</Label>
                        <Select value={role} onValueChange={setRole} required>
                          <SelectTrigger className="h-11 border-2 border-slate-300">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="enthusiast">AI Enthusiast</SelectItem>
                            <SelectItem value="organization">Organization</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-xl">
                        <Checkbox 
                          id="terms" 
                          checked={agreeTerms}
                          onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor="terms" className="text-sm text-slate-700 leading-relaxed cursor-pointer">
                          I agree to the terms of service and privacy policy. I understand that my contributions will be recorded on-chain.
                        </Label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 border-2 border-indigo-600 font-semibold"
                        disabled={isSubmitting || isSubmitted || !agreeTerms}
                      >
                        {isSubmitting ? (
                          <>
                            <Activity className="mr-2 h-4 w-4 animate-spin" />
                            Joining Network...
                          </>
                        ) : isSubmitted ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Successfully Joined!
                          </>
                        ) : (
                          'Join the Training Network'
                        )}
                      </Button>
                    </form>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-center border-t-2 pt-6">
                <p className="text-sm text-slate-500 text-center leading-relaxed">
                  By joining, you agree to our terms of service and privacy policy.
                </p>
              </CardFooter>
            </Card>

            {/* Network Stats and Leaderboard */}
            <div className="space-y-6">
              
              {/* Live Network Stats */}
              <Card className="border-2 border-slate-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                    Live Network Statistics
                  </CardTitle>
                  <CardDescription>
                    Real-time stats from our decentralized AI training network
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl border-2 border-indigo-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-indigo-600" />
                        <p className="text-xs font-medium text-slate-600">Active Contributors</p>
                      </div>
                      <p className="text-3xl font-bold text-indigo-600">{networkStats.contributors.toLocaleString()}</p>
                      <Badge variant="secondary" className="mt-2 px-2 py-0.5 text-xs border border-emerald-300 bg-emerald-50 text-emerald-700">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12 today
                      </Badge>
                    </div>
                    <div className="bg-white p-5 rounded-xl border-2 border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="h-4 w-4 text-purple-600" />
                        <p className="text-xs font-medium text-slate-600">AI Models</p>
                      </div>
                      <p className="text-3xl font-bold text-purple-600">{networkStats.models}</p>
                      <Badge variant="secondary" className="mt-2 px-2 py-0.5 text-xs border border-blue-300 bg-blue-50 text-blue-700">
                        +2 this week
                      </Badge>
                    </div>
                    <div className="bg-white p-5 rounded-xl border-2 border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-4 w-4 text-blue-600" />
                        <p className="text-xs font-medium text-slate-600">Training Sessions</p>
                      </div>
                      <p className="text-3xl font-bold text-blue-600">{networkStats.sessions.toLocaleString()}</p>
                      <Badge variant="secondary" className="mt-2 px-2 py-0.5 text-xs border border-purple-300 bg-purple-50 text-purple-700">
                        Active now
                      </Badge>
                    </div>
                    <div className="bg-white p-5 rounded-xl border-2 border-emerald-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <p className="text-xs font-medium text-slate-600">Gradients Processed</p>
                      </div>
                      <p className="text-3xl font-bold text-emerald-600">{(networkStats.gradients / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card className="border-2 border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Award className="h-5 w-5 text-indigo-600 mr-2" />
                    Top Contributors
                  </CardTitle>
                  <CardDescription>
                    Leading participants in our decentralized training network
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Activity className="h-6 w-6 animate-spin text-indigo-600" />
                    </div>
                  ) : contributors.length > 0 ? (
                    <div className="space-y-3">
                      {contributors.map((contributor: any, index: number) => (
                        <div key={contributor.id} className="flex items-center justify-between p-4 bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-indigo-300 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white border-2 ${
                              index === 0 ? 'bg-yellow-400 border-yellow-500' :
                              index === 1 ? 'bg-slate-300 border-slate-400' :
                              index === 2 ? 'bg-orange-400 border-orange-500' :
                              'bg-indigo-400 border-indigo-500'
                            }`}>
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-mono font-medium text-sm text-slate-900">
                                {contributor.address.substring(0, 6)}...{contributor.address.substring(contributor.address.length - 4)}
                              </p>
                              <p className="text-xs text-slate-500">
                                {contributor.contributions} contributions
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="px-3 py-1 border border-slate-300">
                            {contributor.reputation} pts
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-600 text-center py-8">No contributors data available</p>
                  )}
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                    System Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    'Sui Wallet Extension',
                    'Minimum 4GB RAM',
                    'Stable Internet Connection',
                    'Modern Web Browser'
                  ].map((req) => (
                    <div key={req} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>{req}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Getting Started Steps */}
          <Card className="border-2 border-slate-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">How to Get Started</CardTitle>
              <CardDescription>
                Begin your journey as a decentralized AI contributor in three simple steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: 1, title: 'Connect Wallet', desc: 'Connect your Sui wallet to authenticate and track your contributions.', icon: Wallet, color: 'indigo' },
                  { step: 2, title: 'Install Client', desc: 'Download and install our training client to begin contributing compute.', icon: Download, color: 'purple' },
                  { step: 3, title: 'Start Training', desc: 'Select models to train and begin earning reputation points.', icon: Brain, color: 'blue' }
                ].map((item) => (
                  <div key={item.step} className="text-center p-6 bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-indigo-300 transition-colors">
                    <div className={`w-14 h-14 rounded-xl bg-${item.color}-600 border-2 border-${item.color}-700 flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <item.icon className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2 text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-4 border-t-2 pt-6">
              <Button asChild className="w-full md:w-auto h-12 px-8 bg-indigo-600 hover:bg-indigo-700 border-2 border-indigo-600">
                <Link href="/dashboard">
                  Go to Dashboard
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-slate-500">
                Already have the client installed? Go directly to your dashboard.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}