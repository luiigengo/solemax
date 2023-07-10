import { BigButton } from "@/components/BigButton";

export const Form = () => {
  return (
    <form
      action="submit"
      className="bg-white p-10 mx-auto my-auto rounded-3xl flex flex-col gap-8 w-2/5"
    >
      <h1 className="font-poppins font-bold text-blue-700 text-lg w-3/5 text-center mx-auto">
        Entre em contato com a Solemax para receber um orçamento gratuito via
        WhatsApp
      </h1>
      <div className="flex flex-col gap-8">
        <input
          placeholder="Nome completo"
          className="border-b-2 pb-1 border-blue-600"
          required
        />

        <input
          placeholder="Numero do celular"
          className="border-b-2 pb-1 border-blue-600"
          required
        />
        <BigButton
          title="Entre em contato"
          bgColor="yellow"
          url="url={`https://api.whatsapp.com/send/?phone=5519996601477&text=${`Olá! Gostaria de solicitar um orçamento.`}&type=phone_number&app_absent=0`}"
        />
      </div>
    </form>
  );
};
