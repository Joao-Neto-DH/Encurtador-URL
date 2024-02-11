"use client";

import EncurtarURLController from "@/app/controller/Encurtar";
import { FormEventHandler, useState } from "react";
import { ShortLink } from "../../@types/ShortLink";
import { ErrorShortLink } from "../../@types/ErrorShortLink";
import CloseIcon from "./icon/Close";
import CopiarController from "@/app/controller/Copiar";
import CopyIcon from "./icon/Copy";
import Loading from "./Loading";

function Form() {
  const [data, setData] = useState<ShortLink | ErrorShortLink>();
  const [isLoading, setLoading] = useState(false);

  const submit: FormEventHandler<HTMLFormElement> = (event) => {
    setLoading(true);
    event.preventDefault();

    const controller = new EncurtarURLController();
    controller
      .encurtar(new FormData(event.currentTarget))
      .then((data) => {
        setData(data);
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      {/* alert */}
      {data && !isLoading && (
        <div className="w-full sm:w-auto fixed top-0 left-1/2 -translate-x-1/2 bg-white text-slate-700 shadow-lg rounded-b-lg p-6 z-50">
          <div className="flex flex-row justify-between items-start gap-1">
            {"short" in data && (
              <div className="flex flex-col items-center w-full space-y-1">
                <p className="bg-slate-200 p-2 cursor-pointer rounded">
                  <span className="text-slate-500">Link:</span> https://1pt.co/
                  {data.short}
                </p>
                <button
                  className="bg-slate-100 p-2 text-sm rounded flex flex-row items-center gap-1 shadow"
                  onClick={() => {
                    const controller = new CopiarController();

                    controller.copiar(`https://1pt.co/${data.short}`);
                  }}
                >
                  <CopyIcon />
                  Copiar
                </button>
              </div>
            )}

            {!("short" in data) && (
              <div className="flex flex-col items-center w-full">
                <p className="bg-red-200 p-2 cursor-pointer rounded">
                  Error: {data.message} {data.error}
                </p>
              </div>
            )}
            <button
              className="rounded-full hover:opacity-90 mt-2"
              onClick={() => setData(undefined)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      {isLoading && <Loading />}

      <div className={`bg-slate-100 shadow rounded-lg overflow-hidden `}>
        {/* form */}
        <form onSubmit={submit} className="p-6 space-y-4">
          <div className="space-y-4">
            <label htmlFor="url" className="text-slate-800">
              Digite o seu link/URL<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="url"
              id="url"
              className="w-full rounded p-4 border text-slate-800 bg-transparent"
              placeholder="Link/URL"
            />
          </div>

          <div className="space-y-4">
            <div className="spce-y-1">
              <label
                htmlFor="term"
                className="text-slate-800 flex flex-row items-center gap-1"
              >
                Digite o termo que deseja
                {/* <QuestionIcon /> */}
              </label>
              <p className="text-gray-400 text-xs">
                Se o termo não estiver disponível será gerado um automáticamente
              </p>
            </div>
            <input
              type="text"
              name="term"
              id="term"
              className="w-full rounded p-4 border text-slate-800 bg-transparent"
              placeholder="Exemplo: Nekomori"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-2 py-4 text-slate-50 text-center bg-blue-600 rounded"
            >
              Encurtar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
