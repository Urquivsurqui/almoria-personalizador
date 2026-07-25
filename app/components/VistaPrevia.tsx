"use client";

import Image from "next/image";
import { catalogo } from "../data/catalogo";
import {
    useConfigurador,
    type Configuracion,
} from "../context/ConfiguradorContext";

import OverlayMadera from "./OverlayMadera";
import VistaPlacaMetal from "./VistaPlacaMetal";

type Props = {
    paso: number;
    config?: Configuracion;
};

export default function VistaPrevia({
    paso,
    config: configProp,
}: Props) {

    const contexto = useConfigurador();

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

                    <p className="text-gray-600 text-xl leading-9 mt-5 max-w-lg">
                        Personaliza tu portalápices en solo unos pasos.
                        <br />
                        <br />
                        Diseña un recuerdo exclusivo para los verdaderos hinchas.
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
        return <VistaPlacaMetal config={config} />;
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
                className="relative transition-all duration-300"
                style={{
                    width: 700,
                    height: 900,
                }}
            >

                <Image
                    src={imagen}
                    alt="Producto"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                />

                <OverlayMadera config={config} />

            </div>

        </div>

    );

}