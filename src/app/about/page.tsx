import Image from "next/image";

import aboutImage from "../../../public/images/aboutImage.png";
import aboutIconOne from "../../../public/images/aboutIconOne.png";
import aboutIconTwo from "../../../public/images/aboutIconTwo.png";
import aboutIconThree from "../../../public/images/aboutIconThree.png";
import commerce from "../../../public/images/commerce.png";
import industry from "../../../public/images/industry.jpg";
import residential from "../../../public/images/residential.jpg";
import solarPanel from "../../../public/images/solarPanel.png";
import backgroundImageTwo from "../../../public/images/BG5.png";

export default function About() {
  return (
    <>
      <section>
        <div className="bg-cover bg-blue-700 w-full h-max flex flex-col items-center justify-center mx-auto p-8 gap-8">
          <h1 className="text-white font-extrabold text-4xl font-poppins md:my-8">
            Quem somos
          </h1>
          <p className="text-white font-bold font-poppins text-3xl max-w-5xl text-center">
            Atuamos no segmento de Energia Solar Fotovoltaica desde 2018.
          </p>
          <p className="text-white font-bold font-poppins text-3xl max-w-5xl text-center">
            Nascemos a partir da identificação da necessidade do mercado de um
            atendimento Profissional, Técnico e Transparente, disposto a
            capacitar os clientes a entenderem melhor sobre os sistemas e dessa
            forma optarem pela melhor solução e não apenas pelo menor preço
          </p>
          <p className="text-white font-bold font-poppins text-3xl max-w-5xl text-center">
            Temos como princípio oferecer aos nossos clientes as mais Modernas,
            Seguras e Eficientes tecnologias disponíveis no mercado.
          </p>
          <p className="text-white font-bold font-poppins text-3xl max-w-5xl text-center md:my-8">
            O nosso foco é na Qualidade.
          </p>

          <Image src={aboutImage} alt="Certificados" className="w-96" />
        </div>
      </section>

      <section>
        <div className="bg-cover bg-blue-700 w-full flex flex-col items-center justify-center mx-auto p-8 gap-8 lg:gap-24">
          <h1 className="text-white font-extrabold text-6xl font-poppins text-center">
            A SOLEMAX EM NÚMEROS
          </h1>

          <div className="flex sm:flex-col md:flex-row justify-between items-center gap-8 lg:gap-24">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={aboutIconOne}
                alt="Imagem ilustrativa de clientes"
                className="w-48"
              />
              <p className="text-white font-bold font-poppins text-lg max-w-sm lg:max-w-md text-center">
                + 300 clientes em Indaiatuba, região metropolitana de Campinas e
                São Paulo
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <Image
                src={aboutIconTwo}
                alt="Imagem ilustrativa de clientes"
                className="w-48"
              />
              <p className="text-white font-bold font-poppins text-lg max-w-sm lg:max-w-md text-center">
                + 4.000 painéis fotovoltaicos instalados
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <Image
                src={aboutIconThree}
                alt="Imagem ilustrativa de clientes"
                className="w-48"
              />
              <p className="text-white font-bold font-poppins text-lg max-w-sm lg:max-w-md text-center">
                + 215 MW de geração mensal de energia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="bg-cover bg-no-repeat w-full flex flex-col items-center justify-center mx-auto p-8 gap-8 lg:gap-24"
          style={{
            backgroundImage: `url(${backgroundImageTwo.src})`,
          }}
        >
          {/* <div className="bg-cover bg-white w-full flex flex-col items-center justify-center mx-auto p-8 gap-8 lg:gap-24"> */}
          <h1 className="text-white font-extrabold text-6xl font-poppins text-center mt-8">
            A SOLEMAX ATUA NO
          </h1>

          <div className="flex flex-row justify-between gap-28">
            <div className="flex flex-col gap-8">
              <Image
                src={industry}
                alt="Foto de um comércio"
                className="w-80 rounded-xl border-blue-400"
              />
              <h1 className="text-white font-extrabold text-4xl font-poppins text-center">
                INDÚSTRIA
              </h1>
            </div>

            <div className="flex flex-col gap-8">
              <Image
                src={commerce}
                alt="Foto de um comércio"
                className="w-80 rounded-xl border-blue-400"
              />
              <h1 className="text-white font-extrabold text-4xl font-poppins text-center">
                COMÉRCIO
              </h1>
            </div>

            <div className="flex flex-col gap-8">
              <Image
                src={residential}
                alt="Foto de um comércio"
                className="w-80 rounded-xl border-blue-400"
              />
              <h1 className="text-white font-extrabold text-4xl font-poppins text-center">
                RESIDENCIAL
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-cover bg-blue-700 bg-no-repeat w-full">
          <div className="flex flex-col">
            <h1 className="text-white text-center font-extrabold text-5xl font-poppins md:my-16">
              NOSSOS DIFERENCIAIS
            </h1>
            <div className="flex sm:flex-col md:flex-row p-16 sm:mx-8 md:mx-28 justify-between sm:items-center">
              <Image
                className="w-2/5 text-center items-center mb-8"
                src={solarPanel}
                alt="Painel Solar"
              />
              <div className="flex flex-col gap-8 max-w-3xl">
                <p className="text-white font-semibold text-xl">
                  Atendimento transparente com detalhamento dos sistemas e
                  características dos equipamentos, possibilitando aos clientes
                  um maior entendimento sobre a tecnologia e consecutivamente a
                  melhor decisão de investimento e não apenas o menor preço.
                </p>

                <p className="text-white font-semibold text-xl">
                  Dimensionamento a partir do entendimento da necessidade dos
                  clientes, com as melhores tecnologias disponíveis, buscando o
                  melhor desempenho e o maior retorno do investimento.
                </p>

                <p className="text-white font-semibold text-xl">
                  Oferecemos tecnologias atualizadas, equipamentos e materiais
                  de ótima qualidade, homologados pelos órgãos reguladores e
                  fiscalizadores.
                </p>

                <p className="text-white font-semibold text-xl">
                  Os fabricantes dos equipamentos e materiais que utilizamos em
                  nossos sistemas são líderes de mercado e referências nacionais
                  e mundiais em seus segmentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
