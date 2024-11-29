import { TbLock } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FormEvent, useState } from "react";
import { Container } from "../../components/container";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("teste");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <Container>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg m-auto p-12 justify-center text-center rounded-lg flex flex-col gap-2 bg-white"
        >
          <Link
            to="/"
            className="text-red-600 uppercase font-bold text-3xl lg: mb-4 lg:mb-0"
          >
            Master Barber
          </Link>
          <p className="text-center text-2xl font-medium mb-4">Login</p>
          <div className=" flex items-center bg-slate-50 w-full p-2 border-2 rounded-md my-2">
            <TfiEmail size={24} className="text-black mr-4" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teste@gmail.com"
              className="flex-1  bg-transparent border-none outline-none text-black-700"
            />
          </div>

          <div className="flex items-center bg-slate-50 w-full p-2 border-2 rounded-md my-2">
            <TbLock size={24} className="text-black mr-4" />
            <input
              type="password"
              value={passowrd}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              className="flex-1 w-full bg-transparent border-none outline-none text-black"
            />
          </div>

          <button
            type="submit"
            className="h-9 bg-red-600 my-2 rounded border-0 text-lg flex justify-center items-center font-medium text-white duration-300 hover:bg-red-700"
          >
            {" "}
            <FaArrowRightFromBracket size={24} className="mr-3" />
            Acessar
          </button>
        </form>
      </Container>
    </div>
  );
}
