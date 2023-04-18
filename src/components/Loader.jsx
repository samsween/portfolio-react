import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="w-10 h-10 bg-[#73A5C6] rounded-full animate-pulse"></div>
    </motion.div>
  );
};
