import "./globals.css";
import "./style.css";
import Provider from "./context/Provider";
import Navbar from "./components/Navbar";
import DatiContextProvider from "./context/DatiContext";
import { Footer } from "./components/Footer";

export const metadata = {
  title: {
    absolute: "",
    default: "CV Generator",
    template: "%s" 
  },
  description: "Create your own CV in few minutes",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: '/site.webmanifest'
};

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
