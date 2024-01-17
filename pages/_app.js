import "../styles/globals.css";

import PageLayout from "../components/PageLayout";
import Transition from "../components/Transition";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <PageLayout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </PageLayout>
  );
}

export default MyApp;
