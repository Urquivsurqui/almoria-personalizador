"use client";

import Image from "next/image";
import {
    useConfigurador,
    type Configuracion,
} from "../context/ConfiguradorContext";
import OverlayMetal from "./OverlayMetal";

type Props = {
    config?: Configuracion;
};

export default function VistaPlacaMetal({
    config: configProp,
}: Props) {
    const contexto = useConfigurador();

    const config = configProp ?? contexto.config;

    let imagen = "/placas/metal-universitario.png";

    if (config.equipo === "alianza") {
        imagen = "/placas/metal-alianza.png";
    }

    if (config.equipo === "cristal") {
        imagen = "/placas/metal-cristal.png";
    }

    return (
        <div className="flex justify-center items-center h-full w-full">
            <div
                className="relative"
                style={{
                    width: 620,
                    height: 420,
                }}
            >
                <Image
                    src={imagen}
                    alt="Placa metálica"
                    fill
                    priority
                    className="object-contain"
                />

                <OverlayMetal config={config} />
            </div>
        </div>
    );
}