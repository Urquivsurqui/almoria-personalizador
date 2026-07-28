"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    useConfigurador,
    type Configuracion,
} from "../context/ConfiguradorContext";
import OverlayMetal from "./OverlayMetal";

type Props = {
    config?: Configuracion;
    mobile?: boolean;
};

export default function VistaPlacaMetal({
    config: configProp,
    mobile = false,
}: Props) {
    const contexto = useConfigurador();
    const contenedorRef = useRef<HTMLDivElement>(null);

    const [escala, setEscala] = useState(1);

    useEffect(() => {
        function actualizarEscala() {
            if (!contenedorRef.current) return;

            const ancho = contenedorRef.current.offsetWidth;

            setEscala(ancho / 620);
        }

        actualizarEscala();

        window.addEventListener("resize", actualizarEscala);

        return () => {
            window.removeEventListener("resize", actualizarEscala);
        };
    }, []);

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
                ref={contenedorRef}
                className="relative w-full max-w-[620px] aspect-[620/420]"
            >
                <Image
                    src={imagen}
                    alt="Placa metálica"
                    fill
                    priority
                    className="object-contain"
                />
                <OverlayMetal
                    config={config}
                    escala={escala}
                />
            </div>
        </div>
    );
}