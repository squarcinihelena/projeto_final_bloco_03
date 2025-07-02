import { useEffect, useState } from "react";
import type { Categoria } from "../../models/Categoria";
import { buscar, buscarCategoriaNome } from "../../services/Service";
import { DNA } from "react-loader-spinner";
import { Link, useSearchParams } from "react-router-dom";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [searchParams] = useSearchParams();
  const nomeBuscaUrl = searchParams.get("nome");

  async function buscarTodasCategorias() {
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

  async function buscarCategorias(termo: string | null) {
    setIsLoading(true);
    try {
      if (termo) {
        await buscarCategoriaNome(termo, setCategorias);
        if (categorias.length === 0) {
          alert("Nenhuma categoria encontrada com esse nome!");
        }
      } else {
        await buscarTodasCategorias();
      }
    } catch (error: any) {
      alert("Erro ao buscar categoria(s)!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  /*async function handleBuscarPorNome(e: FormEvent<HTMLFormElement>) {
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
  }*/

  useEffect(() => {
    buscarCategorias(nomeBuscaUrl);
  }, [nomeBuscaUrl]);

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
