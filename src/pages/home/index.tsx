import { Link } from "react-router-dom";

import { Container } from "../../components/container";
import OutlinedCard from "../../components/cards";
import { TableValues } from "../../components/tableValues";
import { Carousel } from "../../components/swiper";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";



export function Home() {
  return (
    <div className="bg-white text-black dark:bg-zinc-900 dark:text-gray-200">
      {/* Chamada para ação */}
      <div className="relative">
        <img
          src="/banner.webp"
          alt="Imagem da Barbearia"
          className="w-full object-cover brightness-50  "
        />
        <div className="absolute w-full inset-0 flex flex-col items-center justify-center text-center bg-opacity-50">
          <h1 className="text-5xl font-black uppercase text-white mb-5 tracking-wider font-heading select-none max-sm:text-2xl ">
            Agende seu estilo <br /> hoje mesmo!
          </h1>
          <p className="font-semibold uppercase text-gray-100 mb-5 select-none ">
            Cortes que refletem sua personalidade e elegância.
          </p>
          <Link
            to="/agendamento"
            className="w-60 py-2 bg-red-600 text-white font-bold rounded-lg text-lg uppercase  hover:bg-red-700 duration-300"
          >
            Agende agora
          </Link>
        </div>
      </div>

      <Container>
        {/* conteudo sobre */}
        <section id="about" className="flex flex-col text-center py-8 ">
          <h2 className="text-4xl font-black mb-4 my-4 uppercase tracking-widest max-sm:text-2xl ">
            Seu Estilo, Nossa Missãos <span className="text-red-500">.</span>
          </h2>
          <div className="flex flex-col justify-center mx-8 text-lg ">
            <p className="text-center my-6 max-sm:text-justify">
              Na Master Barber, acreditamos que um corte de cabelo vai
              além de um simples serviço: é uma experiência de cuidado e estilo.
              Desde a nossa inauguração, nos dedicamos a oferecer o que há de
              melhor no universo da barbearia, combinando tradição e tendências
              modernas para criar um visual único e personalizado para cada
              cliente. Com uma equipe de profissionais altamente qualificados,
              garantimos um atendimento de excelência, em um ambiente acolhedor
              e descontraído. Nossa missão é não apenas realçar a aparência, mas
              também proporcionar um momento de relaxamento e bem-estar, sempre
              com um toque de sofisticação.
            </p>
          </div>

          <div className="flex w-full bg-gray-200  m-auto border-1 rounded-lg p-8 lg:flex-row justify-around items-center gap-8 my-8 dark:bg-zinc-950 dark:text-white max-sm:flex flex-col">
            <div className="flex flex-col items-center gap-4">
              <FaLocationDot size={40} color="gray" />
              <p className="font-semibold text-2xl uppercase text-gray-400 underline underline-offset-8 decoration-red-500 ">
                Local
              </p>
              <p className="font-semibold">Av. Dorival Caymmi, Itapuã</p>
              
            </div>

            <div className="flex flex-col items-center gap-4">
              <FaPhone size={40} color="gray" />
              <p className="font-semibold text-2xl uppercase text-gray-400 underline underline-offset-8 decoration-red-500 ">
                Telefone
              </p>
              <p className="font-semibold ">(71) 99999-9999</p>
             
            </div>

            <div className="flex flex-col items-center gap-4">
              <FaClock size={40} color="gray" />
              <p className="font-semibold text-2xl uppercase text-gray-400 underline underline-offset-8 decoration-red-500 ">
                Horario
              </p>
              <p className="font-semibold ">Seg - Sáb: 8h às 19h</p>
              <p className="font-semibold ">Dom: 8h às 14h</p>
            </div>
          </div>
        </section>
        {/* conteudo serevios */}
        <section id="services" className="flex flex-col text-center py-8">
          <h2 className="text-4xl font-black mb-4 my-4 uppercase tracking-widest max-sm:text-2xl">
            Nossos Serviços <span className="text-red-500">.</span>
          </h2>
          <p className="mt-4 mx-16 text-center mb-8 max-sm:text-justify ">
            Investimos nos melhores profissionais para lhe oferecer atendimento
            de alta qualidade. Para você, que além do cabelo, procura por
            serviços personalizados para barba e bigode.
          </p>
          <div>
            <OutlinedCard />
          </div>
        </section>

        {/* conteudo tabela de valores */}
        <section className="flex flex-col text-center py-8 ">
          <h2 className="text-4xl font-black mb-4 my-4 uppercase tracking-widest max-sm:text-2xl ">
            {" "}
            Tabela de valores <span className="text-red-500 ">.</span>
          </h2>
          <TableValues />
        </section>

        {/* conteudo galeria */}
        <section className="text-center py-8 ">
          <h2 className="text-4xl font-black mb-4 my-4 uppercase tracking-widest max-sm:text-2xl">
            Nossa Galeria <span className="text-red-500">.</span>
          </h2>
          <div className="flex justify-center my-8">
            <Carousel />
          </div>
        </section>
      </Container>
    </div>
  );
}
