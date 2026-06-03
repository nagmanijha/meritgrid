import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { weakTopic } = await request.json();

    return NextResponse.json({
      topic: weakTopic,
      resources: [
        { title: `Deep Dive into ${weakTopic}`, type: "Video", url: "https://youtube.com", free: true },
        { title: `${weakTopic} Official Docs`, type: "Documentation", url: "https://developer.mozilla.org", free: true },
      ]
    });
  } catch (error) {
    return NextResponse.json({ error: "Resource AI Error" }, { status: 500 });
  }
}
