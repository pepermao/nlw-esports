import { CheckCircle, X } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"

const DiscordModal = ({ discord }) => {

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
            <Dialog.Content
                className="fixed bg-[#2A2634] w-[380px] px-10 py-8 text-white top-1/2
                left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25"
            >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Dialog.Close>
                        <X
                            size={24}
                            color="#71717A"
                            onClick={() => {}}
                        />
                    </Dialog.Close>
                </div>
                
                <div className="flex items-center flex-col gap-4">
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#2A2634",
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <button>
                            <CheckCircle
                                size={72}
                                color="#34D399"
                                weight='bold'
                            />
                        </button>

            <           div className="mt-10 text-center">
                            <strong className="text-white text-2xl font-black block">Let's Play!</strong>
                            <span className="text-zinc-400 block mt-1">Agora é só começar a jogar!</span>
                        </div>

                        <p style={{
                            color: "#fff",
                            fontSize: 16,
                            marginTop: 24,
                            marginBottom: 8,
                        }}>
                            Adicione no discord
                        </p>

                        <button
                            style={{
                                width: 231,
                                height: 48,
                                backgroundColor: "#121214",
                                borderRadius: 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 16,
                            }}
                        >
                            <p style={{
                                 color: "#fff",
                                 fontSize: 16,
                            }}>
                                {discord}
                            </p>
                        </button>
                    </div>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )

}

export default DiscordModal