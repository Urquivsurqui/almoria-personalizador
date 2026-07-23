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

            <h2 className="text-5xl font-serif mt-4">
                Elige el modelo
            </h2>

            <p className="text-gray-600 mt-4">
                Selecciona el modelo de portalápices.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-10">

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

                        className="border rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition duration-300"

                    >

                        <div className="flex justify-center">

                            <Image

                                src={modelo.preview}

                                alt={modelo.nombre}

                                width={220}

                                height={220}

                                className="object-contain h-52"

                            />

                        </div>

                        <h3 className="text-2xl font-semibold mt-6">

                            {modelo.nombre}

                        </h3>

                    </button>

                ))}

            </div>

            <div className="mt-10">

                <button

                    onClick={atras}

                    className="px-8 py-3 border rounded-xl hover:bg-gray-100"

                >

                    ← Atrás

                </button>

            </div>

        </div>

    );

}