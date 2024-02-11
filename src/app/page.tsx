import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <header className="p-6 flex items-center w-full">
        <h1 className="uppercase font-bold text-lg text-center sm:text-left block w-full">
          Encurtador de URL
        </h1>
      </header>
      {/* body */}
      <div className="flex justify-center items-center h-full w-full px-2">
        <Form />
      </div>
      {/* footer */}
      <p className="self-center py-4">
        Feito por{" "}
        <a
          href="https://github.com/Joao-Neto-DH"
          target="_blank"
          className="text-blue-600 underline"
        >
          João Neto
        </a>{" "}
        / 2024
      </p>
    </div>
  );
}
