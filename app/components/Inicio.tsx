"use client";

import Image from "next/image";
import { useConfigurador } from "../context/ConfiguradorContext";
export default function Inicio({
    comenzar,
}: {
    comenzar: () => void;
}) {
    const { config } = useConfigurador();
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 px-10 py-20">

                <div className="border rounded-3xl h-[700px] flex items-center justify-center bg-gray-50">
                    <Image
                        src={
                            config.equipo === "Universitario"
                                ? "/equipos/universitario-blanco.jpeg"
                                : config.equipo === "Alianza Lima"
                                    ? "/equipos/alianza-blanco.jpeg"
                                    : config.equipo === "Sporting Cristal"
                                        ? "/equipos/cristal-blanco.jpeg"
                                        : "/equipos/universitario-blanco.jpeg"
                        }
                        alt="Portalápices"
                        width={420}
                        height={420}
                        className="mx-auto"
                    />
                </div>

                <div className="flex flex-col justify-center">

                    <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                        Almoria • Personalizador
                    </p>

                    <h1 className="text-7xl font-serif leading-none mt-4">
                        Diseña un
                        <br />
                        portalápices
                        <br />
                        único.
                    </h1>

                    <p className="mt-8 text-lg text-gray-600">
                        Personaliza tu producto paso a paso.
                    </p>

                    <button
                        onClick={comenzar}
                        className="mt-10 bg-black text-white rounded-full px-8 py-4 w-fit hover:scale-105 transition"
                    >
                        Comenzar diseño →
                    </button>

                </div>

            </div>
        </main>
    );
}