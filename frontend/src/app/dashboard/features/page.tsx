"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  ShoppingCart, 
  Settings, 
  Brain, 
  Shield, 
  Server, 
  Link, 
  BarChart3, 
  Calendar,
  Vote,
  Database,
  Layers,
  Tag,
  Bot,
  Workflow,
  Bug,
  Target,
  Leaf,
  GitBranch,
  Package,
  RefreshCw,
  GraduationCap,
  AlertTriangle,
  TrendingUp,
  Search,
  Award,
  Globe,
  Lightbulb
} from 'lucide-react';

const App = () => {
  const [activeFeature, setActiveFeature] = useState('collaborative');
  const [selectedModel, setSelectedModel] = useState('');
  const [trainingProgress, setTrainingProgress] = useState(0);

  const features = [
    {
      id: 'collaborative',
      title: 'Collaborative Training',
      icon: Users,
      category: 'training',
      description: 'Multi-participant model training with federated learning',
      metrics: { participants: 147, models: 23, accuracy: '94.2%' }
    },
    {
      id: 'marketplace',
      title: 'Model Marketplace',
      icon: ShoppingCart,
      category: 'marketplace',
      description: 'Trade pretrained models and datasets',
      metrics: { listings: 1243, transactions: 5678, volume: '234K SUI' }
    },
    {
      id: 'automl',
      title: 'Hyperparameter Optimization',
      icon: Settings,
      category: 'training',
      description: 'Automated ML with Bayesian optimization',
      metrics: { experiments: 892, bestScore: '0.967', timeSaved: '340h' }
    },
    {
      id: 'architectures',
      title: 'Advanced Architectures',
      icon: Brain,
      category: 'training',
      description: 'Support for transformers, diffusion models, RL',
      metrics: { supported: 28, popular: 'Transformer', usage: '67%' }
    },
    {
      id: 'privacy',
      title: 'Privacy-Preserving Training',
      icon: Shield,
      category: 'security',
      description: 'Differential privacy and homomorphic encryption',
      metrics: { secure: 234, epsilon: '0.1', compliance: '100%' }
    },
    {
      id: 'serving',
      title: 'Model Serving',
      icon: Server,
      category: 'deployment',
      description: 'Real-time inference services',
      metrics: { deployed: 456, requests: '1.2M/day', latency: '45ms' }
    },
    {
      id: 'crosschain',
      title: 'Cross-Chain Bridge',
      icon: Link,
      category: 'infrastructure',
      description: 'Multi-chain interoperability',
      metrics: { chains: 8, bridges: 34, tvl: '8.9M SUI' }
    },
    {
      id: 'analytics',
      title: 'Analytics & Explainability',
      icon: BarChart3,
      category: 'monitoring',
      description: 'SHAP, LIME, and bias detection',
      metrics: { models: 567, reports: 1234, issues: 23 }
    },
    {
      id: 'resources',
      title: 'Resource Market',
      icon: Calendar,
      category: 'infrastructure',
      description: 'Compute marketplace and scheduling',
      metrics: { providers: 892, gpus: 3456, utilization: '87%' }
    },
    {
      id: 'governance',
      title: 'DAO Governance',
      icon: Vote,
      category: 'governance',
      description: 'Decentralized decision-making',
      metrics: { proposals: 45, voters: 2341, passed: 38 }
    },
    {
      id: 'synthetic',
      title: 'Synthetic Data Generation',
      icon: Database,
      category: 'data',
      description: 'AI-powered synthetic datasets',
      metrics: { datasets: 234, quality: '92%', downloads: 4567 }
    },
    {
      id: 'multimodal',
      title: 'Multi-Modal Training',
      icon: Layers,
      category: 'training',
      description: 'Foundation models across modalities',
      metrics: { modalities: 5, parameters: '7B', training: 'Active' }
    },
    {
      id: 'labeling',
      title: 'Data Labeling',
      icon: Tag,
      category: 'data',
      description: 'Crowdsourced annotation platform',
      metrics: { annotators: 5634, tasks: 123456, accuracy: '96.7%' }
    },
    {
      id: 'agents',
      title: 'AI Agent Ecosystem',
      icon: Bot,
      category: 'deployment',
      description: 'Autonomous agent orchestration',
      metrics: { agents: 892, tasks: 12345, success: '94%' }
    },
    {
      id: 'composition',
      title: 'Model Composition',
      icon: Workflow,
      category: 'deployment',
      description: 'Chain multiple models together',
      metrics: { pipelines: 456, models: 1234, performance: '+23%' }
    },
    {
      id: 'adversarial',
      title: 'Adversarial Testing',
      icon: Bug,
      category: 'security',
      description: 'Robustness evaluation service',
      metrics: { tested: 789, robust: 654, score: '8.7/10' }
    },
    {
      id: 'active',
      title: 'Active Learning',
      icon: Target,
      category: 'training',
      description: 'Human-in-the-loop optimization',
      metrics: { savings: '78%', queries: 2345, improvement: '+12%' }
    },
    {
      id: 'green',
      title: 'Green AI & Carbon Credits',
      icon: Leaf,
      category: 'sustainability',
      description: 'Carbon tracking and offsetting',
      metrics: { offset: '1.2M kg', renewable: '67%', credits: 8934 }
    },
    {
      id: 'mlops',
      title: 'MLOps Pipeline',
      icon: GitBranch,
      category: 'infrastructure',
      description: 'End-to-end ML operations',
      metrics: { pipelines: 567, deploys: '45/day', uptime: '99.9%' }
    },
    {
      id: 'federations',
      title: 'Data Unions',
      icon: Users,
      category: 'collaboration',
      description: 'Federated data collaboratives',
      metrics: { unions: 23, members: 456, datasets: 789 }
    },
    {
      id: 'compression',
      title: 'Model Compression',
      icon: Package,
      category: 'optimization',
      description: 'Optimization for edge deployment',
      metrics: { compressed: 345, reduction: '87%', accuracy: '-1.2%' }
    },
    {
      id: 'continual',
      title: 'Continual Learning',
      icon: RefreshCw,
      category: 'training',
      description: 'Online adaptation systems',
      metrics: { models: 234, updates: '1.2M', drift: 'Detected: 12' }
    },
    {
      id: 'research',
      title: 'Research Hub',
      icon: GraduationCap,
      category: 'collaboration',
      description: 'Academic collaboration platform',
      metrics: { papers: 456, citations: 2345, grants: 67 }
    },
    {
      id: 'safety',
      title: 'AI Safety Testing',
      icon: AlertTriangle,
      category: 'security',
      description: 'Alignment and safety verification',
      metrics: { tested: 567, aligned: 534, issues: 33 }
    },
    {
      id: 'futures',
      title: 'Compute Futures Market',
      icon: TrendingUp,
      category: 'marketplace',
      description: 'Financial instruments for compute',
      metrics: { contracts: 234, volume: '450K SUI', liquidity: 'High' }
    },
    {
      id: 'metalearning',
      title: 'Meta-Learning',
      icon: Lightbulb,
      category: 'training',
      description: 'Few-shot learning infrastructure',
      metrics: { tasks: 1234, shots: '5', adaptation: '2.3s' }
    },
    {
      id: 'auditing',
      title: 'Model Auditing',
      icon: Award,
      category: 'security',
      description: 'Third-party certification',
      metrics: { auditors: 45, certified: 234, pending: 67 }
    },
    {
      id: 'nas',
      title: 'Neural Architecture Search',
      icon: Search,
      category: 'optimization',
      description: 'Automated architecture discovery',
      metrics: { searches: 456, discovered: 89, optimal: 23 }
    },
    {
      id: 'cdn',
      title: 'Inference CDN',
      icon: Globe,
      category: 'deployment',
      description: 'Global inference distribution',
      metrics: { nodes: 234, regions: 67, latency: '12ms' }
    },
    {
      id: 'intelligence',
      title: 'Platform Intelligence',
      icon: Brain,
      category: 'infrastructure',
      description: 'AI-powered platform optimization',
      metrics: { predictions: 1234, accuracy: '94%', savings: '23%' }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Features', icon: Layers },
    { id: 'training', name: 'Training', icon: Brain },
    { id: 'marketplace', name: 'Marketplace', icon: ShoppingCart },
    { id: 'data', name: 'Data', icon: Database },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'deployment', name: 'Deployment', icon: Server },
    { id: 'infrastructure', name: 'Infrastructure', icon: Settings },
    { id: 'collaboration', name: 'Collaboration', icon: Users },
    { id: 'optimization', name: 'Optimization', icon: Target }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(f => f.category === selectedCategory);

  const renderFeatureCard = (feature: typeof features[0]) => {
    const Icon = feature.icon;
    return (
      <Card 
        key={feature.id}
        className="border-2 border-zinc-200 hover:border-zinc-400 transition-colors cursor-pointer"
        onClick={() => setActiveFeature(feature.id)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-zinc-100 rounded-lg">
              <Icon className="w-5 h-5 text-zinc-700" />
            </div>
            <Badge variant="outline" className="text-xs">
              {feature.category}
            </Badge>
          </div>
          <CardTitle className="text-lg mt-3">{feature.title}</CardTitle>
          <CardDescription className="text-sm">
            {feature.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(feature.metrics).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-zinc-600 capitalize">{key}:</span>
                <span className="font-medium text-zinc-900">{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-zinc-900">Advance Features for showoff</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-zinc-700 mb-3">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`${
                    selectedCategory === cat.id 
                      ? "bg-zinc-900 hover:bg-zinc-800 text-white" 
                      : "border-2 border-zinc-200 hover:bg-zinc-50"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {cat.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-3">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">
              Available Features ({filteredFeatures.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFeatures.map(renderFeatureCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;