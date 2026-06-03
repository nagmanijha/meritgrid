import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('jobId');

    const whereClause: any = {};
    if (jobId) {
      whereClause.jobId = parseInt(jobId, 10);
    }

    const applications = await prisma.application.findMany({
      where: whereClause,
      include: {
        user: {
          include: {
            skills: true
          }
        },
        job: true
      },
      orderBy: { fitScore: 'desc' }
    });

    return NextResponse.json(applications);
  } catch (error: any) {
    console.error('Fetch Applications Error:', error);
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
  }
}
