import { useEffect, useState } from "react";
import { toast } from "sonner";
import MemoryCard from "@/components/MemoryCard";
import GameStats from "@/components/GameStats";

const CARD_VALUES = ["🌟", "🎨", "🎭", "🎮", "🎯", "🎲", "🎸", "🎧"];

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const Index = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [firstCard, setFirstCard] = useState<Card | null>(null);
  const [secondCard, setSecondCard] = useState<Card | null>(null);

  const initializeGame = () => {
    const shuffledCards = [...CARD_VALUES, ...CARD_VALUES]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setMoves(0);
    setTime(0);
    setIsPlaying(true);
    setFirstCard(null);
    setSecondCard(null);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.value === secondCard.value) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true }
              : card
          )
        );
        setFirstCard(null);
        setSecondCard(null);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFirstCard(null);
          setSecondCard(null);
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (cards.length && cards.every((card) => card.isMatched)) {
      setIsPlaying(false);
      toast("Congratulations! 🎉", {
        description: `You completed the game in ${moves} moves and ${time} seconds!`,
      });
    }
  }, [cards, moves, time]);

  const handleCardClick = (card: Card) => {
    if (!isPlaying || card.isFlipped || card.isMatched || secondCard) return;

    setCards((prev) =>
      prev.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
    );

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setMoves((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-2 animate-scale-up">
        <h1 className="text-4xl font-bold">Memory Game</h1>
        <p className="text-muted-foreground">Match the pairs to win!</p>
      </div>

      <GameStats moves={moves} time={time} className="animate-scale-up" />

      <div className="grid grid-cols-4 gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-border/20 shadow-lg animate-scale-up">
        {cards.map((card) => (
          <MemoryCard
            key={card.id}
            {...card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>

      <button
        onClick={initializeGame}
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 animate-scale-up"
      >
        Restart Game
      </button>
    </div>
  );
};

export default Index;