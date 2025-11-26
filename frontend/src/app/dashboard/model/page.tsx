'use client';

import { useState, useEffect } from 'react';
import { Download, RefreshCw, Activity, Users, Database, TrendingUp, Clock, GitCompare, FileText, Loader2, CheckCircle2, AlertCircle, Hash, PlusCircle, Shield, DollarSign, Zap, Eye, Award, Lock, Globe, BarChart3, TrendingDown, Star, Verified, AlertTriangle, Brain, Server, Network, Coins, ShoppingCart, Code, Play, Pause, Calendar, Filter, Settings, Bell, MessageSquare, ThumbsUp, ThumbsDown, BookOpen, ExternalLink } from 'lucide-react';

const MOCK_MODELS = [
  {
    id: "model_3.2",
    version: "3.2",
    name: "DecentralVision v3.2",
    walrusCID: "b749de6c8e9a1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b",
    dateCreated: new Date(Date.now() - 86400000).toISOString(),
    accuracy: 92.4,
    contributors: 1248,
    status: 'active',
    price: 25.50,
    marketCap: "$31,824",
    sales: 1247,
    trustScore: 98,
    privacyLevel: "High",
    trainingDataSources: 5,
    verifiedProvenance: true,
    federatedLearning: true,
    differentialPrivacy: true,
    storageRedundancy: 10,
    predictionAccuracy: 94.2,
    likes: 3421,
    dislikes: 87,
    comments: 456,
    trainingProgress: 100,
    apiCalls: 12456,
  },
  {
    id: "model_3.1",
    version: "3.1",
    name: "DecentralVision v3.1",
    walrusCID: "a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5",
    dateCreated: new Date(Date.now() - 172800000).toISOString(),
    accuracy: 91.8,
    contributors: 1156,
    status: 'marketplace',
    price: 22.00,
    marketCap: "$25,432",
    sales: 1156,
    trustScore: 96,
    privacyLevel: "High",
    trainingDataSources: 4,
    verifiedProvenance: true,
    federatedLearning: true,
    differentialPrivacy: true,
    storageRedundancy: 10,
    predictionAccuracy: 92.8,
    likes: 2987,
    dislikes: 124,
    comments: 387,
    trainingProgress: 100,
    apiCalls: 9823,
  },
  {
    id: "model_3.0",
    version: "3.0",
    name: "DecentralVision v3.0",
    walrusCID: "c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4",
    dateCreated: new Date(Date.now() - 259200000).toISOString(),
    accuracy: 90.5,
    contributors: 1089,
    status: 'archived',
    price: 18.00,
    marketCap: "$19,602",
    sales: 1089,
    trustScore: 94,
    privacyLevel: "Medium",
    trainingDataSources: 3,
    verifiedProvenance: true,
    federatedLearning: false,
    differentialPrivacy: true,
    storageRedundancy: 8,
    predictionAccuracy: 91.2,
    likes: 2453,
    dislikes: 156,
    comments: 298,
    trainingProgress: 100,
    apiCalls: 7234,
  }
];

const TRAINING_DATA_SOURCES = [
  { name: "ImageNet Subset", quality: 98, verified: true, size: "1.2 TB", records: "1.2M" },
  { name: "OpenImages", quality: 95, verified: true, size: "800 GB", records: "900K" },
  { name: "Community Dataset", quality: 92, verified: true, size: "450 GB", records: "450K" },
  { name: "Synthetic Data", quality: 89, verified: true, size: "320 GB", records: "600K" },
  { name: "Custom Dataset", quality: 94, verified: false, size: "180 GB", records: "200K" },
];

const CONTRIBUTORS = [
  { id: 1, address: "0x1a2b...3c4d", contributions: 145, rewards: 12.45, reputation: 98 },
  { id: 2, address: "0x5e6f...7g8h", contributions: 132, rewards: 11.20, reputation: 96 },
  { id: 3, address: "0x9i0j...1k2l", contributions: 128, rewards: 10.85, reputation: 95 },
  { id: 4, address: "0x3m4n...5o6p", contributions: 121, rewards: 10.30, reputation: 94 },
  { id: 5, address: "0x7q8r...9s0t", contributions: 115, rewards: 9.75, reputation: 93 },
];

