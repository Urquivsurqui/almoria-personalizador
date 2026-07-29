"use client";

import Image from "next/image";
import { catalogo } from "../data/catalogo";
import { useEffect, useRef, useState } from "react";
import {
    useConfigurador,
    type Configuracion,
} from "../context/ConfiguradorContext";

import OverlayMadera from "./OverlayMadera";
import VistaPlacaMetal from "./VistaPlacaMetal";

type Props = {
    paso: number;
    config?: Configuracion;
    mobile?: boolean;
};
export default function VistaPrevia({
    paso,
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

            setEscala(ancho / 700);

        }

        actualizarEscala();

        window.addEventListener("resize", actualizarEscala);

        return () => {
            window.removeEventListener("resize", actualizarEscala);
        };

    }, []);
    const config = configProp ?? contexto.config;

    /* =========================
       BIENVENIDA
    ========================= */

    if (!config.equipo) {

        return (

            <div className="flex flex-col items-center justify-center h-full text-center px-32 -mt-20">

                <Image
                    src="/logo-almoria.png"
                    alt="Almoria"
                    width={320}
                    height={320}
                    priority
                />

                <div className="-mt-16">

                    <h2 className="text-5xl font-serif">
                        Crea un regalo único
                    </h2>

                    <p className="text-gray-600 text-xl leading-9 mt-5 max-w-xl">
                        Diseña un portalapicero personalizado para el verdadero hincha.
                    </p>

                    <div className="mt-8 space-y-4 text-lg">

                        <div className="flex items-center gap-3 justify-center">
                            <span>🏆</span>
                            <span>Elige tu equipo favorito</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center">
                            <span>🎨</span>
                            <span>Escoge el modelo y color</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center">
                            <span>✍️</span>
                            <span>Personaliza el grabado</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center">
                            <span>🚚</span>
                            <span>Envíos a todo el Perú</span>
                        </div>

                    </div>

                </div>

            </div>

        );

    }

    /* =========================
       PASO 5
    ========================= */

    if (paso === 5) {
        return (
            <VistaPlacaMetal
                config={config}
                mobile={mobile}
            />
        );
    }

    /* =========================
       OBTENER IMAGEN
    ========================= */

    let imagen: string;

    if (config.modelo) {

        const equipo = catalogo[
            config.equipo as keyof typeof catalogo
        ];

        const modelo = equipo.modelos[
            config.modelo as keyof typeof equipo.modelos
        ];

        imagen = modelo.preview;

        if (config.color) {

            imagen =
                modelo.colores[
                config.color as keyof typeof modelo.colores
                ];

        }

    } else {

        const primerModelo =
            Object.keys(
                catalogo[
                    config.equipo as keyof typeof catalogo
                ].modelos
            )[0];

        const equipo = catalogo[
            config.equipo as keyof typeof catalogo
        ];

        imagen = equipo.modelos[
            primerModelo as keyof typeof equipo.modelos
        ].preview;

    }

    /* =========================
       PRODUCTO
    ========================= */

    return (
        <div className="flex justify-center items-center h-full w-full">

            <div
                ref={contenedorRef}
                className="relative w-full max-w-[700px] aspect-[7/9] transition-all duration-300"
            >

                <Image
                    src={imagen}
                    alt="Producto"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                />

                <OverlayMadera
                    config={config}
                    escala={escala}
                />

            </div>

        </div>

    );

}