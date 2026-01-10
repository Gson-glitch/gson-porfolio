'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';

interface ShowMoreButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export default function ShowMoreButton({ isExpanded, onClick }: ShowMoreButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:bg-white/10 transition-all font-medium"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp size={20} />
          </>
        ) : (
          <>
            Show More <ChevronDown size={20} />
          </>
        )}
      </button>
    </div>
  );
}
