export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <header className="p-6 flex items-center w-full">
        <h1 className="uppercase font-bold text-lg">Encurtador de URL</h1>
      </header>
      {/* body */}
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-white shadow rounded-lg">
          <form className="p-6 space-y-4">
            <div className="space-y-4">
              <label htmlFor="url" className="text-slate-800">
                Digite o seu link/URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="w-full rounded p-4 border text-slate-800"
                placeholder="Link/URL"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="term" className="text-slate-800">
                Digite o termo que deseja
              </label>
              <input
                type="text"
                name="term"
                id="term"
                className="w-full rounded p-4 border text-slate-800"
                placeholder="Exemplo: Nekomori"
              />
            </div>

            <div>
              <button
                type="button"
                className="w-full px-2 py-4 text-slate-50 text-center bg-gray-400 hover:bg-slate-500 rounded"
              >
                Encurtar
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <p className="self-center">Feito por João Neto</p>
    </div>
  );
}
