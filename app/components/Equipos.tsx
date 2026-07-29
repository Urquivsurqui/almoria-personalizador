"use client";

import Image from "next/image";
import { useConfigurador } from "../context/ConfiguradorContext";
import { equipos } from "../data/equipos";

type Props = {
    siguiente: () => void;
};

export default function Equipos({ siguiente }: Props) {

    const { setConfig } = useConfigurador();

    function seleccionarEquipo(equipo: string) {

        setConfig((prev) => ({
            ...prev,
            equipo,
        }));

        siguiente();

    }

    return (

        <div>

            <p className="uppercase tracking-[4px] text-gray-400 text-xs">
                PASO 1 DE 8
            </p>

            <h2 className="text-3xl lg:text-4xl font-serif mt-3">
                Elige tu equipo
            </h2>

            <p className="text-gray-500 mt-3 text-sm lg:text-base">
                Selecciona el equipo para comenzar la personalización.
            </p>

            <div className="grid grid-cols-3 gap-3 lg:gap-5 mt-8">

                {equipos.map((equipo) => (

                    <button

                        key={equipo.id}

                        onClick={() => seleccionarEquipo(equipo.id)}

                        className="group bg-white border border-gray-200 rounded-2xl lg:rounded-3xl p-3 lg:p-6 hover:border-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >

                        <div className="h-[90px] lg:h-[160px] flex items-center justify-center">

                            <Image
                                src={equipo.logo}
                                alt={equipo.nombre}
                                width={120}
                                height={120}
                                className={`w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] object-contain transition-all duration-300 group-hover:scale-110 ${equipo.id === "universitario"
                                    ? "-translate-y-2"
                                    : ""
                                    }`}
                            />

                        </div>

                        <h3 className="mt-2 min-h-[52px] lg:min-h-[56px] flex items-center justify-center text-center text-xs lg:text-lg font-semibold leading-tight whitespace-pre-line break-words px-1">

                            {equipo.nombre}

                        </h3>

                    </button>

                ))}

            </div>

        </div>

    );

}