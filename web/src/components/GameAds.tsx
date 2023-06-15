import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import DuoCard from "./DuoCard";
import * as Dialog from "@radix-ui/react-dialog"
import DiscordModal from "./DiscordModal";
import CreateAdBanner from "./CreateAdBanner";
import CreateAdModal from "./CreateAdModal";

const GameAds = () => {
    const params = useParams();
    const { state } = useLocation();
    const [ads, setAds] = useState([]);
    const [discord, setDiscord] = useState("");

    useEffect(() => {
        axios(`http://localhost:3333/games/${params.id}/ads`).then(response => {
            setAds(response.data)
        })
    }, [])

    return (
        <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
            <Logo />

            <div className="mt-10 text-center">
                <strong className="text-white text-2xl font-black block">{state.name}</strong>
                <span className="text-zinc-400 block mt-1">Conecte-se e comece a jogar!</span>
            </div>

            <Dialog.Root>
                <div className={`grid grid-cols-${ads.length > 3 ? ads.length : 4} gap-6 mt-16 w-full`}>
                    {ads && ads.map((ad, index) => (
                        <DuoCard key={index} ad={ad} setDiscord={setDiscord} />
                    ))}
                </div>
                <DiscordModal discord={discord} />
            </Dialog.Root>
            
            <Dialog.Root>
                <CreateAdBanner />
                        
                <CreateAdModal games={state.games} />
            </Dialog.Root>

        </div>
    )
}

export default GameAds;