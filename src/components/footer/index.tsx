import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-black w-full text-center pt-4 dark:bg-zinc-950 dark:text-gray-200">
      <div className="my-4">
        <Link
          to="/"
          className="text-red-600 uppercase font-bold text-3xl lg: mb-4 lg:mb-0"
        >
          Master Barber
        </Link>
        <div className="flex mt-12 mb-6 flex-col text-lg font-semibold text-black lg:flex-row justify-center gap-4 lg:gap-8 dark:text-gray-200">
          <Link to="/">Home</Link>
          <a href="#about">Sobre nós</a>
          <a href="#services">Serviços</a>
          <Link to="/agendamento" className="text-red-600">
            Agendamento
          </Link>
        </div>
        <div className="h-0 w-1/3 flex justify-center items-center m-auto  border-2 border-gray-500"></div>

        <div className="flex mt-8 mb-6  justify-center gap-4 ">
          <a href="">
            {" "}
            <MdEmail size={30} />
          </a>

          <a
            href="https://www.instagram.com/newstylle.barbearia/"
            target="_blank"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.instagram.com/newstylle.barbearia/"
            target="_blank"
          >
            <FaFacebook size={30} />
          </a>
        </div>
        <p className="max-w-2xl  text-center m-auto my-6">
          A Master Barber tem como objetivo oferecer um atendimento de
          excelência, com um ambiente moderno e acolhedor, onde cada corte é
          feito com dedicação e estilo.
        </p>
      </div>
      <div className=" py-4 flex flex-col items-center">
        <p className="text-base">
          &copy; 2024  Master Barber. Todos os direitos reservados.
        </p>
        
      </div>
    </footer>
  );
}
