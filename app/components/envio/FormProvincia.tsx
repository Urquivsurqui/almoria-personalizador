"use client";

import Input from "./Input";
import Select from "./Select";
import { useConfigurador } from "@/app/context/ConfiguradorContext";
import { peru } from "@/app/data/peru";

type Props = {
    mostrarErrores: boolean;
};

export default function FormProvincia({
    mostrarErrores,
}: Props) {

    const { config, setConfig } = useConfigurador();

    const departamentos = Object.keys(peru);

    const provincias =
        config.envio.departamento === ""
            ? []
            : peru[
            config.envio.departamento as keyof typeof peru
            ];

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
                    setConfig(prev => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            nombre: value,
                        },
                    }))
                }
            />

            <Input
                label="DNI"
                required
                value={config.envio.dni}
                placeholder="12345678"
                error={
                    mostrarErrores &&
                        config.envio.dni.trim().length !== 8
                        ? "Ingrese un DNI válido de 8 dígitos."
                        : ""
                }
                onChange={(value) =>
                    setConfig(prev => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            dni: value,
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
                    mostrarErrores &&
                        config.envio.celular.trim().length !== 9
                        ? "Ingrese un celular válido de 9 dígitos."
                        : ""
                }
                onChange={(value) =>
                    setConfig(prev => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            celular: value,
                        },
                    }))
                }
            />

            <Select
                label="Departamento"
                required
                value={config.envio.departamento}
                options={departamentos}
                error={
                    mostrarErrores && !config.envio.departamento
                        ? "Seleccione un departamento."
                        : ""
                }
                onChange={(value) =>
                    setConfig(prev => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            departamento: value,
                            provincia: "",
                        },
                    }))
                }
            />

            <Select
                label="Provincia"
                required
                value={config.envio.provincia}
                options={provincias}
                error={
                    mostrarErrores && !config.envio.provincia
                        ? "Seleccione una provincia."
                        : ""
                }
                onChange={(value) =>
                    setConfig(prev => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            provincia: value,
                        },
                    }))
                }
            />

            <Input
                label="Agencia Shalom"
                value={config.envio.shalom}
                placeholder="Opcional"
                onChange={(value) =>
                    setConfig(prev => ({
                        ...prev,
                        envio: {
                            ...prev.envio,
                            shalom: value,
                        },
                    }))
                }
            />

        </div>

    );

}