import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

interface StartTrainingRequest {
  model_type: string;
  epochs: number;
  batch_size: number;
  learning_rate: number;
  dataset_cid?: string;
  optimizer?: string;
  validation_split?: number;
}

/**
 * POST: Start training session (proxies to backend)
 */
export async function POST(request: NextRequest) {
  try {
    const body: StartTrainingRequest = await request.json();
    
    console.log('Starting training with config:', body);
    
    // Call backend API
    const response = await fetch(`${BACKEND_URL}/api/training/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend error:', errorText);
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { detail: errorText };
      }
      
      return NextResponse.json({ 
        success: false, 
        detail: errorData.detail || 'Failed to start training'
      }, { status: response.status });
    }
    
    const data = await response.json();
    
    console.log('Training started on backend:', data.session_id);
    
    return NextResponse.json({ 
      success: true, 
      session_id: data.session_id,
      message: 'Training started successfully',
      status: 'preparing'
    });
    
  } catch (error) {
    console.error('Failed to start training:', error);
    return NextResponse.json({ 
      success: false, 
      detail: error instanceof Error ? error.message : 'Failed to connect to backend'
    }, { status: 500 });
  }
}