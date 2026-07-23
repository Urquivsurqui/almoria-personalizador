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

            <h2 className="text-5xl font-serif mt-4">

                Revisa tu pedido

            </h2>

            <p className="text-gray-500 mt-3">

                Verifica toda la información antes de continuar.

            </p>

            <div className="mt-10 rounded-3xl border bg-white shadow-sm p-8 space-y-6">

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
                    className="flex-1 rounded-2xl border border-gray-300 py-5 font-semibold hover:bg-gray-100 transition"
                >
                    ← Atrás
                </button>

                <button
                    onClick={siguiente}
                    className="flex-1 rounded-2xl bg-black text-white py-5 font-semibold hover:opacity-90 transition"
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

        <div className="flex justify-between items-start border-b pb-4">

            <span className="text-gray-500">

                {titulo}

            </span>

            <span className="font-semibold text-right max-w-[280px]">

                {valor || "-"}

            </span>

        </div>

    );

}