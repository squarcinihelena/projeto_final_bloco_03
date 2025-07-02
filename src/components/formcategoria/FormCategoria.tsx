import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Categoria } from "../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";

function FormCategoria() {
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        toast.success("A categoria foi atualizada com sucesso!");
      } catch (error: any) {
        toast.error("Houve algum erro ao atualizar a categoria!");
        console.log(error);
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        toast.success("A categoria foi cadastrada com sucesso!");
      } catch (error: any) {
        toast.error("Houve algum erro ao cadastrar a categoria!");
        console.log(error);
      }
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto py-8 bg-gray-50 rounded-lg shadow-md mt-8">
      <h1 className="text-4xl text-center my-8 text-gray-800">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>
      <form
        className="w-1/2 flex flex-col gap-4 px-4 md:px-0"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-gray-700">
            Categoria
          </label>
          <input
            type="text"
            placeholder="Nome da Categoria"
            name="nome"
            className="border-2 border-gray-400 rounded p-2 bg-white focus:border-[#2d0982] focus:outline-none"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
          />
        </div>
        <button
          className="rounded text-white bg-[#2d0982]
                     hover:bg-[#4405a8] w-1/2 py-2 mx-auto flex justify-center transition duration-300"
          type="submit"
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
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
        <button
          type="button"
          onClick={retornar}
          className="rounded text-gray-700 border border-gray-400 bg-white hover:bg-gray-100 w-1/2 py-2 mx-auto flex justify-center transition duration-300"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
export default FormCategoria;
