import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { candidateSkills, jobRequirements } = await request.json();

    // Mock AI Fit-Score calculation
    const fitScore = Math.floor(Math.random() * 20) + 75; // Random score between 75-95
    
    return NextResponse.json({
      fitScore,
      summary: "Candidate shows strong proficiency in backend requirements but lacks cloud deployment experience.",
      missingSkills: ["AWS Deployment", "Docker"]
    });
  } catch (error) {
    return NextResponse.json({ error: "Hiring AI Error" }, { status: 500 });
  }
}
