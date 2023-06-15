import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"

import GamesCarousel from "./GamesCarousel"
import CreateAdBanner from "./CreateAdBanner"
import Logo from "./Logo"
import CreateAdModal from "./CreateAdModal"
import axios from "axios"

export interface GameProps {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        Ads: number;
    }
}

function App() {
    const [gamesArray, setGamesArray] = useState<GameProps[]>([])

    useEffect(() => {
        axios("http://localhost:3333/games").then(response => {
            setGamesArray(response.data)
        })
    }, [])
    
    return (
        <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
            <Logo />

            <h1 className="text-6xl text-white font-black mt-20">
                Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
            </h1>

            <GamesCarousel games={gamesArray} />

            <Dialog.Root>
                <CreateAdBanner />
                        
                <CreateAdModal games={gamesArray} />
            </Dialog.Root>
            
        </div>
    )
}

export default App
