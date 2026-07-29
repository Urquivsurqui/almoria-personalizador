"use client";

import Image from "next/image";
import { catalogo } from "../data/catalogo";
import { useConfigurador } from "../context/ConfiguradorContext";

type Props = {
    siguiente: () => void;
    atras: () => void;
};

export default function Modelo({ siguiente, atras }: Props) {

    const { config, setConfig } = useConfigurador();

    const modelos = Object.entries(
        catalogo[
            config.equipo as keyof typeof catalogo
        ].modelos
    );

    return (

        <div className="flex flex-col">

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                PASO 2 DE 6
            </p>

            <h2 className="text-3xl lg:text-5xl font-serif mt-4">
                Elige el modelo
            </h2>

            <p className="text-gray-600 mt-4 text-sm lg:text-base">
                Selecciona el modelo de portalápices.
            </p>

            <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-8 lg:mt-10">

                {modelos.map(([id, modelo]: any) => (

                    <button

                        key={id}

                        onClick={() => {

                            setConfig({
                                ...config,
                                modelo: id,
                                color: "",
                            });

                            siguiente();

                        }}

                        className="border rounded-2xl lg:rounded-3xl p-3 lg:p-6 hover:shadow-xl hover:scale-105 transition duration-300"

                    >

                        <div className="flex justify-center">

                            <Image

                                src={modelo.preview}

                                alt={modelo.nombre}

                                width={180}
                                height={180}

                                className="object-contain h-32 lg:h-52 w-auto"

                            />

                        </div>

                        <h3 className="text-base lg:text-2xl font-semibold mt-3 lg:mt-6 text-center">

                            {modelo.nombre}

                        </h3>

                    </button>

                ))}

            </div>

            <div className="mt-10">

                <button

                    onClick={atras}

                    className="px-6 lg:px-8 py-3 border rounded-xl hover:bg-gray-100 transition"

                >

                    ← Atrás

                </button>

            </div>

        </div>

    );

}