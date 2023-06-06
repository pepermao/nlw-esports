import { Check, GameController } from "phosphor-react"
import { useState, FormEvent } from "react";
import InputModal from "./InputModal";

import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import axios from "axios";

const CreateAdModal = ({ games }) => {
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

    const handleUseVoiceChannelChange = () => {
        setUseVoiceChannel(!useVoiceChannel);
    }

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        console.log(data)
        if(!data.name) {
            return;
        }

        try {
            console.log("post")
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(day => Number(day)),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel
            })
            alert("Anúncio criado com sucesso!");
            window.location.reload();
        }
        catch (error) {
            alert("Erro ao criar o anúncio!");
        }

    }

    return (

        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
            <Dialog.Content
                className="fixed bg-[#2A2634] w-[480px] px-10 py-8 text-white top-1/2
                left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25"
            >
                <Dialog.Title className="text-3xl font-black text-white mt-1 mb-8">Publique um anúncio</Dialog.Title>
                
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="text-sm text-white font-semibold">Qual o game?</label>
                        <select
                            className="placeholder:text-zinc-500 px-4 py-3 bg-zinc-900 rounded text-xs text-zinc-500 h-[50px]"
                            id="game"
                            defaultValue=""
                            name="game"
                        >
                            <option disabled value="">Selecione o game que deseja jogar</option>
                            {games.map(game => (
                                <option key={game.id} value={game.id}>{game.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm text-white font-semibold">Seu nome (ou nickname)</label>
                        <InputModal
                            id="name"
                            type="text"
                            placeholder="Como te chamam dentro do game?"
                            name="name"
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="yearsPlaying" className="text-sm text-white font-semibold">Joga há quantos anos?</label>
                            <InputModal
                                id="yearsPlaying"
                                type="text"
                                placeholder="Tudo bem ser ZERO?"
                                name="yearsPlaying"
                            />                    
                        </div>

                        <div>
                            <label htmlFor="discord" className="text-sm text-white font-semibold">Qual seu discord?</label>
                            <InputModal
                                id="discord"
                                type="text"
                                placeholder="Usuario#0000"
                                name="discord"
                            />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-sm text-white">Quando costuma jogar?</label>
                                <ToggleGroup.Root
                                    type="multiple"
                                    className="grid grid-cols-4 gap-2"
                                    value={weekDays}
                                    onValueChange={setWeekDays}
                                >
                                    <ToggleGroup.Item
                                        value="0" 
                                        title="Domingo"
                                        className={`w-8 h-8 rounded ${weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"}`}
                                    >
                                        D
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="1" 
                                        title="Segunda"
                                        className={`w-8 h-8 rounded ${weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"}`}
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="2" 
                                        title="Terça"
                                        className={`w-8 h-8 rounded ${weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"}`}
                                    >
                                        T
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="3" 
                                        title="Quarta"
                                        className={`w-8 h-8 rounded ${weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"}`}
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="4" 
                                        title="Quinta"
                                        className={`w-8 h-8 rounded ${weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"}`}
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="5" 
                                        title="Sexta"
                                        className={`w-8 h-8 rounded ${weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"}`}
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="6" 
                                        title="Sábado"
                                        className={`w-8 h-8 rounded ${weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"}`}
                                    >
                                        S
                                    </ToggleGroup.Item>
                                </ToggleGroup.Root>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart" className="text-sm text-white">Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                                <InputModal
                                    id="hourStart"
                                    type="time"
                                    placeholder="De"
                                    name="hourStart"
                                    style={{
                                        width: 80,
                                        height: 40,
                                    }}
                                />

                                <InputModal
                                    id="hourEnd"
                                    type="time"
                                    placeholder="Até"
                                    name="hourEnd"
                                    style={{
                                        width: "80px",
                                        height: "40px"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <label className="flex gap-2 text-sm items-center">
                        <Checkbox.Root onCheckedChange={handleUseVoiceChannelChange} className="w-6 h-6 rounded bg-zinc-900 p-1">
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar por chat de voz
                    </label>

                    <div className="flex justify-end gap-4">
                        <Dialog.Close
                            type="button"
                            className="bg-zinc-500 text-white text-sm px-5 rounded-md h-12 font-semibold hover:bg-zinc-600"
                        >
                            Cancelar
                        </Dialog.Close>
                        <button
                            type="submit"
                            className="bg-violet-500 text-white text-sm px-4 rounded flex items-center gap-3 h-12 hover:bg-violet-600"
                        >
                            <GameController size={24} />
                            Encontrar duo
                        </button>
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )

}

export default CreateAdModal