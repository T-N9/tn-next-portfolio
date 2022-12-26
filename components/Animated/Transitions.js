
import { motion } from "framer-motion";
const animationConfiguration = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x:0 },
    exit: { opacity: 0, x: -100 },
};
const Transitions = ({ children }) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};
export default Transitions;