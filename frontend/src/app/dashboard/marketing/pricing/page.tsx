'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle, Star, Users, Zap, Award, Crown, Server, BarChart3, Trophy, Lock, Database, TrendingUp, Shield, Brain, Clock, Gauge } from 'lucide-react';
import Link from 'next/link';

export default function ContributionTiersPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tiers = [
    {
      name: "Basic Contributor",
      description: "Perfect for individuals getting started",
      icon: Users,
      reputation: "1-100 pts",
      reputationMin: 1,
      reputationMax: 100,
      features: [
        "Contribute to public models",
        "Basic reputation tracking",
        "Community support",
        "5GB storage on Walrus",
        "Standard training sessions",
        "Basic leaderboard visibility",
        "Access to documentation",
        "Monthly contribution reports"
      ],
      badge: "Bronze",
      badgeColor: "bg-amber-600 border-amber-700",
      cardColor: "border-amber-200 hover:border-amber-300",
      bgColor: "bg-amber-50",
      cta: "Join Network",
    },
    {
      name: "Power Trainer",
      description: "For serious contributors and researchers",
      icon: Zap,
      reputation: "101-1,000 pts",
      reputationMin: 101,
      reputationMax: 1000,
      features: [
        "Priority access to new models",
        "Advanced reputation analytics",
        "Priority support",
        "50GB storage on Walrus",
        "Enhanced training sessions",
        "Premium leaderboard visibility",
        "Early access to model updates",
        "Contribution performance insights",
        "Weekly detailed analytics",
        "API access for automation"
      ],
      badge: "Silver",
      badgeColor: "bg-slate-400 border-slate-500",
      cardColor: "border-indigo-300 hover:border-indigo-400",
      bgColor: "bg-indigo-50",
      cta: "Upgrade Contribution",
      popular: true,
    },
    {
      name: "Elite Node",
      description: "For universities and organizations",
      icon: Crown,
      reputation: "1,001+ pts",
      reputationMin: 1001,
      reputationMax: null,
      features: [
        "Unlimited model access",
        "Dedicated support channel",
        "Unlimited Walrus storage",
        "High-performance training sessions",
        "Top leaderboard placement",
        "Exclusive model previews",
        "Custom model development",
        "Team management dashboard",
        "Contribution impact analytics",
        "Direct researcher collaboration",
        "Priority bug fixes",
        "Custom SLA agreements"
      ],
      badge: "Gold",
      badgeColor: "bg-yellow-500 border-yellow-600",
      cardColor: "border-yellow-300 hover:border-yellow-400",
      bgColor: "bg-yellow-50",
      cta: "Become Elite",
    },
  ];

  const comparisonFeatures = [
    { category: 'Access', items: ['Model Access', 'Storage Limit', 'Training Speed', 'Support Level'] },
    { category: 'Features', items: ['Analytics', 'API Access', 'Team Management', 'Custom Models'] },
    { category: 'Rewards', items: ['Reputation Multiplier', 'Token Rewards', 'Exclusive Benefits', 'Recognition'] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-50 text-indigo-800 border-2 border-indigo-200 px-4 py-2">
            <Star className="h-4 w-4 mr-1" />
            Contribution-Based Tiers
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contribution Tiers</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Earn reputation points and unlock benefits based on your contributions to decentralized AI training
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {tiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`relative border-2 transition-all duration-300 ${
                tier.popular ? 'border-indigo-400' : tier.cardColor
              } ${selectedTier === tier.name ? 'ring-4 ring-indigo-300' : ''}`}
              onClick={() => setSelectedTier(tier.name)}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-indigo-600 text-white border-2 border-indigo-700 px-4 py-1">
                    <Zap className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-xl ${tier.bgColor} border-2 ${tier.cardColor}`}>
                    <tier.icon className="h-8 w-8 text-slate-700" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6 text-center pb-6 border-b-2 border-slate-100">
                  <Badge className={`${tier.badgeColor} text-white border-2 mb-3`}>
                    {tier.badge} Tier
                  </Badge>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{tier.reputation}</div>
                  <div className="text-sm text-slate-600">Reputation Points</div>
                </div>
                
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6 border-t-2 border-slate-100">
                <Button 
                  asChild
                  className={`w-full h-11 border-2 ${
                    tier.popular 
                      ? 'bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white' 
                      : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  <Link href="/dashboard/marketing/join">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Comparison Tables */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Detailed Tier Comparison</h2>
            <p className="text-slate-600">Compare features and benefits across all contribution tiers</p>
          </div>
          
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white border-2 border-slate-200">
              <TabsTrigger value="features" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Features</TabsTrigger>
              <TabsTrigger value="rewards" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Rewards</TabsTrigger>
              <TabsTrigger value="access" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Access Levels</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features">
              <div className="overflow-x-auto bg-white border-2 border-slate-200 rounded-xl">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      {tiers.map(tier => (
                        <th key={tier.name} className="text-center p-4">
                          <div className="flex flex-col items-center gap-2">
                            <span className="font-semibold">{tier.name}</span>
                            <Badge className={tier.badgeColor} variant="secondary">
                              {tier.badge}
                            </Badge>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: 'Model Access', values: ['Public Only', 'Priority Access', 'Unlimited Access'] },
                      { label: 'Storage', values: ['5GB Walrus', '50GB Walrus', 'Unlimited'] },
                      { label: 'Training Sessions', values: ['Standard', 'Enhanced', 'High-Performance'] },
                      { label: 'Support', values: ['Community', 'Priority', 'Dedicated'] },
                      { label: 'Analytics', values: ['Basic', 'Advanced', 'Enterprise'] },
                      { label: 'API Access', values: ['—', 'Standard', 'Full'] }
                    ].map((row, idx) => (
                      <tr key={row.label} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <td className="p-4 font-medium">{row.label}</td>
                        {row.values.map((value, i) => (
                          <td key={i} className="text-center p-4 text-slate-700">{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="rewards">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    tier: 'Bronze', 
                    title: 'Bronze Tier Rewards',
                    icon: Award,
                    color: 'amber',
                    rewards: [
                      'Base reputation points',
                      'Community recognition',
                      'Basic training certificates',
                      'Monthly achievement badges'
                    ]
                  },
                  { 
                    tier: 'Silver', 
                    title: 'Silver Tier Rewards',
                    icon: Trophy,
                    color: 'slate',
                    rewards: [
                      '2x reputation multiplier',
                      'Exclusive contributor badges',
                      'Early access to features',
                      'Performance analytics',
                      'Quarterly bonus rewards'
                    ]
                  },
                  { 
                    tier: 'Gold', 
                    title: 'Gold Tier Rewards',
                    icon: Crown,
                    color: 'yellow',
                    rewards: [
                      '5x reputation multiplier',
                      'Elite contributor status',
                      'Custom model rights',
                      'Impact analytics dashboard',
                      'Team management tools',
                      'Annual recognition awards'
                    ]
                  }
                ].map((item) => (
                  <Card key={item.tier} className={`border-2 border-${item.color}-300`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                        <span className="text-lg">{item.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.rewards.map((reward) => (
                          <li key={reward} className="flex items-start gap-2">
                            <CheckCircle className={`h-4 w-4 text-${item.color}-600 shrink-0 mt-0.5`} />
                            <span className="text-sm text-slate-700">{reward}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="access">
              <Card className="border-2 border-slate-200">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: 'Public Access',
                        icon: Lock,
                        color: 'blue',
                        items: ['Basic models', 'Standard documentation', 'Community forums', 'Public datasets']
                      },
                      {
                        title: 'Priority Access',
                        icon: Server,
                        color: 'purple',
                        items: ['Advanced models', 'Extended documentation', 'Priority support', 'Beta features', 'Enhanced datasets']
                      },
                      {
                        title: 'Elite Access',
                        icon: BarChart3,
                        color: 'indigo',
                        items: ['All models + custom', 'Complete documentation', 'Dedicated support', 'Exclusive features', 'Research collaboration', 'Private datasets']
                      }
                    ].map((access) => (
                      <div key={access.title}>
                        <h3 className={`font-semibold text-lg mb-4 flex items-center gap-2 text-${access.color}-600`}>
                          <access.icon className="h-5 w-5" />
                          {access.title}
                        </h3>
                        <ul className="space-y-2">
                          {access.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm">
                              <CheckCircle className={`h-4 w-4 text-${access.color}-600`} />
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* How to Progress */}
        <Card className="max-w-4xl mx-auto mb-16 border-2 border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
              How to Progress Through Tiers
            </CardTitle>
            <CardDescription>
              Earn reputation points and advance to higher tiers by contributing to the network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { 
                  icon: Brain, 
                  title: 'Contribute Training Data', 
                  desc: 'Run training iterations and submit gradients to earn reputation points',
                  points: '+5-20 pts per session'
                },
                { 
                  icon: Clock, 
                  title: 'Maintain Consistency', 
                  desc: 'Regular contributions earn bonus multipliers and streaks',
                  points: '+10% bonus per week'
                },
                { 
                  icon: Shield, 
                  title: 'Quality Contributions', 
                  desc: 'High-quality gradients and validated contributions earn more points',
                  points: 'Up to 3x multiplier'
                },
                { 
                  icon: Users, 
                  title: 'Community Engagement', 
                  desc: 'Help other contributors and participate in discussions',
                  points: '+1-5 pts per activity'
                }
              ].map((method) => (
                <div key={method.title} className="flex items-start gap-4 p-5 bg-slate-50 border-2 border-slate-200 rounded-xl">
                  <div className="p-3 rounded-xl bg-indigo-100 border-2 border-indigo-200">
                    <method.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">{method.title}</h4>
                      <Badge variant="secondary" className="px-3 py-1 border border-emerald-300 bg-emerald-50 text-emerald-700">
                        {method.points}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Training Network?
          </h2>
          <p className="text-slate-300 text-xl mb-8">
            Start contributing to decentralized AI today and work your way up through our contribution tiers.
          </p>
          <Button asChild size="lg" className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-600">
            <Link href="/dashboard/marketing/join">Join the Training Network</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}