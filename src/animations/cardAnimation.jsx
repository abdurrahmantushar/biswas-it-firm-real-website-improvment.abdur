import { motion } from "framer-motion";

export const CardAnimation = ({
  children,
  index = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};