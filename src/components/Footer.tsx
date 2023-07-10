import logo from "../../public/images/logo_.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className=" px-5 py-8 mx-auto flex justify-between sm:flex-row flex-col">
        <div className="flex justify-center items-center md:justify-between lg:justify-between xl:justify-between">
          <Image
            src={logo}
            alt="Logo"
            className="w-16 flex title-font font-medium md:justify-start justify-center"
          />

          <p className="text-sm text-blue-500 font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-poppins xl:ml-4 ">
            © 2018 - 2023 SOLEMAX
          </p>
        </div>
        <div className="flex flex-col max-w-sm items-center justify-center text-center">
          <h1 className="font-poppins font-bold text-blue-600">
            {"Contato: (19) 9 9660-1477"}
          </h1>
          <h1 className="font-poppins font-bold text-blue-600">
            {"Email : contato@solemax.eco.br"}
          </h1>
          <h1 className="font-poppins font-bold text-blue-600 text-center justify-center">
            {
              "Endereco : R. Argentina, 281 - Vila Castelo Branco, Indaiatuba - SP, 13338-120"
            }
          </h1>
        </div>
        <span className="inline-flex mt-4 items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/SolemaxSolar"
            target="_blank"
            className="text-blue-500 hover:text-blue-400"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/solemaxsolar"
            target="_blank"
            className=" text-blue-500 hover:text-blue-400"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};
