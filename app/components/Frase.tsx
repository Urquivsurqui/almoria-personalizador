"use client";

import { useConfigurador } from "../context/ConfiguradorContext";

type Props = {
    siguiente: () => void;
    atras: () => void;
};

export default function Frase({ siguiente, atras }: Props) {
    const { config, setConfig } = useConfigurador();

    return (
        <div className="p-10">

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                PASO 6 DE 7
            </p>

            <h2 className="text-5xl font-serif mt-4">
                Escribe una frase
            </h2>

            <p className="text-gray-600 mt-4">
                Esta frase aparecerá grabada debajo del nombre.
            </p>

            <textarea
                value={config.frase}
                onChange={(e) =>
                    setConfig({
                        ...config,
                        frase: e.target.value,
                    })
                }
                placeholder="Ejemplo: Siempre contigo ❤️"
                className="w-full border rounded-xl p-4 mt-10 text-xl h-40 resize-none"
            />

            <div className="flex justify-between mt-12">

                <button
                    onClick={atras}
                    className="px-8 py-3 border rounded-xl hover:bg-gray-100 transition"
                >
                    ← Atrás
                </button>

                <button
                    onClick={siguiente}
                    className="px-8 py-3 bg-black text-white rounded-xl"
                >
                    Siguiente →
                </button>

            </div>

        </div>
    );
}