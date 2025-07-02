import { ShoppingCart, User, MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center w-full py-4 text-white bg-[#2d0982] shadow-md">
      <div className="container flex items-center justify-between mx-4 text-lg">
        {/* Logo*/}
        <Link to="/home" className="flex items-center">
          <img src="/imagens/logo.png" alt="Logo Farmácia" className="h-16" />
        </Link>

        <div className="relative flex items-center justify-center w-2/5">
          <input
            className="w-full px-4 py-2 bg-white rounded-lg h-9 focus:outline-none text-gray-800"
            type="search"
            placeholder="Pesquisar produto"
            disabled
          />
          <button className="h-9 w-9 p-2.5 ml-2 text-sm font-medium text-white bg-[#4405a8] border border-blue-700 rounded-lg cursor-not-allowed">
            <MagnifyingGlass size={18} weight="bold" />
          </button>
        </div>

        <div className="flex items-center gap-4 py-4">
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastrarcategoria" className="hover:underline">
            Cadastrar Categoria
          </Link>
          <Link to="/produtos" className="hover:underline">
            Produtos
          </Link>
          <Link to="#" className="hover:underline">
            Sair
          </Link>
          <User size={24} weight="bold" />
          <ShoppingCart size={24} weight="bold" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
