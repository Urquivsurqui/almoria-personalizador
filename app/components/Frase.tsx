"use client";

import { useConfigurador } from "../context/ConfiguradorContext";

type Props = {
    siguiente: () => void;
    atras: () => void;
};

export default function Frase({ siguiente, atras }: Props) {
    const { config, setConfig } = useConfigurador();

    return (
        <div className="px-2 lg:px-0">

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                PASO 6 DE 7
            </p>

            <h2 className="text-3xl lg:text-5xl font-serif mt-4">
                Escribe una frase
            </h2>

            <p className="text-gray-600 mt-4 text-sm lg:text-base">
                Esta frase aparecerá grabada debajo del nombre.
            </p>

            <textarea
                value={config.fraseMadera}
                onChange={(e) =>
                    setConfig({
                        ...config,
                        fraseMadera: e.target.value,
                    })
                }
                placeholder="Ejemplo: Siempre contigo ❤️"
                className="w-full border border-gray-300 rounded-2xl p-4 mt-8 lg:mt-10 text-base lg:text-xl h-36 lg:h-40 resize-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
            />

            <div className="flex justify-between items-center mt-8 lg:mt-12 gap-4">

                <button
                    onClick={atras}
                    className="px-6 lg:px-8 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                >
                    ← Atrás
                </button>

                <button
                    onClick={siguiente}
                    className="px-6 lg:px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-200"
                >
                    Siguiente →
                </button>

            </div>

        </div>
    );
}