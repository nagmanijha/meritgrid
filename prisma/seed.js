const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Create mock employer
  const employer = await prisma.user.upsert({
    where: { email: 'employer@meritgrid.local' },
    update: {},
    create: {
      email: 'employer@meritgrid.local',
      name: 'Lead Recruiter',
      role: 'employer',
    },
  });

  // Create mock learner
  const learner = await prisma.user.upsert({
    where: { email: 'sarah@meritgrid.local' },
    update: {},
    create: {
      email: 'sarah@meritgrid.local',
      name: 'Sarah C.',
      role: 'learner',
      hireabilityIndex: 940,
    },
  });

  // Create active jobs
  await prisma.jobPosting.create({
    data: {
      title: 'Backend Infrastructure Engineer',
      status: 'LIVE',
      techStack: 'Node.js / K8s / Terraform',
      applicants: 12,
    }
  });

  await prisma.jobPosting.create({
    data: {
      title: 'AI Research Intern',
      status: 'STANDBY',
      techStack: 'PyTorch / NLP / LLM Evaluation',
      scheduledFor: new Date(new Date().setHours(new Date().getHours() + 2)), // 2 hours from now
      applicants: 0,
    }
  });

  // Create Pipeline logs
  await prisma.pipelineLog.createMany({
    data: [
      { type: 'JD', title: 'Backend JD Published', meta: 'ID: 89012' },
      { type: 'CANDIDATE', title: 'New Applicant: Sarah C.', meta: 'Fit Score: 94%' },
      { type: 'FLAG', title: 'Plagiarism Flagged', meta: 'Candidate #341' }
    ]
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
