import "./globals.css";
import Provider from "./context/provier";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
