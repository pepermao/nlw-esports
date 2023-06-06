import { GameProps } from "../App";
import GamesBanner from "./GamesBanner";

interface GamesCarouselProps {
    games: Array<GameProps>;
}

const GamesCarousel = ({ games }: GamesCarouselProps) => {
    return (
        <div className="grid grid-cols-6 gap-6 mt-16">
            {games.map((game) => (
                 <GamesBanner title={game.title} bannerUrl={game.bannerUrl} adsCount={game._count.Ads} key={game.id} />
            ))}
        </div>
    )
}

export default GamesCarousel;