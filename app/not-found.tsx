import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold black-100">404</h1>
      <p className="text-lg black-80">Strona nie została znaleziona</p>
      <a href="/" className="px-8 mt-5 py-4 border-2 black-100 font-bold rounded-full  hover:text-white transition-all flex items-center gap-2">
                      Powrót do strony głównej <MdOutlineArrowForwardIos />
                    </a>
    </div>
  )
}