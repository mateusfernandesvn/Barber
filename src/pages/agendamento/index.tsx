import { Container } from "../../components/container";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
const schema = z.object({
  name: z.string().min(2, "Preencha esse campo"),
  whatsapp: z
    .string()
    .min(11, "O telefone é obrigatório")
    .refine((value) => /^(\d{11,12})$/.test(value), {
      message: "Número de telefone inválido.",
    }),
  datetime: z.string().min(1, "Selecione uma data e hora"),
  services: z.string().min(1, "Selecione um serviço"),
  barber: z.string().min(1, "Escolha um barbeiro"),
});

type FormData = z.infer<typeof schema>;

export function Agendamento() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // Dados mockados
  const services = [
    { value: "corte", label: "Corte de cabelo" },
    { value: "barba", label: " barba" },
    { value: "combo", label: "Corte + Barba" },
  ];

  const barbers = [
    { value: "joao", label: "João" },
    { value: "carlos", label: "Carlos" },
  ];

  const onSubmit = async (data: FormData) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl flex flex-col justify-center my-10 items-center p-8 m-auto rounded-lg gap-4 bg-white shadow-lg"
        >
          <Link
            to="/"
            className="text-red-600 uppercase font-bold text-3xl lg: mb-4 lg:mb-0"
          >
            Master Barber
          </Link>
          <p className="text-center text-2xl font-medium mb-4">Agendamento</p>

          {/* COLUNA 1 DO FORM */}
          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div className="w-full">
              <label htmlFor="name" className="mb-2 font-medium">
                Nome completo
              </label>
              <Input
                type="text"
                register={register}
                name="name"
                error={errors.name?.message}
                placeholder="Ex: João da Silva..."
              />
            </div>
          </div>

          {/* COLUNA 2 DO FORM */}
          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div className="w-full">
              <label htmlFor="datetime" className="mb-2 font-medium">
                Selecione a data e horário
              </label>
              <Input
                type="datetime-local"
                register={register}
                name="datetime"
                error={errors.datetime?.message}
              />
            </div>

            <div className="w-full">
              <label htmlFor="whatsapp" className="mb-2 font-medium">
                WhatsApp
              </label>
              <Input
                type="text"
                register={register}
                name="whatsapp"
                error={errors.whatsapp?.message}
                placeholder="Ex: 71996783434"
              />
            </div>
          </div>

          {/* COLUNA 3 DO FORM */}
          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div className="w-full">
              <label htmlFor="services" className="mb-2 font-medium">
                Selecione o serviço
              </label>
              <Select
                register={register}
                name="services"
                options={services}
                error={errors.services?.message}
              />
            </div>

            <div className="w-full">
              <label htmlFor="barber" className="mb-2 font-medium">
                Selecione o barbeiro
              </label>
              <Select
                register={register}
                name="barber"
                options={barbers}
                error={errors.barber?.message}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-10 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 duration-300 transition-all ease-in-out"
          >
            Agendar
          </button>
        </form>
      </Container>
    </div>
  );
}
