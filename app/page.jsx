
import Hero from "./components/Hero/Hero";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col " >
    <div><Hero/></div>
         
    <Footer/>
    </div>
  );
}
