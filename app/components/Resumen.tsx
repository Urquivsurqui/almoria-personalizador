"use client";

import { useConfigurador } from "../context/ConfiguradorContext";
import { textos } from "../data/textos";

type Props = {
    siguiente: () => void;
    atras: () => void;
};

export default function Resumen({
    siguiente,
    atras,
}: Props) {

    const { config } = useConfigurador();

    return (

        <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">

                PASO 6 DE 7

            </p>
            <h2 className="text-3xl lg:text-5xl font-serif mt-4">

                Revisa tu pedido

            </h2>

            <p className="text-gray-500 mt-3 text-sm lg:text-base">

                Verifica toda la información antes de continuar.

            </p>

            <div className="mt-8 lg:mt-10 rounded-3xl border bg-white shadow-sm p-5 lg:p-8 space-y-5 lg:space-y-6">

                <Item
                    titulo="🏆 Equipo"
                    valor={
                        textos.equipos[
                        config.equipo as keyof typeof textos.equipos
                        ]
                    }
                />

                <Item
                    titulo="👕 Modelo"
                    valor={
                        textos.modelos[
                        config.modelo as keyof typeof textos.modelos
                        ]
                    }
                />

                <Item
                    titulo="🎨 Color"
                    valor={
                        textos.colores[
                        config.color as keyof typeof textos.colores
                        ]
                    }
                />

                <Item
                    titulo="🪵 Nombre"
                    valor={config.nombre}
                />

                <Item
                    titulo="🪵 Placa de madera"
                    valor={config.fraseMadera}
                />

                <Item
                    titulo="🏅 Placa metálica"
                    valor={config.fraseMetal}
                />

            </div>

            <div className="mt-10 flex gap-4">

                <button
                    onClick={atras}
                    className="flex-1 rounded-2xl border border-gray-300 py-4 lg:py-5 font-semibold hover:bg-gray-100 transition-all duration-200"
                >
                    ← Atrás
                </button>

                <button
                    onClick={siguiente}
                    className="flex-1 rounded-2xl bg-black text-white py-4 lg:py-5 font-semibold hover:bg-gray-800 transition-all duration-200"
                >
                    Continuar →
                </button>

            </div>

        </div>

    );

}

type ItemProps = {

    titulo: string;

    valor: string;

};

function Item({

    titulo,

    valor,

}: ItemProps) {

    return (

        <div className="flex flex-col lg:flex-row lg:justify-between gap-2 border-b pb-4">

            <span className="text-gray-500 text-sm lg:text-base">

                {titulo}

            </span>

            <span className="font-semibold text-left lg:text-right max-w-full lg:max-w-[280px] break-words">

                {valor || "-"}

            </span>

        </div>

    );

}