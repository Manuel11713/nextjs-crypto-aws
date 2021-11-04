import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "layouts";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <MainLayout pathname={router.pathname}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
