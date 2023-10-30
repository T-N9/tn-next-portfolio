import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SRG2 = ({ children, index, type, noOfColumn }) => {
  // console.log({ childIndex: index });
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const column = index % noOfColumn;
  let transitionDelay = 0; // Adjust the delay as needed

  if (type === "even") {
    transitionDelay = column === 0 ? 0.4 : 0; // Adjust the delay as needed
  } else if (type === "column") {
    transitionDelay = column === 0 ? 0 : column /5; // Adjust the delay as needed
    // console.log({index, column})
  } else {
    transitionDelay = 0;
  }

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: transitionDelay, duration: 0.4 },
        scale: 1,
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="grid-item"
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.7 }}
      animate={controls}
      transition={{ delay: transitionDelay, duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default SRG2;
