import installationBanner from "../../../public/images/installationBanner.png";
import Image from "next/image";

import InstallationCarousel from "./components/installationCarousel";

export default function Installation() {
  return (
    <>
      <section>
        <Image
          className="w-screen"
          src={installationBanner}
          alt="Banner com foto de uma instalacão"
        ></Image>
      </section>

      <section>
        <h1 className="font-poppins font-extrabold text-center p-8 text-6xl text-blue-600 md:mb-4">
          NOSSAS INSTALAÇÕES
        </h1>

        <div className="items-center justify-center text-center">
          <h1 className="text-center p-8 font-extrabold text-3xl mt-12">
            INSTALACÕES COMERCIAS E INDUSTRIAIS
          </h1>
          <div className="flex flex-row ">
            <InstallationCarousel type="Commerce"></InstallationCarousel>
          </div>

          <h1 className="text-center p-8 font-extrabold text-3xl mt-12">
            INSTALACÕES RESIDENCIAS
          </h1>
          <div className="flex flex-row ">
            <InstallationCarousel type="House"></InstallationCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
