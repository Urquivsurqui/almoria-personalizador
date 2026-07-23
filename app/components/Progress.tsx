"use client";

type Props = {
    paso: number;
};

export default function Progress({ paso }: Props) {

    const porcentaje = (paso / 6) * 100;

    return (

        <div className="mb-8">

            <div className="flex justify-between mb-2">

                <span className="text-sm text-gray-500">

                    Paso {paso} de 6

                </span>

                <span className="text-sm font-semibold">

                    {Math.round(porcentaje)}%

                </span>

            </div>

            <div className="h-2 rounded-full bg-gray-200 overflow-hidden">

                <div

                    className="h-full bg-black transition-all duration-300"

                    style={{

                        width: `${porcentaje}%`,

                    }}

                />

            </div>

        </div>

    );

}