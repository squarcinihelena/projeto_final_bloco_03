import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { Categoria } from "../../models/Categoria";
import { buscar, buscarCategoriaNome } from "../../services/Service";
import { DNA } from "react-loader-spinner";
import { Link } from "react-router-dom";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [nomeBusca, setNomeBusca] = useState<string>("");

  async function buscarCategorias() {
    setIsLoading(true);
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Houve algum erro ao carregar as categorias!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleBuscarPorNome(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nomeBusca === "") {
      buscarCategorias();
      return;
    }
    setIsLoading(true);
    try {
      await buscarCategoriaNome(nomeBusca, setCategorias);
      if (categorias.length === 0) {
        alert("Nenhuma categoria encontrada com esse nome!");
      }
    } catch (error: any) {
      alert("Erro ao buscar categoria por nome!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        </div>
      )}
      {}
      <div className="flex justify-center w-full my-4 bg-gray-50 p-4 rounded-lg shadow-md">
        <div className="container flex flex-col mx-2">
          {}
          <div className="flex justify-center mb-4">
            <form
              className="flex w-full max-w-lg"
              onSubmit={handleBuscarPorNome}
            >
              <input
                type="text"
                placeholder="Pesquisar categoria por nome"
                className="flex-1 px-4 py-2 rounded-l-lg border-2 border-gray-400 focus:outline-none focus:border-[#2d0982] text-gray-800"
                value={nomeBusca}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNomeBusca(e.target.value)
                }
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-r-lg bg-[#4405a8] hover:bg-[#2d0982] text-white font-bold transition duration-300"
              >
                Buscar
              </button>
            </form>
          </div>

          <div className="flex justify-end mb-4">
            <Link
              to="/cadastrarcategoria"
              className="bg-[#2d0982] hover:bg-[#4405a8] text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Cadastrar Nova Categoria
            </Link>
          </div>

          {!isLoading && categorias.length === 0 && (
            <span className="my-8 text-3xl text-center font-bold text-gray-700">
              Nenhuma categoria foi encontrada!
            </span>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaCategorias;
