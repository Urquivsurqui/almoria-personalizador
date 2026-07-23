"use client";

import {
    useConfigurador,
    type Configuracion,
} from "../context/ConfiguradorContext";

import { coordenadas } from "../data/coordenadas";

type Props = {
    config?: Configuracion;
};

export default function OverlayMetal({
    config: configProp,
}: Props) {

    const contexto = useConfigurador();

    const config = configProp ?? contexto.config;

    if (!config.equipo || !config.modelo) return null;

    const p =
        coordenadas[
        config.equipo as keyof typeof coordenadas
        ][
        config.modelo as keyof typeof coordenadas[typeof config.equipo]
        ];

    const size = 20;

    return (
        <div
            className="absolute"
            style={{
                left: p.metal.x,
                top: p.metal.y,
                width: p.metal.width,
                transform: "translate(-50%,-50%)",
                textAlign: "center",
                fontFamily: "Palatino Linotype",
                fontWeight: 600,
                letterSpacing: "0.4px",
                fontSize: size,
                lineHeight: 1.35,
                whiteSpace: "pre-line",
                background:
                    "linear-gradient(180deg,#ffffff 0%,#d7d7d7 30%,#8f8f8f 50%,#ececec 70%,#b5b5b5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 1px 1px rgba(255,255,255,.35)",
            }}
        >
            {config.fraseMetal}
        </div>
    );
}