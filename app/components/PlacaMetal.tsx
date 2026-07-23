"use client";

import { useState } from "react";
import { useConfigurador } from "../context/ConfiguradorContext";
import { frasesMetal } from "../data/frasesMetal";
import { validarPlacaMetal } from "@/app/utils/validaciones";

type Props = {
    siguiente: () => void;
    atras: () => void;
};

export default function PlacaMetal({
    siguiente,
    atras,
}: Props) {

    const { config, setConfig } = useConfigurador();

    const [categoria, setCategoria] =
        useState<keyof typeof frasesMetal>("familia");

    const [intentadoContinuar, setIntentadoContinuar] = useState(false);

    const formularioValido = validarPlacaMetal(config);

    function continuar() {

        setIntentadoContinuar(true);

        if (!formularioValido) return;

        siguiente();

    }

    return (

        <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                PASO 5 DE 8
            </p>

            <h2 className="text-5xl font-serif mt-4">
                Añade una dedicatoria
            </h2>

            <p className="text-gray-600 mt-4">
                Elige el mensaje que irá grabado en la placa metálica.
            </p>

            {/* CATEGORÍAS */}

            <div className="grid grid-cols-2 gap-4 mt-10">

                <button
                    onClick={() => setCategoria("familia")}
                    className={`rounded-2xl border p-4 transition ${categoria === "familia"
                            ? "bg-black text-white border-black"
                            : "hover:bg-gray-100"
                        }`}
                >
                    ❤️ Familia
                </button>

                <button
                    onClick={() => setCategoria("pareja")}
                    className={`rounded-2xl border p-4 transition ${categoria === "pareja"
                            ? "bg-black text-white border-black"
                            : "hover:bg-gray-100"
                        }`}
                >
                    💑 Pareja
                </button>

                <button
                    onClick={() => setCategoria("amigos")}
                    className={`rounded-2xl border p-4 transition ${categoria === "amigos"
                            ? "bg-black text-white border-black"
                            : "hover:bg-gray-100"
                        }`}
                >
                    👨 Amigos
                </button>

                <button
                    onClick={() => setCategoria("hincha")}
                    className={`rounded-2xl border p-4 transition ${categoria === "hincha"
                            ? "bg-black text-white border-black"
                            : "hover:bg-gray-100"
                        }`}
                >
                    ⚽ Hincha
                </button>

            </div>

            {/* FRASES */}

            <div className="grid grid-cols-2 gap-4 mt-8">

                {frasesMetal[categoria].map((frase) => (

                    <button
                        key={frase}
                        onClick={() =>
                            setConfig({
                                ...config,
                                fraseMetal: frase,
                            })
                        }
                        className={`rounded-2xl border p-4 text-left transition ${config.fraseMetal === frase
                                ? "bg-black text-white border-black"
                                : "hover:bg-gray-100"
                            }`}
                    >
                        {frase}
                    </button>

                ))}

            </div>

            {intentadoContinuar &&
                config.fraseMetal === "" && (

                    <p className="text-sm text-red-500 mt-4">
                        Debes seleccionar una dedicatoria.
                    </p>

                )}

            {intentadoContinuar &&
                !formularioValido && (

                    <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4">

                        <p className="text-red-600 font-medium">
                            Selecciona una dedicatoria para continuar.
                        </p>

                    </div>

                )}

            {/* BOTONES */}

            <div className="flex justify-between mt-12">

                <button
                    onClick={atras}
                    className="border rounded-xl px-8 py-3 hover:bg-gray-100"
                >
                    ← Atrás
                </button>

                <button
                    onClick={continuar}
                    className="bg-black text-white rounded-xl px-8 py-3 hover:opacity-90 transition"
                >
                    Continuar →
                </button>

            </div>

        </div>

    );

}