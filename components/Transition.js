import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const transitionItems = [
  { zIndex: 30, backgroundColor: "#00072d", delay: 0.1 },
  { zIndex: 20, backgroundColor: "#090e2e", delay: 0.3 },
  { zIndex: 10, backgroundColor: "#070e38", delay: 0.5 },
];

const Transition = () => {
  return (
    <>
      {transitionItems.map((item, index) => (
        <motion.div
          key={index}
          className="fixed top-0 bottom-0 right-full w-screen h-screen"
          style={{ zIndex: item.zIndex, backgroundColor: item.backgroundColor }}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: item.delay, duration: 0.5, ease: "easeInOut" }}
        ></motion.div>
      ))}
    </>
  );
};

export default Transition;
