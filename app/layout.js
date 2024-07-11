import "./globals.css";
import "./style.css"
import Provider from "./context/provier";
import Navbar from "./components/Navbar";
import DatiContextProvider from "./context/DatiContext";
import { Footer } from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <DatiContextProvider>
 
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main>{children}</main>
         
          </div>
     
        </DatiContextProvider>
      </body>
    </html>
  );
}
