"use client";
import { coordenadas } from "../data/coordenadas";
import {
    useConfigurador,
    type Configuracion,
} from "../context/ConfiguradorContext";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
    weight: "400",
    subsets: ["latin"],
});
type Props = {
    config?: Configuracion;
    escala?: number;
};
export default function OverlayMetal({
    config: configProp,
    escala = 1,
}: Props) {

    const contexto = useConfigurador();

    const config = configProp ?? contexto.config;

    if (!config.equipo || !config.modelo) return null;


    const equipo = coordenadas[
        config.equipo as keyof typeof coordenadas
    ];

    const p = equipo[
        config.modelo as keyof typeof equipo
    ];

    const size = 24;

    return (
        <div
            className="absolute"
            style={{
                left: p.metal.x * escala,
                top: p.metal.y * escala,
                width: (p.metal.width + 8) * escala,
                transform: "translate(-50%,-50%)",
                textAlign: "center",
                fontFamily: "'Alex Brush', cursive",
                fontWeight: 600,
                letterSpacing: `${2 * escala}px`,
                fontSize: size * escala,
                lineHeight: 1.30,
                whiteSpace: "pre-line",
                color: "#D9D9D9",
                textShadow: "none",
            }}
        >
            {config.fraseMetal}
        </div>
    );
}