import ComprobantePedido from "@/app/components/ComprobantePedido";
import { obtenerPedido } from "@/app/services/pedidos";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function PedidoPage({
    params,
}: Props) {

    const { id } = await params;

    const respuesta = await obtenerPedido(id);

    if (!respuesta.ok || !respuesta.pedido) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-gray-100">

                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-12 text-center">

                    <h1 className="text-3xl font-bold">

                        Pedido no encontrado

                    </h1>

                    <p className="text-gray-500 mt-4">

                        El enlace no existe o fue eliminado.

                    </p>

                </div>

            </div>

        );

    }

    return (

        <ComprobantePedido
            pedido={respuesta.pedido}
        />

    );

}