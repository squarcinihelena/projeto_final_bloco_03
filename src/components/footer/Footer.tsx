// src/components/footer/Footer.tsx
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"; // FacebookLogo removido

function Footer() {
  let data = new Date().getFullYear();

  return (
    <footer className="flex justify-center text-white bg-[#2d0982] py-4 shadow-md mt-auto">
      <div className="container flex flex-col items-center text-center">
        <p className="text-xl font-bold">Farmácia Aurora | Copyright: {data}</p>
        <p className="text-lg mt-1">Acesse nossas redes sociais!</p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/squarcinihelena/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <LinkedinLogo size={36} weight="bold" />
          </a>
          <a
            href="hhttps://www.instagram.com/squarcinihelena/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <InstagramLogo size={36} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
