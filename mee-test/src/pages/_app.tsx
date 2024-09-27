import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
