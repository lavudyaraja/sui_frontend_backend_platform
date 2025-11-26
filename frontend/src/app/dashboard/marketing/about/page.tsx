'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Brain, Users, Globe, Lock, Zap, Database, LinkIcon, BarChart3, Shield, CheckCircle2, Target, Code, Layers, GitBranch } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('vision');

  const techStack = [
    {
      name: 'Sui Blockchain',
      icon: LinkIcon,
      color: 'indigo',
      description: 'Sui provides the orchestration layer for our decentralized AI training network. Its parallel execution capabilities enable real-time coordination of training sessions, reputation tracking, and model versioning.',
      features: ['Parallel Execution', 'Smart Contracts', 'Real-time Coordination', 'Automatic Rewards Distribution']
    },
    {
      name: 'Walrus Storage',
      icon: Database,
      color: 'purple',
      description: 'Walrus serves as our decentralized storage solution for model weights, training configurations, and aggregated gradients. Its scalable architecture ensures efficient storage and retrieval.',
      features: ['Decentralized Storage', 'Scalable Architecture', 'No Single Point of Failure', 'Cost-Effective']
    },
    {
      name: 'Seal Integration',
      icon: Shield,
      color: 'blue',
      description: 'Seal provides the cryptographic foundation for our privacy-preserving training mechanism. It enables secure gradient computation and verification without exposing sensitive data.',
      features: ['Cryptographic Security', 'Privacy Preservation', 'Secure Computation', 'Data Protection']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-indigo-50 text-indigo-700 border-2 border-indigo-200">
              <Zap className="h-3.5 w-3.5 mr-2" />
              Walrus Haulout Hackathon
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Sui-DAT</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing AI development through decentralized training on the Sui blockchain
            </p>
          </div>

          {/* What Sui-DAT is */}
          <Card className="mb-12 border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Brain className="h-6 w-6 text-indigo-600 mr-3" />
                What is Sui-DAT?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Sui-DAT (Sui Distributed AI Trainer) is a decentralized machine learning platform that 
                enables collaborative, privacy-preserving AI training on the Sui blockchain. Our platform 
                allows contributors to participate in training cutting-edge AI models without sharing their 
                raw data, leveraging the power of distributed computing.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Built specifically for the Walrus Haulout Hackathon, Sui-DAT demonstrates how Web3 
                technologies can transform the landscape of artificial intelligence development by 
                creating a trustless, transparent, and inclusive ecosystem for AI research.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t-2 border-slate-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Privacy Preserved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-slate-600">Network Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">∞</div>
                  <div className="text-sm text-slate-600">Scalability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">0</div>
                  <div className="text-sm text-slate-600">Data Centralization</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Decentralized AI Training */}
          <Card className="mb-12 border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Globe className="h-6 w-6 text-indigo-600 mr-3" />
                Why Decentralized AI Training Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Traditional AI development suffers from centralization issues that limit innovation and 
                create barriers to entry. Data monopolization by large corporations, lack of incentives for 
                individual contributors, and opaque model development processes hinder the advancement of 
                AI for the benefit of all humanity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { icon: Lock, title: 'Privacy Preservation', desc: 'Contributors never share raw data', color: 'emerald' },
                  { icon: Users, title: 'Global Participation', desc: 'Anyone can contribute regardless of location', color: 'blue' },
                  { icon: BarChart3, title: 'Transparent Development', desc: 'All contributions are verifiable on-chain', color: 'purple' },
                  { icon: Zap, title: 'Incentivized Collaboration', desc: 'Contributors earn rewards for valuable work', color: 'indigo' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-5 rounded-xl bg-slate-50 border-2 border-slate-200 hover:border-indigo-300 transition-colors">
                    <div className={`p-2 rounded-lg bg-${item.color}-100 border border-${item.color}-200 shrink-0`}>
                      <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card className="mb-12 border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Code className="h-6 w-6 text-indigo-600 mr-3" />
                Web3 Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {techStack.map((tech) => (
                <div key={tech.name} className={`p-6 rounded-xl border-2 border-${tech.color}-200 bg-${tech.color}-50 hover:bg-${tech.color}-100 transition-colors`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-white border-2 border-${tech.color}-200`}>
                      <tech.icon className={`h-6 w-6 text-${tech.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-slate-900">{tech.name}</h3>
                      <p className="text-slate-700 leading-relaxed mb-4">{tech.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tech.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="px-3 py-1 border border-slate-300 bg-white">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Architecture Overview */}
          <Card className="mb-12 border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Layers className="h-6 w-6 text-indigo-600 mr-3" />
                System Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl">
                  <div className="bg-indigo-100 border-2 border-indigo-200 rounded-lg p-3">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Client Layer</h4>
                    <p className="text-sm text-slate-600">Web interface and training clients for contributors</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl">
                  <div className="bg-purple-100 border-2 border-purple-200 rounded-lg p-3">
                    <LinkIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Blockchain Layer</h4>
                    <p className="text-sm text-slate-600">Sui smart contracts for coordination and rewards</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl">
                  <div className="bg-blue-100 border-2 border-blue-200 rounded-lg p-3">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Storage Layer</h4>
                    <p className="text-sm text-slate-600">Walrus decentralized storage for models and data</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl">
                  <div className="bg-emerald-100 border-2 border-emerald-200 rounded-lg p-3">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Security Layer</h4>
                    <p className="text-sm text-slate-600">Seal cryptographic protocols for privacy</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision and Mission Tabs */}
          <Card className="mb-12 border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 text-indigo-600 mr-3" />
                Our Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="vision">Vision</TabsTrigger>
                  <TabsTrigger value="mission">Mission</TabsTrigger>
                  <TabsTrigger value="inspiration">Inspiration</TabsTrigger>
                </TabsList>
                
                <TabsContent value="vision" className="space-y-4">
                  <div className="p-6 rounded-xl bg-indigo-50 border-2 border-indigo-200">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900">Our Vision</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      We envision a future where AI development is truly decentralized, with contributions 
                      from individuals and organizations worldwide, creating models that serve humanity's 
                      best interests while respecting individual privacy and data ownership.
                    </p>
                    <ul className="space-y-2">
                      {['Open AI Development', 'Global Collaboration', 'Privacy-First Approach', 'Democratized Innovation'].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="mission" className="space-y-4">
                  <div className="p-6 rounded-xl bg-purple-50 border-2 border-purple-200">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900">Our Mission</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      To democratize AI development by creating a trustless, transparent, and inclusive 
                      platform that enables privacy-preserving collaborative machine learning, breaking 
                      down barriers to innovation and ensuring AI benefits everyone.
                    </p>
                    <ul className="space-y-2">
                      {['Remove Entry Barriers', 'Ensure Data Privacy', 'Foster Collaboration', 'Reward Contributors'].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="inspiration" className="space-y-4">
                  <div className="p-6 rounded-xl bg-blue-50 border-2 border-blue-200">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900">What Inspired Us</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Sui-DAT was inspired by the need to democratize AI development and address the 
                      centralization challenges in current machine learning approaches. We believe that 
                      the future of AI should be collaborative, transparent, and privacy-preserving.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Data Monopolies', 'Limited Access', 'Privacy Concerns', 'Lack of Transparency'].map((problem) => (
                        <div key={problem} className="p-3 bg-white border-2 border-blue-200 rounded-lg">
                          <p className="text-sm font-medium text-slate-900">{problem}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* AI x Data Track Fit */}
          <Card className="mb-12 border-2 border-indigo-300 bg-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <GitBranch className="h-6 w-6 text-indigo-600 mr-3" />
                Perfect Fit for AI x Data Track
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-slate-700 leading-relaxed">
                Sui-DAT exemplifies the intersection of AI and decentralized data management. Our 
                project demonstrates how Web3 technologies can revolutionize data usage in AI development:
              </p>
              <ul className="space-y-3">
                {[
                  'Decentralized data ownership without compromising utility for AI training',
                  'Privacy-preserving computation that maintains model performance',
                  'Transparent, verifiable data lineage for AI model auditing',
                  'Incentivized data contribution models for community-driven AI',
                  'Elimination of data silos through distributed training'
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 p-3 bg-white border-2 border-indigo-200 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center space-y-8 bg-slate-900 rounded-2xl p-12 border-2 border-slate-800">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Join Our Movement</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Become part of the movement to democratize AI development. Whether you're a researcher, 
              developer, or enthusiast, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 border-2 border-indigo-600">
                <Link href="/dashboard/marketing/join">Join the Training Network</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 border-2 border-slate-600 text-white hover:bg-slate-800">
                <Link href="/dashboard/marketing/pricing">View Contribution Tiers</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}