"use client";

import { useState } from "react";
import { useConfigurador } from "../context/ConfiguradorContext";
import { frases } from "../data/frases";
import { validarPlacaMadera } from "@/app/utils/validaciones";

type Props = {
    siguiente: () => void;
    atras: () => void;
};

export default function PlacaMadera({
    siguiente,
    atras,
}: Props) {

    const { config, setConfig } = useConfigurador();

    const [intentadoContinuar, setIntentadoContinuar] = useState(false);

    const frasesEquipo =
        frases.madera[
        config.equipo as keyof typeof frases.madera
        ];

    const formularioValido = validarPlacaMadera(config);

    function continuar() {

        setIntentadoContinuar(true);

        if (!formularioValido) return;

        siguiente();

    }

    return (

        <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                PASO 4 DE 8
            </p>

            <h2 className="text-5xl font-serif mt-4">
                Personaliza la placa
            </h2>

            <p className="text-gray-600 mt-4">
                Escribe el nombre y selecciona una frase.
            </p>

            {/* NOMBRE */}

            <div className="mt-10">

                <label className="font-semibold">
                    Nombre <span className="text-red-500">*</span>
                </label>

                <input
                    type="text"
                    value={config.nombre}
                    maxLength={20}
                    onChange={(e) =>
                        setConfig({
                            ...config,
                            nombre: e.target.value.toUpperCase(),
                        })
                    }
                    placeholder="Ej. ADOLFO VARGAS"
                    className={`w-full mt-3 rounded-2xl p-4 text-lg border transition ${intentadoContinuar && config.nombre.trim() === ""
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                />

                <div className="flex justify-between mt-2">

                    <p className="text-sm text-red-500">

                        {intentadoContinuar &&
                            config.nombre.trim() === "" &&
                            "El nombre es obligatorio."}

                    </p>

                    <p className="text-sm text-gray-500">

                        {config.nombre.length}/20

                    </p>

                </div>

            </div>

            {/* FRASES */}

            <div className="mt-10">

                <label className="font-semibold">
                    Frase <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-2 gap-4 mt-4">

                    {frasesEquipo.map((frase) => (

                        <button
                            key={frase.texto}
                            onClick={() =>
                                setConfig({
                                    ...config,
                                    fraseMadera: frase.texto,
                                })
                            }
                            className={`rounded-2xl border p-4 text-left transition ${config.fraseMadera === frase.texto
                                    ? "bg-black text-white border-black"
                                    : "hover:bg-gray-100"
                                }`}
                        >

                            <span className="mr-2">
                                {frase.icono}
                            </span>

                            {frase.texto}

                        </button>

                    ))}

                </div>

                {intentadoContinuar &&
                    config.fraseMadera === "" && (

                        <p className="text-sm text-red-500 mt-3">
                            Debes seleccionar una frase.
                        </p>

                    )}

            </div>

            {intentadoContinuar &&
                !formularioValido && (

                    <div className="mt-8 rounded-xl bg-red-50 border border-red-200 p-4">

                        <p className="text-red-600 font-medium">
                            Completa todos los campos obligatorios para continuar.
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