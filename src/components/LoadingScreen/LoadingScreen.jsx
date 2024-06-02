import { motion, useTime, useTransform } from "framer-motion";

export default function LoadingScreen() {
  const time = useTime();
  const rotate = useTransform(time, [0, 2000], [0, 360]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-purple-500 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        style={{ rotate }}
        className="w-12 h-12 border-4 border-white border-t-transparent border-solid rounded-full"
      ></motion.div>
    </motion.div>
  );
}
