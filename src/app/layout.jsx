import Providers from "./Providers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieFlix",
  description: "This is the official MovieFlix website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          
          <Header />

          <SearchBox />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
