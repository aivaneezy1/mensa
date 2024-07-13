import "./globals.css";
import "./style.css";
import Provider from "./context/Provider";
import Navbar from "./components/Navbar";
import DatiContextProvider from "./context/DatiContext";
import { Footer } from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <DatiContextProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main>{children}</main>
            </div>
          </DatiContextProvider>
        </Provider>
      </body>
    </html>
  );
}
