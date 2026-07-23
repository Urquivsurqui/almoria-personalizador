"use client";

import Input from "./Input";
import Select from "./Select";
import { useConfigurador } from "@/app/context/ConfiguradorContext";
import { distritosLima } from "@/app/data/distritosLima";

type Props = {
    mostrarErrores: boolean;
};

export default function FormLima({
    mostrarErrores,
}: Props) {

    const { config, setConfig } = useConfigurador();

    return (

        <div className="space-y-6">

            <Input
                label="Nombre completo"
                required
                value={config.envio.nombre}
                placeholder="Ej. Juan Pérez"
                error={
                    mostrarErrores && !config.envio.nombre.trim()
                        ? "Ingrese su nombre completo."
                        : ""
                }
                onChange={(value) =>
                    setConfig((prev) => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            nombre: value,
                        },
                    }))
                }
            />

            <Input
                label="Celular"
                required
                value={config.envio.celular}
                placeholder="987654321"
                error={
                    mostrarErrores && config.envio.celular.trim().length !== 9
                        ? "Ingrese un celular válido de 9 dígitos."
                        : ""
                }
                onChange={(value) =>
                    setConfig((prev) => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            celular: value,
                        },
                    }))
                }
            />

            <Select
                label="Distrito"
                required
                value={config.envio.distrito}
                options={distritosLima}
                error={
                    mostrarErrores && !config.envio.distrito
                        ? "Seleccione un distrito."
                        : ""
                }
                onChange={(value) =>
                    setConfig((prev) => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            distrito: value,
                        },
                    }))
                }
            />

            <Input
                label="Dirección"
                required
                value={config.envio.direccion}
                placeholder="Av. ..."
                error={
                    mostrarErrores && !config.envio.direccion.trim()
                        ? "Ingrese la dirección."
                        : ""
                }
                onChange={(value) =>
                    setConfig((prev) => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            direccion: value,
                        },
                    }))
                }
            />

            <Input
                label="Referencia"
                value={config.envio.referencia}
                placeholder="Frente al parque..."
                onChange={(value) =>
                    setConfig((prev) => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            referencia: value,
                        },
                    }))
                }
            />

        </div>

    );

}