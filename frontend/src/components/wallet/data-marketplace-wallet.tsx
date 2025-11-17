'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useAuthStore } from '@/store/useAuthStore';
import { Wallet, ShoppingCart, Loader2, CheckCircle2, AlertCircle, Database, TrendingUp } from 'lucide-react';
import { FormatUtils } from '@/lib/utils';

interface PurchaseData {
  datasetId: string;
  datasetName: string;
  price: number;
  token: 'SUI' | 'DATA';
  description: string;
}

export function DataMarketplaceWallet() {
  const { 
    isAuthenticated, 
    userAddress, 
    connectWallet 
  } = useAuthStore();
  
  const [purchaseData, setPurchaseData] = useState<PurchaseData>({
    datasetId: '',
    datasetName: '',
    price: 0,
    token: 'SUI',
    description: ''
  });
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseResult, setPurchaseResult] = useState<{
    success: boolean; 
    message: string;
    txHash?: string;
    walrusId?: string;
  } | null>(null);

  const handlePurchase = async () => {
    if (!isAuthenticated) {
      setPurchaseResult({ 
        success: false, 
        message: 'Please connect your wallet first' 
      });
      return;
    }

    if (!purchaseData.datasetId || purchaseData.price <= 0) {
      setPurchaseResult({ 
        success: false, 
        message: 'Please enter valid purchase details' 
      });
      return;
    }

    setIsPurchasing(true);
    setPurchaseResult(null);

    try {
      // In production for Haulout Hackathon:
      // 1. Call marketplace smart contract
      // 2. Transfer tokens (SUI or DATA)
      // 3. Grant access to Walrus-stored dataset
      // 4. Update ownership on Sui blockchain
      // 5. Emit marketplace event
      
      // Simulate API call to /api/wallet/marketplace/purchase
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      const mockTxHash = `0x${Math.random().toString(16).substr(2, 64)}`;
      const mockWalrusId = `walrus://dataset-${purchaseData.datasetId}`;
      
      setPurchaseResult({
        success: true,
        message: `Successfully purchased "${purchaseData.datasetName || purchaseData.datasetId}" for ${purchaseData.price} ${purchaseData.token}`,
        txHash: mockTxHash,
        walrusId: mockWalrusId
      });
      
      // Reset form after successful purchase
      setTimeout(() => {
        setPurchaseData({
          datasetId: '',
          datasetName: '',
          price: 0,
          token: 'SUI',
          description: ''
        });
      }, 3000);
      
    } catch (error) {
      setPurchaseResult({
        success: false,
        message: 'Purchase failed. Please check your balance and try again.'
      });
    } finally {
      setIsPurchasing(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Wallet className="h-5 w-5" />
            Wallet Required
          </CardTitle>
          <CardDescription>
            Connect your wallet to purchase datasets from the decentralized marketplace
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Access premium AI training datasets stored on Walrus with provable authenticity 
                and ownership tracked on the Sui blockchain.
              </p>
            </div>
            
            <Button 
              onClick={connectWallet} 
              className="w-full h-11 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-slate-200 dark:border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ShoppingCart className="h-5 w-5" />
          Data Marketplace
        </CardTitle>
        <CardDescription>
          Purchase AI training datasets with SUI or DATA tokens
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Connected Wallet Info */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900/30 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-950/50">
              <Wallet className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-sm font-medium">Connected</span>
          </div>
          <span className="font-mono text-sm text-slate-700 dark:text-slate-300">
            {userAddress ? FormatUtils.formatAddress(userAddress, 6, 4) : 'Not connected'}
          </span>
        </div>

        {/* Dataset ID */}
        <div className="space-y-2">
          <Label htmlFor="datasetId" className="text-sm font-medium">
            Dataset ID
          </Label>
          <Input
            id="datasetId"
            placeholder="e.g., medical-imaging-001"
            value={purchaseData.datasetId}
            onChange={(e) => setPurchaseData({...purchaseData, datasetId: e.target.value})}
            className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
          />
        </div>

        {/* Dataset Name */}
        <div className="space-y-2">
          <Label htmlFor="datasetName" className="text-sm font-medium">
            Dataset Name (Optional)
          </Label>
          <Input
            id="datasetName"
            placeholder="e.g., Medical Imaging Dataset"
            value={purchaseData.datasetName}
            onChange={(e) => setPurchaseData({...purchaseData, datasetName: e.target.value})}
            className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
          />
        </div>

        {/* Price and Token */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price" className="text-sm font-medium">
              Price
            </Label>
            <div className="relative">
              <Input
                id="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={purchaseData.price || ''}
                onChange={(e) => setPurchaseData({...purchaseData, price: parseFloat(e.target.value) || 0})}
                className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="token" className="text-sm font-medium">
              Token
            </Label>
            <select
              id="token"
              className="w-full h-10 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              value={purchaseData.token}
              onChange={(e) => setPurchaseData({...purchaseData, token: e.target.value as 'SUI' | 'DATA'})}
            >
              <option value="SUI">SUI</option>
              <option value="DATA">DATA</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-medium">
            Description (Optional)
          </Label>
          <Input
            id="description"
            placeholder="Brief description of the dataset"
            value={purchaseData.description}
            onChange={(e) => setPurchaseData({...purchaseData, description: e.target.value})}
            className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
          />
        </div>

        {/* Purchase Button */}
        <Button 
          onClick={handlePurchase} 
          disabled={isPurchasing || !purchaseData.datasetId || purchaseData.price <= 0}
          className="w-full h-11 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
        >
          {isPurchasing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing Purchase...
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Purchase Dataset
            </>
          )}
        </Button>

        {/* Purchase Result */}
        {purchaseResult && (
          <div className={`p-4 rounded-lg border ${
            purchaseResult.success 
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50' 
              : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50'
          }`}>
            <div className="flex items-start gap-3">
              {purchaseResult.success ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-2 flex-1">
                <p className={`text-sm font-medium ${
                  purchaseResult.success 
                    ? 'text-emerald-700 dark:text-emerald-400' 
                    : 'text-rose-700 dark:text-rose-400'
                }`}>
                  {purchaseResult.message}
                </p>
                
                {purchaseResult.success && purchaseResult.txHash && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Transaction
                      </Badge>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                        {FormatUtils.formatAddress(purchaseResult.txHash, 8, 8)}
                      </span>
                    </div>
                    {purchaseResult.walrusId && (
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Database className="h-3 w-3 mr-1" />
                          Walrus
                        </Badge>
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                          {purchaseResult.walrusId.substring(0, 35)}...
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
                Decentralized Data Marketplace
              </h4>
              <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                All datasets are stored on Walrus with provable authenticity. 
                Ownership and access rights are managed by smart contracts on Sui blockchain.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}