"use client";

import { catalogo } from "../data/catalogo";
import { useConfigurador } from "../context/ConfiguradorContext";

type Props = {
    siguiente: () => void;
    atras: () => void;
};

const coloresUI: Record<
    string,
    { nombre: string; color: string }
> = {
    blanco: {
        nombre: "Blanco",
        color: "#FFFFFF",
    },
    crema: {
        nombre: "Crema",
        color: "#EFE4C8",
    },
    azul: {
        nombre: "Azul",
        color: "#0B3D91",
    },
    celeste: {
        nombre: "Celeste",
        color: "#66C7F4",
    },
};

export default function Color({
    siguiente,
    atras,
}: Props) {

    const { config, setConfig } = useConfigurador();

    const equipo = catalogo[config.equipo as keyof typeof catalogo];

    const modelo = equipo.modelos[
        config.modelo as keyof typeof equipo.modelos
    ];

    const colores = Object.keys(modelo.colores);

    return (

        <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                PASO 3 DE 6
            </p>

            <h2 className="text-3xl lg:text-5xl font-serif mt-4">
                Elige el color
            </h2>
            <p className="text-gray-600 mt-4 text-sm lg:text-base">
                Selecciona el color del portalápices.
            </p>
            <div className="grid grid-cols-2 gap-3 lg:gap-6 mt-8 lg:mt-10">

                {colores.map((color) => (

                    <button

                        key={color}

                        onClick={() => {

                            setConfig({
                                ...config,
                                color,
                            });

                            siguiente();

                        }}

                        className="border rounded-2xl lg:rounded-3xl p-3 lg:p-6 hover:shadow-xl transition flex items-center gap-3 lg:gap-5"
                    >

                        <div

                            className="w-9 h-9 lg:w-12 lg:h-12 rounded-full border-2 flex-shrink-0"

                            style={{

                                background:
                                    coloresUI[color].color,

                            }}

                        />

                        <div className="text-left flex-1">

                            <p className="font-semibold text-sm lg:text-xl">

                                {coloresUI[color].nombre}

                            </p>

                        </div>

                    </button>

                ))}

            </div>

            <div className="mt-10">

                <button
                    onClick={atras}
                    className="px-6 lg:px-8 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                >
                    ← Atrás
                </button>

            </div>

        </div>

    );

}