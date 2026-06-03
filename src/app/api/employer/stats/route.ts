import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // In a real app, calculate this from the DB
    return NextResponse.json({
      efficiencyRating: 75,
      weeklyInterviews: 42,
      avgScore: 8.4,
      systemStatus: {
        latency: '18ms',
        queueLoad: '12%',
        workerNodes: '402/402',
        gpuUptime: '99.9%'
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
