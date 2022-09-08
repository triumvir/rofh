import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import { useEffect } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events])
  return <Component {...pageProps} />

}

export default MyApp
