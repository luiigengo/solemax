import Image from "next/image";

import { BigButton } from "@/components/BigButton";
import { Carousel } from "@/components/Carousel";

import document from "../../public/images/document.png";
import money from "../../public/images/money.png";
import team from "../../public/images/team.png";
import star from "../../public/images/star.png";
import backgroundImage from "../../public/images/BG1.png";
import backgroundImageTwo from "../../public/images/BG5.png";

import { reviews } from "./reviews";
import { Form } from "./Home/components/Form";

export default async function Home() {
  return (
    <>
      <section>
        <div
          className="bg-cover bg-no-repeat w-full"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
        >
          <div className="flex">
            <div className="lg:p-10 flex flex-col lg:mt-10 lg:gap-20 md:gap-14 p-8 gap-8">
              <h1 className="text-blue-700 text-7xl w-96 font-extrabold font-poppins">
                Economize até 95% na conta de Energia
              </h1>
              <BigButton
                title="SIMULE GRÁTIS AGORA"
                bgColor="blue"
                url="url={`https://api.whatsapp.com/send/?phone=5519996601477&text=${`Olá! Gostaria de solicitar um orçamento.`}&type=phone_number&app_absent=0`}"
              />
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section>
        <div className="bg-cover bg-blue-700 bg-no-repeat w-full  flex flex-col p-4 items-center justify-center mx-auto">
          <h1 className="font-poppins text-white font-extrabold text-4xl md:w-4/12 text-center">
            VANTAGENS DE CONTRATAR SUA ENERGIA SOLAR COM A SOLEMAX
          </h1>

          <div className="container flex px-4 py-4 m-4 sm:flex-col md:flex-row items-center lg:my-24 ">
            <div className="mx-auto flex flex-col items-center gap-1">
              <Image
                src={document}
                alt="Imagem de um documento"
                className="w-32 font-black mb-4 sm:mt-8 md:mt-0"
              />
              <h1 className="text-white font-extrabold text-4xl font-poppins ">
                Homologação
              </h1>
              <p className="text-white font-poppins text-md max-w-lg text-center">
                Dimensionamento, homologação, fornecimento de equipamentos,
                instalação e manutenção de sistemas de energia solar
                fotovoltaica.
              </p>
            </div>

            <div className="mx-auto flex flex-col items-center">
              <Image
                src={team}
                alt="Imagem de um documento"
                className="w-32 font-black mb-4 sm:mt-8 md:mt-0"
              />
              <h1 className="text-white font-extrabold text-4xl font-poppins">
                Equipe Própria
              </h1>
              <p className="text-white font-poppins text-md max-w-lg text-center">
                Dimensionamento, homologação, fornecimento de equipamentos,
                instalação e manutenção de sistemas de energia solar
                fotovoltaica.
              </p>
            </div>

            <div className="mx-auto flex flex-col items-center">
              <Image
                src={money}
                alt="Imagem de um documento"
                className="w-32 font-black mb-4 sm:mt-8 md:mt-0"
              />
              <h1 className="text-white font-extrabold text-4xl font-poppins">
                Financiamento
              </h1>
              <p className="text-white font-poppins text-md max-w-lg text-center">
                Dimensionamento, homologação, fornecimento de equipamentos,
                instalação e manutenção de sistemas de energia solar
                fotovoltaica.
              </p>
            </div>
          </div>

          <BigButton
            title="Fale com a Solemax"
            bgColor="yellow"
            url="url={`https://api.whatsapp.com/send/?phone=5519996601477&text=${`Olá! Gostaria de solicitar um orçamento.`}&type=phone_number&app_absent=0`}"
          />
        </div>
      </section>

      <section>
        <div className="bg-cover bg-blue-700 bg-no-repeat w-full md:h-screen">
          <div className="flex flex-col  justify-center items-center md:mb-12">
            <h1 className="text-white font-extrabold md:mb-4 text-6xl font-poppins ">
              Nossas avaliacões
            </h1>
            <div className="flex gap-4 sm:my-4 md:my-8">
              <Image src={star} className="w-16 h-16" alt="Estrela" />
              <Image src={star} className="w-16 h-16" alt="Estrela" />
              <Image src={star} className="w-16 h-16" alt="Estrela" />
              <Image src={star} className="w-16 h-16" alt="Estrela" />
              <Image src={star} className="w-16 h-16" alt="Estrela" />
            </div>
          </div>
          <Carousel reviews={reviews}></Carousel>
          <div className="flex flex-row items-center justify-center md:mt-28">
            <BigButton
              title="Somos avaliados com 5 estrelas no Google !"
              bgColor="yellow"
              url="https://business.google.com/v/energia-solar-solemax/0128685181246774469/5012/_?{ignore}caid={campaignid}&agid={adgroupid}&gclid={gclid}#reviews"
            />
          </div>
        </div>
      </section>

      <section>
        <div
          className="bg-cover bg-no-repeat w-full"
          style={{
            backgroundImage: `url(${backgroundImageTwo.src})`,
          }}
        >
          <div className="flex flex-col text-center justify-center items-center gap-8 p-8">
            <h1 className="font-poppins text-white font-extrabold text-6xl w-3/5">
              Economize até 90% na sua conta de energia com a Solemax
            </h1>
            <p className="text-white font-poppins font-bold w-2/5 p-8 text-2xl">
              Desperte o poder do sol: Transforme sua residencia ou negócio em
              uma fonte de energia renovável economica com a energia solar
            </p>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
