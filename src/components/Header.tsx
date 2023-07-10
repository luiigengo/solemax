import Image from "next/image";

import { BigButton } from "./BigButton";

import logo from "../../public/images/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      <div className="container mx-auto flex px-0 py-5 flex-col sm:flex-row items-center ">
        <a href="/">
          <Image src={logo} alt="Logo" className="w-32" />
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center xl:gap-16 md:gap:8 sm:gap-4 gap-4 mt-2 ">
          <a
            href="/about"
            className="text-blue-600 font-bold font-poppins hover:text-blue-400 text-2xl "
          >
            Quem somos
          </a>
          <a
            href="/installation"
            className="text-blue-600 font-bold font-poppins hover:text-blue-400 text-2xl "
          >
            Nossas Instalações
          </a>
          <a className="text-blue-600 font-bold font-poppins hover:text-blue-400 text-2xl ">
            Blog Solemax
          </a>
        </nav>
        <BigButton
          bgColor="blue"
          title="SOLICITE UM ORÇAMENTO"
          url={`https://api.whatsapp.com/send/?phone=5519996601477&text=${`Olá! Gostaria de solicitar um orçamento.`}&type=phone_number&app_absent=0`}
        />
      </div>
    </header>
  );
};
//
