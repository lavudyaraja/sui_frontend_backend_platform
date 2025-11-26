'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Shield, Zap, Cloud, LinkIcon, BarChart3, Rocket, ArrowRight, CheckCircle2, Database, Lock, TrendingUp, Globe, Award, Activity } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [activeModelCount, setActiveModelCount] = useState(24);
  const [contributorCount, setContributorCount] = useState(1248);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simulate live counter updates
    const interval = setInterval(() => {
      setContributorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Active Contributors', value: contributorCount.toLocaleString(), icon: Users, color: 'text-blue-600' },
    { label: 'AI Models', value: activeModelCount, icon: Brain, color: 'text-purple-600' },
    { label: 'Training Sessions', value: '876+', icon: Activity, color: 'text-emerald-600' },
    { label: 'Gradients Processed', value: '1.2M+', icon: TrendingUp, color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Badge className="mb-6 px-4 py-2 bg-indigo-50 text-indigo-700 border-2 border-indigo-200 hover:bg-indigo-100 transition-colors">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Built for Walrus Haulout Hackathon
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Sui-DAT: <span className="text-indigo-600">Distributed AI Trainer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-8 leading-relaxed">
            Revolutionizing AI development through decentralized training on the Sui blockchain. 
            Contribute to cutting-edge models without sharing your data.
          </p>

          {/* Live Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
                <stat.icon className={`h-5 w-5 ${stat.color} mb-2 mx-auto`} />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-700 border-2 border-indigo-600">
              <Link href="/dashboard/marketing/join">
                Join the Network
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-2 border-slate-300 hover:bg-slate-50 hover:border-indigo-300">
              <Link href="/dashboard/marketing/about">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hackathon Project Explanation */}
      <div className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-slate-200">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-100 border-2 border-indigo-200">
                  <Database className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Walrus Haulout Hackathon Project</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Sui-DAT is a decentralized AI training platform built for the Walrus Haulout Hackathon, 
                    demonstrating how Web3 technologies can revolutionize machine learning. Our project showcases 
                    the power of combining Sui's high-performance blockchain with Walrus's decentralized storage 
                    to create a privacy-preserving, collaborative AI training network.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    <Badge variant="secondary" className="px-3 py-1 border border-slate-300">AI x Data Track</Badge>
                    <Badge variant="secondary" className="px-3 py-1 border border-slate-300">Web3</Badge>
                    <Badge variant="secondary" className="px-3 py-1 border border-slate-300">Decentralized Storage</Badge>
                    <Badge variant="secondary" className="px-3 py-1 border border-slate-300">Privacy-First</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1 bg-purple-50 text-purple-700 border-2 border-purple-200">
            <Zap className="h-3.5 w-3.5 mr-2" />
            Core Technology
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powered by Web3 Innovation</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Leveraging cutting-edge blockchain and decentralized storage technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-slate-200 hover:border-indigo-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="p-4 rounded-xl bg-indigo-50 border-2 border-indigo-100 w-fit mb-5 group-hover:scale-110 transition-transform">
                <Brain className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Decentralized Training</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Train AI models collaboratively without centralizing data. Each participant contributes 
                gradients while keeping their raw data private and secure.
              </p>
              <Link href="/dashboard/marketing/about" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-slate-200 hover:border-purple-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="p-4 rounded-xl bg-purple-50 border-2 border-purple-100 w-fit mb-5 group-hover:scale-110 transition-transform">
                <Cloud className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Walrus Storage</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Utilizing Walrus for decentralized, scalable storage of model weights and training data, 
                ensuring data availability without central points of failure.
              </p>
              <Link href="/dashboard/marketing/about" className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="p-4 rounded-xl bg-blue-50 border-2 border-blue-100 w-fit mb-5 group-hover:scale-110 transition-transform">
                <LinkIcon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Sui Orchestration</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Leveraging Sui's parallel execution for real-time coordination of training sessions, 
                reputation tracking, and model versioning on-chain.
              </p>
              <Link href="/dashboard/marketing/about" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-1 bg-emerald-50 text-emerald-700 border-2 border-emerald-200">
                <Activity className="h-3.5 w-3.5 mr-2" />
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Sui-DAT Works</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A seamless 4-step process to democratize AI development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Connect Wallet', desc: 'Connect your Sui wallet to join the decentralized training network', icon: Globe },
                { step: 2, title: 'Select Model', desc: 'Choose from available AI models to contribute your computing power', icon: Brain },
                { step: 3, title: 'Train Locally', desc: 'Run training iterations on your device and submit encrypted gradients', icon: Lock },
                { step: 4, title: 'Earn Rewards', desc: 'Gain reputation points and SUI tokens for valuable contributions', icon: Award },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="bg-white border-2 border-indigo-300 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl font-bold text-indigo-600">{item.step}</span>
                  </div>
                  <item.icon className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1 bg-blue-50 text-blue-700 border-2 border-blue-200">
              <Shield className="h-3.5 w-3.5 mr-2" />
              Key Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Sui-DAT?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built on proven Web3 infrastructure for security, scalability, and transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Lock, title: 'Privacy-Preserving', desc: 'Your data never leaves your device. Only encrypted gradients are shared, ensuring complete privacy.', color: 'emerald' },
              { icon: Users, title: 'Community-Driven', desc: 'Join a global network of AI enthusiasts contributing to open-source machine learning models.', color: 'blue' },
              { icon: BarChart3, title: 'Transparent & Verifiable', desc: 'All contributions are recorded on-chain, creating an immutable audit trail for model development.', color: 'purple' },
              { icon: Zap, title: 'Earn While Contributing', desc: 'Receive SUI tokens and reputation points for your contributions to AI model training.', color: 'indigo' },
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 p-6 rounded-xl bg-white border-2 border-slate-200 hover:border-indigo-300 transition-colors">
                <div className={`p-3 rounded-xl bg-${benefit.color}-50 border-2 border-${benefit.color}-100 shrink-0`}>
                  <benefit.icon className={`h-5 w-5 text-${benefit.color}-600`} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Democratize AI?
            </h2>
            <p className="text-slate-300 text-xl mb-10 leading-relaxed">
              Join the movement to make AI development more accessible, privacy-preserving, and collaborative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="h-12 px-8 bg-indigo-600 text-white hover:bg-indigo-700 border-2 border-indigo-600 font-semibold rounded-lg transition-all duration-300">
                <Link href="/dashboard/marketing/join">
                  Join the Training Network
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="h-12 px-8 bg-slate-800 text-white hover:bg-slate-700 border-2 border-slate-700 font-semibold rounded-lg transition-all duration-300">
                <Link href="/dashboard/marketing/pricing">View Contribution Tiers</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-indigo-600 mr-2" />
                <span className="text-xl font-bold text-slate-900">Sui-DAT</span>
              </div>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Decentralized AI training on the Sui blockchain.
              </p>
              <Badge variant="secondary" className="px-3 py-1 border border-slate-300">Walrus Haulout Hackathon</Badge>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-5">Product</h3>
              <ul className="space-y-3">
                <li><Link href="/dashboard" className="text-slate-600 hover:text-indigo-600 transition-colors">Dashboard</Link></li>
                <li><Link href="/dashboard/marketing/about" className="text-slate-600 hover:text-indigo-600 transition-colors">How It Works</Link></li>
                <li><Link href="/dashboard/marketing/pricing" className="text-slate-600 hover:text-indigo-600 transition-colors">Contribution Tiers</Link></li>
                <li><Link href="/dashboard/marketing/join" className="text-slate-600 hover:text-indigo-600 transition-colors">Join Network</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-5">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">GitHub</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Whitepaper</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">API Reference</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-5">Connect</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Twitter</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Discord</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Telegram</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Community Forum</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-2 border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              Built with ❤️ for the Walrus Haulout Hackathon
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}