import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="
            bg-[#8bdde0]
            flex
            justify-center
            items-center
            min-h-[calc(100vh-140px)]
            py-8 md:py-0
        "
    >
      <div
        className="
                container
                grid
                grid-cols-1 md:grid-cols-2
                gap-8 md:gap-0
                px-4
                items-center
                "
      >
        <div
          className="
                    flex
                    flex-col
                    gap-4
                    items-center md:items-start
                    justify-center
                    py-4
                    text-center md:text-left
                    "
        >
          <h2
            className="
                        text-3xl md:text-5xl
                        font-bold
                        text-gray-800
                        "
          >
            Seja bem vinde!
          </h2>
          <p className="text-base md:text-xl text-gray-800">
            Sua saúde, nossa prioridade.
          </p>

          <div className="flex justify-around gap-4 mt-4">
            <Link
              to="/produtos"
              className="
                            rounded
                            text-gray-800
                            border-2 border-gray-800
                            py-2 px-6
                            hover:bg-[#2d0982] hover:text-white transition duration-300"
            >
              Ver Produtos
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/imagens/balcao_farmacia.png" // img
            alt="Balcão da Farmácia"
            className="w-2/3 max-w-xs md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
