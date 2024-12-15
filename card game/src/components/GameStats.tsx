import { cn } from "@/lib/utils";

interface GameStatsProps {
  moves: number;
  time: number;
  className?: string;
}

const GameStats = ({ moves, time, className }: GameStatsProps) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn("flex gap-8 text-center", className)}>
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-border/20">
        <p className="text-sm text-muted-foreground">Moves</p>
        <p className="text-2xl font-semibold">{moves}</p>
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-border/20">
        <p className="text-sm text-muted-foreground">Time</p>
        <p className="text-2xl font-semibold">{formatTime(time)}</p>
      </div>
    </div>
  );
};

export default GameStats;