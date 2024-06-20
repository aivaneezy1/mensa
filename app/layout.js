import "./globals.css";
import Provider from "./context/provier";
import Navbar from "./components/Navbar";
import DatiContextProvider from "./context/DatiContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <DatiContextProvider>
        <Provider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main>{children}</main>
          </div>
        </Provider>
        </DatiContextProvider>
      </body>
    </html>
  );
}
