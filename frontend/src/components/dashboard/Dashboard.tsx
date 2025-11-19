'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Users, 
  Activity, 
  TrendingUp, 
  Play,
  Pause,
  Square,
  ExternalLink,
  Zap,
  Award,
  Database,
  Shield,
  Cpu,
  HardDrive,
  Network
} from 'lucide-react';
import { ProgressChart } from '@/components/charts/progress-chart';
import { AccuracyChart } from '@/components/charts/accuracy-chart';
import { ContributorsChart } from '@/components/charts/contributors-chart';
import { useTrainingStore } from '@/store/useTrainingStore';
import { useModelStore } from '@/store/useModelStore';
import Link from 'next/link';

// Enhanced stats for Data x AI project
const statsData = [
  { 
    title: 'Active Models', 
    value: '24', 
    change: '+3', 
    icon: Brain, 
    color: 'text-blue-500',
    // bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    trend: 'up'
  },
  { 
    title: 'Contributors', 
    value: '1,248', 
    change: '+12%', 
    icon: Users, 
    color: 'text-green-500',
    // bgColor: 'bg-green-50 dark:bg-green-950/20',
    trend: 'up'
  },
  { 
    title: 'Data Storage (Walrus)', 
    value: '2.4 TB', 
    change: '+8%', 
    icon: Database, 
    color: 'text-purple-500',
    // bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    trend: 'up'
  },
  { 
    title: 'Avg. Accuracy', 
    value: '92.4%', 
    change: '+1.2%', 
    icon: TrendingUp, 
    color: 'text-indigo-500',
    // bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
    trend: 'up'
  },
];

// Network health metrics
const networkMetrics = [
  { label: 'Walrus Nodes', value: '847', icon: HardDrive, status: 'healthy' },
  { label: 'Seal Verifications', value: '12.3K', icon: Shield, status: 'healthy' },
  { label: 'Active Training', value: '156', icon: Cpu, status: 'active' },
  { label: 'Network Uptime', value: '99.8%', icon: Network, status: 'healthy' },
];

// Recent activity with more context
const recentActivity = [
  { 
    id: 1, 
    user: '0x1a2b...cdef', 
    action: 'completed training session', 
    model: 'Vision Transformer v3.2', 
    time: '2 min ago',
    reward: '2.5 SUI',
    type: 'training'
  },
  { 
    id: 2, 
    user: '0x9f8e...2a3b', 
    action: 'submitted gradients', 
    model: 'NLP Transformer v1.5', 
    time: '15 min ago',
    reward: '1.8 SUI',
    type: 'contribution'
  },
  { 
    id: 3, 
    user: '0x4a5b...3c4d', 
    action: 'uploaded dataset to Walrus', 
    model: 'Medical Imaging Dataset', 
    time: '1 hour ago',
    reward: '5.0 SUI',
    type: 'data'
  },
  { 
    id: 4, 
    user: '0x2b3c...0b1c', 
    action: 'validated model with Seal', 
    model: 'Vision Transformer v3.1', 
    time: '3 hours ago',
    reward: '0.8 SUI',
    type: 'validation'
  },
];

interface DashboardProps {
  className?: string;
}

export default function Dashboard({ className }: DashboardProps) {
  const { currentSession, getActiveSession } = useTrainingStore();
  const { currentModel } = useModelStore();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate elapsed time for active session
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (currentSession?.startTime) {
      interval = setInterval(() => {
        const now = new Date();
        const diff = now.getTime() - new Date(currentSession.startTime).getTime();
        setTimeElapsed(Math.floor(diff / 1000));
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSession?.startTime]);

  // Format time for display
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get activity type badge color
  const getActivityBadgeColor = (type: string) => {
    switch(type) {
      case 'training': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'contribution': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'data': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'validation': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const activeSession = getActiveSession() || currentSession;

  if (!mounted) {
    return null;
  }

  return (
    <div className={`space-y-6 ${className || ''}`}>
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
            <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              Walrus Haulout
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Decentralized AI Training powered by Walrus, Seal & Nautilus
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
            <Link href="/dashboard/training">
              <Play className="mr-2 h-4 w-4" />
              Start Training
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/model">
              View Models
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg `}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                  {stat.trend === 'up' ? '↑' : '↓'}
                </span> 
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Network Health Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            Network Health
          </CardTitle>
          <CardDescription>
            Real-time status of Sui infrastructure components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {networkMetrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="p-2 rounded-lg bg-background">
                  <metric.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-lg font-semibold">{metric.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Training Session */}
      {activeSession ? (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Active Training Session
              </span>
              <Badge 
                variant={
                  activeSession.status === 'training' ? 'default' : 
                  activeSession.status === 'paused' ? 'secondary' : 
                  activeSession.status === 'failed' ? 'destructive' : 'outline'
                }
              >
                {activeSession.status.charAt(0).toUpperCase() + activeSession.status.slice(1)}
              </Badge>
            </CardTitle>
            <CardDescription>
              {activeSession.modelType} model training in progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Epoch {activeSession.currentEpoch} of {activeSession.totalEpochs}</p>
                <p className="text-sm text-muted-foreground">
                  Session ID: {activeSession.id.substring(0, 8)}...
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold font-mono">{formatTime(timeElapsed)}</p>
                <p className="text-sm text-muted-foreground">Time elapsed</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{activeSession.progress.toFixed(1)}%</span>
              </div>
              <Progress value={activeSession.progress} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Accuracy
                </div>
                <p className="text-lg font-semibold">{activeSession.accuracy.toFixed(2)}%</p>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Activity className="h-3.5 w-3.5" />
                  Loss
                </div>
                <p className="text-lg font-semibold">{activeSession.loss.toFixed(4)}</p>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Database className="h-3.5 w-3.5" />
                  Data Shards
                </div>
                <p className="text-lg font-semibold">128</p>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Award className="h-3.5 w-3.5" />
                  Rewards
                </div>
                <p className="text-lg font-semibold">12.4 SUI</p>
              </div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button size="sm" disabled={activeSession.status !== 'paused'}>
                <Play className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button size="sm" variant="secondary" disabled={activeSession.status !== 'training'}>
                <Pause className="mr-2 h-4 w-4" />
                Pause
              </Button>
              <Button size="sm" variant="destructive">
                <Square className="mr-2 h-4 w-4" />
                Stop
              </Button>
              <Button size="sm" variant="outline" className="ml-auto">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-dashed border-2">
          <CardHeader>
            <CardTitle>No Active Training Session</CardTitle>
            <CardDescription>
              Start a new training session to begin contributing to decentralized AI models.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
              <Link href="/dashboard/training">
                <Play className="mr-2 h-4 w-4" />
                Start Training
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressChart />
        <AccuracyChart />
      </div>

      {/* Recent Activity and Contributors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest contributions to the network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="bg-muted rounded-full p-2 mt-0.5">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium truncate">{activity.user}</p>
                      <Badge variant="secondary" className={`text-xs ${getActivityBadgeColor(activity.type)}`}>
                        {activity.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                    {activity.model !== '-' && (
                      <p className="text-xs text-muted-foreground mt-0.5">{activity.model}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground whitespace-nowrap">
                      {activity.time}
                    </p>
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                      +{activity.reward}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <ContributorsChart />
      </div>
    </div>
  );
}