const API_ENDPOINTS = [
  { method: "POST", endpoint: "/v1/predict", description: "Run inference on model", latency: "45ms" },
  { method: "GET", endpoint: "/v1/model/info", description: "Get model metadata", latency: "12ms" },
  { method: "POST", endpoint: "/v1/batch", description: "Batch predictions", latency: "120ms" },
  { method: "GET", endpoint: "/v1/health", description: "Health check", latency: "5ms" },
];

export default function EnhancedModelDashboard() {
  const [selectedModel, setSelectedModel] = useState(MOCK_MODELS[0]);
  const [activeTab, setActiveTab] = useState('overview');
  const [downloading, setDownloading] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [liveMetrics, setLiveMetrics] = useState({
    activeTrainers: 248,
    gradientsPerSecond: 12.4,
    networkLoad: 67,
    activeInferences: 342,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        activeTrainers: prev.activeTrainers + Math.floor(Math.random() * 10 - 5),
        gradientsPerSecond: Math.max(8, Math.min(20, prev.gradientsPerSecond + (Math.random() * 2 - 1))),
        networkLoad: Math.max(40, Math.min(90, prev.networkLoad + Math.floor(Math.random() * 10 - 5))),
        activeInferences: prev.activeInferences + Math.floor(Math.random() * 20 - 10),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  const handlePurchase = async () => {
    setPurchasing(true);
    setTimeout(() => setPurchasing(false), 2000);
  };

  const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white border border-slate-200 rounded-lg p-5 ${className}`}>
      {children}
    </div>
  );

  const Badge = ({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: string; className?: string }) => {
    const variants = {
      default: "bg-slate-100 text-slate-800",
      success: "bg-emerald-100 text-emerald-800",
      warning: "bg-amber-100 text-amber-800",
      error: "bg-rose-100 text-rose-800",
      info: "bg-cyan-100 text-cyan-800",
      purple: "bg-violet-100 text-violet-800",
      teal: "bg-teal-100 text-teal-800",
    };
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant as keyof typeof variants] || variants.default} ${className}`}>
        {children}
      </span>
    );
  };

  const Button = ({ children, variant = "primary", className = "", ...props }: { children: React.ReactNode; variant?: string; className?: string; [key: string]: any }) => {
    const variants = {
      primary: "bg-teal-600 hover:bg-teal-700 text-white",
      secondary: "bg-slate-200 hover:bg-slate-300 text-slate-900",
      outline: "border-2 border-slate-300 hover:bg-slate-50 text-slate-700",
      success: "bg-emerald-600 hover:bg-emerald-700 text-white",
      danger: "bg-rose-600 hover:bg-rose-700 text-white",
    };
    return (
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center gap-2 ${variants[variant as keyof typeof variants] || variants.primary} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Decentralized AI Marketplace</h1>
                <p className="text-xs text-slate-500">Built on Walrus • Powered by Sui</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success">
                <Activity className="w-3 h-3 mr-1" />
                Testnet Live
              </Badge>
              <Button variant="outline" className="text-sm">
                <Bell className="w-4 h-4" />
                Notifications
              </Button>
              <Button variant="outline" className="text-sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Metrics Bar */}
      <div className="bg-teal-600 text-white">
        <div className="max-w-screen-2xl mx-auto px-6 py-3">
          <div className="grid grid-cols-5 gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 opacity-80" />
              <div>
                <div className="text-xs opacity-80">Active Trainers</div>
                <div className="text-lg font-bold">{liveMetrics.activeTrainers}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 opacity-80" />
              <div>
                <div className="text-xs opacity-80">Gradients/sec</div>
                <div className="text-lg font-bold">{liveMetrics.gradientsPerSecond.toFixed(1)}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 opacity-80" />
              <div>
                <div className="text-xs opacity-80">Network Load</div>
                <div className="text-lg font-bold">{liveMetrics.networkLoad}%</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 opacity-80" />
              <div>
                <div className="text-xs opacity-80">Active Inferences</div>
                <div className="text-lg font-bold">{liveMetrics.activeInferences}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 opacity-80" />
              <div>
                <div className="text-xs opacity-80">Storage (Walrus)</div>
                <div className="text-lg font-bold">2.4 TB</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Model Selector */}
          <div className="col-span-3">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Models</h3>
                <Button variant="outline" className="text-xs py-1 px-2">
                  <Filter className="w-3 h-3" />
                </Button>
              </div>
              <div className="space-y-2">
                {MOCK_MODELS.map((model) => (
                  <div
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors border-2 ${
                      selectedModel.id === model.id
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-transparent hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-medium text-sm text-slate-900">v{model.version}</div>
                      {model.status === 'active' && (
                        <Badge variant="success" className="text-xs">Active</Badge>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 mb-2">{model.contributors.toLocaleString()} contributors</div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-teal-600">${model.price}</span>
                      <span className="text-xs text-slate-500">{model.accuracy}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Button variant="primary" className="w-full">
                  <PlusCircle className="w-4 h-4" />
                  Train New Model
                </Button>
              </div>
            </Card>

            <Card className="mt-4">
              <h3 className="font-semibold text-slate-900 mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Total Models</span>
                  <span className="font-semibold text-slate-900">142</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Total Revenue</span>
                  <span className="font-semibold text-slate-900">$1.2M</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Avg Trust Score</span>
                  <span className="font-semibold text-slate-900">94.2</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Walrus Nodes</span>
                  <span className="font-semibold text-slate-900">1,247</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Center Content */}
          <div className="col-span-6">
            {/* Model Header */}
            <Card className="mb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-slate-900">{selectedModel.name}</h2>
                    <Badge variant="info">
                      <Verified className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                    {selectedModel.status === 'active' && (
                      <Badge variant="success">Training</Badge>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 mb-3">
                    Version {selectedModel.version} • {selectedModel.contributors.toLocaleString()} contributors • Updated {new Date(selectedModel.dateCreated).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center gap-1 text-sm ${liked ? 'text-teal-600' : 'text-slate-500'} hover:text-teal-600`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{selectedModel.likes + (liked ? 1 : 0)}</span>
                    </button>
                    <button
                      onClick={() => setDisliked(!disliked)}
                      className={`flex items-center gap-1 text-sm ${disliked ? 'text-rose-600' : 'text-slate-500'} hover:text-rose-600`}
                    >
                      <ThumbsDown className="w-4 h-4" />
                      <span>{selectedModel.dislikes + (disliked ? 1 : 0)}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-teal-600">
                      <MessageSquare className="w-4 h-4" />
                      <span>{selectedModel.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-teal-600">
                      <Star className="w-4 h-4" />
                      <span>Favorite</span>
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-teal-600">${selectedModel.price}</div>
                  <div className="text-xs text-slate-500">Market Cap: {selectedModel.marketCap}</div>
                  <div className="text-xs text-emerald-600 mt-1">+12.5% (24h)</div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Accuracy</div>
                  <div className="text-xl font-bold text-slate-900">{selectedModel.accuracy}%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Trust Score</div>
                  <div className="text-xl font-bold text-slate-900">{selectedModel.trustScore}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Total Sales</div>
                  <div className="text-xl font-bold text-slate-900">{selectedModel.sales}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">API Calls</div>
                  <div className="text-xl font-bold text-slate-900">{selectedModel.apiCalls.toLocaleString()}</div>
                </div>
              </div>
            </Card>

            {/* Tabs */}
            <div className="bg-white border border-slate-200 rounded-lg mb-4">
              <div className="flex border-b border-slate-200">
                {['overview', 'api', 'training', 'analytics', 'community'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="p-5">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Model Description</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        DecentralVision is a cutting-edge computer vision model trained through federated learning across {selectedModel.contributors} contributors. 
                        It specializes in image classification, object detection, and semantic segmentation with industry-leading accuracy.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Walrus Storage</h3>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Hash className="w-4 h-4 text-slate-500" />
                          <span className="text-xs font-mono text-slate-700">{selectedModel.walrusCID}</span>
                        </div>
                        <div className="text-xs text-slate-500">
                          {selectedModel.storageRedundancy}x redundancy across Walrus network
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Training Configuration</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Training Method</div>
                          <div className="flex items-center gap-2">
                            {selectedModel.federatedLearning ? (
                              <>
                                <Network className="w-4 h-4 text-teal-600" />
                                <span className="text-sm font-medium text-slate-900">Federated Learning</span>
                              </>
                            ) : (
                              <>
                                <Server className="w-4 h-4 text-slate-600" />
                                <span className="text-sm font-medium text-slate-900">Centralized</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Privacy Level</div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-medium text-slate-900">{selectedModel.privacyLevel}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button variant="primary" onClick={handlePurchase} disabled={purchasing} className="flex-1">
                        {purchasing ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingCart className="w-4 h-4" />}
                        Purchase Access
                      </Button>
                      <Button variant="outline" onClick={handleDownload} disabled={downloading} className="flex-1">
                        {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        Download Model
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === 'api' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">API Documentation</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        Access the model through our REST API. Authentication required via API key.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">Available Endpoints</h4>
                      <div className="space-y-2">
                        {API_ENDPOINTS.map((endpoint, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Badge variant={endpoint.method === 'POST' ? 'info' : 'success'} className="font-mono text-xs">
                                  {endpoint.method}
                                </Badge>
                                <code className="text-sm font-mono text-slate-700">{endpoint.endpoint}</code>
                              </div>
                              <span className="text-xs text-slate-500">{endpoint.latency}</span>
                            </div>
                            <p className="text-xs text-slate-600">{endpoint.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Example Request</h4>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-xs text-slate-100 font-mono">
{`curl -X POST https://api.example.com/v1/predict \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image": "base64_encoded_image",
    "model_version": "${selectedModel.version}"
  }'`}
                        </pre>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <ExternalLink className="w-4 h-4" />
                      View Full Documentation
                    </Button>
                  </div>
                )}

                {activeTab === 'training' && (
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900">Training Progress</h3>
                        <Badge variant="success">Complete</Badge>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div
                          className="bg-teal-600 h-3 rounded-full transition-all"
                          style={{ width: `${selectedModel.trainingProgress}%` }}
                        />
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{selectedModel.trainingProgress}% Complete</div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Training Data Sources</h3>
                      <div className="space-y-2">
                        {TRAINING_DATA_SOURCES.map((source, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-sm text-slate-900">{source.name}</span>
                                {source.verified && (
                                  <Badge variant="success" className="text-xs">
                                    <Verified className="w-3 h-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <span className="text-xs text-slate-500">{source.size}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-slate-600">
                              <span>{source.records} records</span>
                              <span>Quality: {source.quality}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Training Metrics</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Total Epochs</div>
                          <div className="text-xl font-bold text-slate-900">120</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Learning Rate</div>
                          <div className="text-xl font-bold text-slate-900">0.001</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Batch Size</div>
                          <div className="text-xl font-bold text-slate-900">256</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Training Time</div>
                          <div className="text-xl font-bold text-slate-900">48h</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Performance Analytics</h3>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="text-xs text-slate-500 mb-3">Accuracy Trend (7 days)</div>
                        <div className="flex items-end gap-2 h-32">
                          {[89, 90, 91, 91.5, 92, 92.2, 92.4].map((val, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center">
                              <div className="w-full bg-teal-600 rounded-t" style={{ height: `${(val / 100) * 100}%` }} />
                              <div className="text-xs text-slate-500 mt-2">{val}%</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Usage Statistics</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">API Calls (24h)</div>
                          <div className="text-2xl font-bold text-slate-900">2,847</div>
                          <div className="text-xs text-emerald-600 mt-1">+15.3%</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Avg Response Time</div>
                          <div className="text-2xl font-bold text-slate-900">52ms</div>
                          <div className="text-xs text-emerald-600 mt-1">-8.2%</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Success Rate</div>
                          <div className="text-2xl font-bold text-slate-900">99.8%</div>
                          <div className="text-xs text-emerald-600 mt-1">+0.1%</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">Active Users</div>
                          <div className="text-2xl font-bold text-slate-900">1,247</div>
                          <div className="text-xs text-emerald-600 mt-1">+23.1%</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Revenue Analytics</h3>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="text-xs text-slate-500 mb-3">Revenue (7 days)</div>
                        <div className="flex items-end gap-2 h-32">
                          {[18, 19, 21, 23, 24, 25, 25.5].map((val, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center">
                              <div className="w-full bg-emerald-600 rounded-t" style={{ height: `${(val / 30) * 100}%` }} />
                              <div className="text-xs text-slate-500 mt-2">${val}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'community' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Top Contributors</h3>
                      <div className="space-y-2">
                        {CONTRIBUTORS.map((contributor) => (
                          <div key={contributor.id} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                                  #{contributor.id}
                                </div>
                                <div>
                                  <div className="font-mono text-sm text-slate-900">{contributor.address}</div>
                                  <div className="text-xs text-slate-500">{contributor.contributions} contributions</div>
                                </div>
                              </div>
                              <Badge variant="teal">Rep: {contributor.reputation}</Badge>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-600">Rewards Earned</span>
                              <span className="font-semibold text-teal-600">{contributor.rewards} SUI</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Users className="w-4 h-4" />
                      View All Contributors
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <Card className="mb-4">
              <h3 className="font-semibold text-slate-900 mb-3">Trust Oracle</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-700">Model Integrity</span>
                  </div>
                  <span className="text-emerald-600 font-medium">Verified</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-700">Training Data</span>
                  </div>
                  <span className="text-emerald-600 font-medium">Verified</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-700">Contributors</span>
                  </div>
                  <span className="text-emerald-600 font-medium">Verified</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-700">Smart Contract</span>
                  </div>
                  <span className="text-emerald-600 font-medium">Audited</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">{selectedModel.trustScore}</div>
                <div className="text-xs text-slate-500">Overall Trust Score</div>
              </div>
            </Card>

            <Card className="mb-4">
              <h3 className="font-semibold text-slate-900 mb-3">Privacy Features</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-slate-900">Differential Privacy</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    {selectedModel.differentialPrivacy ? "Enabled (ε=0.5, δ=1e-5)" : "Disabled"}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Network className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-slate-900">Federated Learning</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    {selectedModel.federatedLearning ? `Active (${selectedModel.contributors} nodes)` : "Inactive"}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-slate-900">Secure Aggregation</span>
                  </div>
                  <div className="text-xs text-slate-600">Zero-knowledge proofs verified</div>
                </div>
              </div>
            </Card>

            {/* <Card className="mb-4">
              <h3 className="font-semibold text-slate-900 mb-3">Prediction Market</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <div className="text-sm text-slate-700 mb-2">Will reach 95% accuracy?</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">78% Yes</span>
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '78%' }} />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <div className="text-sm text-slate-700 mb-2">Price over $30 by Dec?</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">62% Yes</span>
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '62%' }} />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <div className="text-sm text-slate-700 mb-2">1000+ contributors?</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">92% Yes</span>
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-3">
                <Coins className="w-4 h-4" />
                Place Prediction
              </Button>
            </Card> */}

            {/* <Card>
              <h3 className="font-semibold text-slate-900 mb-3">System Status</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Sui Blockchain</span>
                  <Badge variant="success">Online</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Walrus Storage</span>
                  <Badge variant="success">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Nautilus Compute</span>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Oracle Network</span>
                  <Badge variant="success">Synced</Badge>
                </div>
              </div>
            </Card> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white mt-12">
        <div className="max-w-screen-2xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Built for Walrus Haulout Hackathon</h3>
              <p className="text-sm text-slate-400">Decentralized AI • Data Marketplace • Provenance Tracking • Privacy-Preserving ML</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6 pt-6 border-t border-slate-800">
            <div className="text-center">
              <Database className="w-8 h-8 mx-auto mb-2 text-teal-500" />
              <div className="text-xs font-semibold mb-1">Walrus Storage</div>
              <div className="text-xs text-slate-400">Decentralized data storage</div>
            </div>
            <div className="text-center">
              <Coins className="w-8 h-8 mx-auto mb-2 text-teal-500" />
              <div className="text-xs font-semibold mb-1">Sui Blockchain</div>
              <div className="text-xs text-slate-400">Smart contract execution</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-teal-500" />
              <div className="text-xs font-semibold mb-1">Trust Oracle</div>
              <div className="text-xs text-slate-400">Verification & auditing</div>
            </div>
            <div className="text-center">
              <Lock className="w-8 h-8 mx-auto mb-2 text-teal-500" />
              <div className="text-xs font-semibold mb-1">Zero-Knowledge</div>
              <div className="text-xs text-slate-400">Privacy-preserving proofs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}