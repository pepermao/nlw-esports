import { GameController } from "phosphor-react";
import DuoInfo from "./DuoInfo";
import * as Dialog from "@radix-ui/react-dialog"

const DuoCard = ({ ad, setDiscord }) => {
    return (
        <div
            style={{
                maxWidth: "100%",
                backgroundColor: "#2A2634",
                borderRadius: 8,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
            }}
        >
            <DuoInfo
                label="Nome"
                value={ad.name}
            />

            <DuoInfo
                label="Tempo de jogo"
                value={`${ad.yearsPlaying} ano(s)`}
            />

            <DuoInfo
                label="Disponibilidade"
                value={`${ad.weekDays.length} dias \u2022 ${ad.hourStart} - ${ad.hourEnd} `}
            />

            <DuoInfo
                label="Chamada de áudio"
                value={ad.useVoiceChannel ? 'Sim' : 'Não'}
                style={{ color: "#34D399"}}
            />

            <Dialog.Trigger
                style={{
                    width: "100%",
                    height: 36,
                    borderRadius: 6,
                    backgroundColor: "#8B5CF6",
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={() => setDiscord(ad.discord)}
            >
                <GameController color="#fff" size={20} />
                <p
                    style={{
                        color: "#fff",
                        fontSize: 14,
                        marginLeft: 8,
                    }}
                >
                    Conectar
                </p>
            </Dialog.Trigger>
        </div>
    )
}

export default DuoCard;