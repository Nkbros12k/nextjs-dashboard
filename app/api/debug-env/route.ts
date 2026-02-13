import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        postgresUrlSet: !!process.env.POSTGRES_URL,
        authSecretSet: !!process.env.AUTH_SECRET,
        postgresUrlStart: process.env.POSTGRES_URL ? process.env.POSTGRES_URL.substring(0, 10) : 'missing',
        nodeEnv: process.env.NODE_ENV
    });
}
export const dynamic = 'force-dynamic';
