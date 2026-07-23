"use client";

import { useState } from "react";
import FormLima from "./FormLima";
import FormProvincia from "./FormProvincia";
import { useConfigurador } from "@/app/context/ConfiguradorContext";
import { validarEnvio } from "@/app/utils/validaciones";

type Props = {
    atras: () => void;
    siguiente: () => void;
};

export default function Envio({
    atras,
    siguiente,
}: Props) {

    const { config, setConfig } = useConfigurador();

    const [intentadoContinuar, setIntentadoContinuar] = useState(false);

    const seleccionarTipo = (tipo: "lima" | "provincia") => {

        setConfig((prev) => ({
            ...prev,
            envio: {
                ...prev.envio,
                tipo,
                distrito: "",
                direccion: "",
                referencia: "",
                dni: "",
                departamento: "",
                provincia: "",
                shalom: "",
            },
        }));

    };

    function continuar() {

        setIntentadoContinuar(true);

        if (!validarEnvio(config)) return;

        siguiente();

    }

    return (

        <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                PASO 7 DE 8
            </p>

            <h2 className="text-5xl font-serif mt-4">
                Datos de envío
            </h2>

            <p className="text-gray-500 mt-3">
                ¿Dónde deseas recibir tu pedido?
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

                <button
                    onClick={() => seleccionarTipo("lima")}
                    className={`rounded-3xl border p-8 text-left transition ${config.envio.tipo === "lima"
                            ? "border-black bg-gray-50"
                            : "hover:border-gray-400"
                        }`}
                >

                    <div className="text-5xl">🚚</div>

                    <h3 className="mt-5 text-2xl font-semibold">
                        Lima Metropolitana
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Entrega a domicilio.
                    </p>

                </button>

                <button
                    onClick={() => seleccionarTipo("provincia")}
                    className={`rounded-3xl border p-8 text-left transition ${config.envio.tipo === "provincia"
                            ? "border-black bg-gray-50"
                            : "hover:border-gray-400"
                        }`}
                >

                    <div className="text-5xl">📦</div>

                    <h3 className="mt-5 text-2xl font-semibold">
                        Provincia
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Envío mediante Shalom.
                    </p>

                </button>

            </div>

            {config.envio.tipo === "lima" && (

                <div className="mt-10 rounded-3xl border bg-white shadow-sm p-8">

                    <h3 className="text-2xl font-semibold mb-6">
                        Datos para Lima
                    </h3>

                    <FormLima
                        mostrarErrores={intentadoContinuar}
                    />

                </div>

            )}

            {config.envio.tipo === "provincia" && (

                <div className="mt-10 rounded-3xl border bg-white shadow-sm p-8">

                    <h3 className="text-2xl font-semibold mb-4">
                        Datos para Provincia
                    </h3>

                    <p className="text-gray-500 mb-6">
                        El envío se realizará mediante Shalom.
                    </p>

                    <FormProvincia
                        mostrarErrores={intentadoContinuar}
                    />

                </div>

            )}

            {intentadoContinuar && !validarEnvio(config) && (

                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">

                    <p className="text-red-600 font-medium">
                        Completa todos los campos obligatorios para continuar.
                    </p>

                </div>

            )}

            <div className="mt-10 flex gap-4">

                <button
                    onClick={atras}
                    className="flex-1 rounded-2xl border py-4 font-semibold hover:bg-gray-100 transition"
                >
                    ← Atrás
                </button>

                <button
                    onClick={continuar}
                    className="flex-1 rounded-2xl bg-black py-4 font-semibold text-white hover:opacity-90 transition"
                >
                    Continuar →
                </button>

            </div>

        </div>

    );

}