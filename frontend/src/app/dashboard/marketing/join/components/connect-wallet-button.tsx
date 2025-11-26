'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useAuthStore } from '@/store/useAuthStore';
import { Wallet, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { JSX } from 'react';

export default function ConnectWalletButton(): JSX.Element | null {
  const { isAuthenticated, userAddress, connecting, connectWallet } = useAuthStore();
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleConnect = async () => {
    try {
      setError(null);
      await connectWallet();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      setTimeout(() => setError(null), 5000);
    }
  };

  // Hide button if already authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button 
        onClick={handleConnect}
        disabled={connecting}
        className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-600 transition-all duration-200 h-11 px-6"
        size="default"
      >
        {connecting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting to Wallet...
          </>
        ) : showSuccess ? (
          <>
            <CheckCircle className="mr-2 h-4 w-4" />
            Connected!
          </>
        ) : (
          <>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </>
        )}
      </Button>
      
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border-2 border-red-200 rounded-lg px-3 py-2">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      
      {!isAuthenticated && !connecting && !error && (
        <p className="text-xs text-slate-500 text-center max-w-xs">
          Connect your Sui wallet to access the full platform
        </p>
      )}
    </div>
  );
}