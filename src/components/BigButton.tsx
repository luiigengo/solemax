import Link from "next/link";

type BigButtonProps = {
  title: string;
  bgColor: string;
  fontColor?: string;
  url?: string;
};

export const BigButton = ({ title, bgColor, url, ...rest }: BigButtonProps) => {
  return (
    <Link href={`${url ?? "/"}`}>
      <button
        type="submit"
        className={`inline-flex font-poppins items-center font-extrabold border-0 py-6 px-8 focus:outline-none  rounded-full mt-4 md:mt-0 text-2xl justify-center 
      ${
        bgColor === "yellow"
          ? `bg-yellow-300 text-blue-600 hover:bg-white`
          : "bg-blue-700 text-white hover:bg-blue-800"
      } 
      `}
      >
        {title}
      </button>
    </Link>
  );
};
