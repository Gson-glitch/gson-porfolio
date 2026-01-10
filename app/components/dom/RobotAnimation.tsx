'use client';

import dynamic from 'next/dynamic';
import animationData from '../../../public/animations/hello-animation.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function RobotAnimation() {
  return (
    <div className="w-56 h-56 lg:w-64 lg:h-64">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.3))' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
}
