import Hero from "./components/Hero/Hero";
import { Footer } from "./components/Footer";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center flex-col mt-5">
        <div className="sm:mt-5">
          <h2 className="text-4xl font-bold text-center">
            Crea il tuo curriculum in pochi minuti e scaricalo gratuitamente!
          </h2>
          <h2 className="text-2xl text-gray-500 mt-5 text-center">
            Scegli tra i migliori modelli e personalizza{" "}
            <span className="text-yellow-500 text-2xl font-medium">
              i colori
            </span>{" "}
            con facilità
        
          </h2>
        </div>
      </div>
      <div>
        <Hero />
      </div>

      <Footer />
    </div>
  );
}
