import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1f2e',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '40px 80px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 50px -12px rgba(59, 130, 246, 0.3)',
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 900,
              background: 'linear-gradient(to right, #3b82f6, #10b981)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
            }}
          >
            GO
          </div>

          <div
            style={{
              fontSize: 70,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#f8fafc',
              marginBottom: 10,
              lineHeight: 1,
            }}
          >
            Gloryson Ondanje
          </div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: 'rgba(248, 250, 252, 0.6)',
              marginBottom: 30,
            }}
          >
            Machine Learning Engineer
          </div>

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Computer Vision', 'NLP', 'Reinforcement Learning'].map((tech, idx) => (
              <div
                key={tech}
                style={{
                  padding: '8px 20px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: 18,
                  color: 'rgba(248, 250, 252, 0.8)',
                  background: idx === 0 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(255,255,255,0.05))'
                    : idx === 2
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(16, 185, 129, 0.2))'
                    : 'rgba(255,255,255,0.05)',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: 18,
              marginTop: 30,
              color: 'rgba(248, 250, 252, 0.4)',
            }}
          >
            gson.io
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}