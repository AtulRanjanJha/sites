import { cn } from "@/lib/utils";

interface MemoryCardProps {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const MemoryCard = ({ value, isFlipped, isMatched, onClick }: MemoryCardProps) => {
  return (
    <div
      className={cn(
        "memory-card w-24 h-32 cursor-pointer select-none",
        isFlipped && "flipped"
      )}
      onClick={onClick}
    >
      <div className="memory-card-inner relative w-full h-full">
        <div className="memory-card-front absolute w-full h-full rounded-xl bg-white shadow-lg border border-border/20 flex items-center justify-center transform transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-2xl">?</span>
          </div>
        </div>
        <div className="memory-card-back absolute w-full h-full rounded-xl bg-white shadow-lg border border-border/20 flex items-center justify-center">
          <span className="text-4xl">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;