import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Categoria } from "../../models/Categoria";
import { buscar, deletar } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";

function DeletaCategoria() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      toast.error("Houve algum erro ao carregar a categoria!");
      console.log(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    } else {
      setCategoria({
        id: undefined,
        nome: "",
      });
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);
    try {
      await deletar(`/categorias/${id}`);
      toast.success("Categoria apagada com sucesso!");
    } catch (error: any) {
      toast.error("Houve algum erro ao apagar a categoria!");
      console.log(error);
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto py-4 bg-gray-50 rounded-lg shadow-md mt-8">
      <h1 className="text-4xl text-center my-7 text-gray-800">
        Deletar categoria
      </h1>
      <p className="text-center font-semibold mb-10 text-gray-700">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between mx-6 mb-6">
        <header className="py-2 px-6 bg-[#2d0982] text-white font-bold text-2xl">
          Categoria
        </header>

        <p className="p-8 text-3xl bg-white h-full text-gray-800">
          {categoria.nome}
        </p>

        <div className="flex">
          <button
            className="text-white bg-red-600 hover:bg-red-700 w-1/2 py-2 transition flex items-center justify-center cursor-pointer rounded-bl-lg"
            onClick={retornar}
          >
            <XIcon size={24} color="#FFFFFF" />
            <span className="ml-2">Não</span>
          </button>
          <button
            className="w-1/2 text-white bg-[#2d0982] hover:bg-[#4405a8] flex items-center justify-center transition cursor-pointer rounded-br-lg"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <>
                <CheckIcon size={24} color="#FFFFFF" />
                <span className="ml-2">Sim</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletaCategoria;
