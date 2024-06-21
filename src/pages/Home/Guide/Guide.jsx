import React, { useEffect } from "react";
import CardGuide from "../../../components/CardGuide/CardGuide";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// images
import Wallet from "../../../../src/assets/IMAGE/SECTION/wallet.png";
import CollectionCreate from "../../../../src/assets/IMAGE/SECTION/collectionCreate.png";
import Earning from "../../../../src/assets/IMAGE/SECTION/earning.png";

export default function Guide() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white">
            <h2 className="font-semibold text-5xl">Как это работает</h2>
            <p className="text-xl pt-3">Узнайте, как начать</p>
          </div>
          <div className="flex justify-start flex-wrap mt-[48px] mb-[80px]">
            <CardGuide
              imgUrl={Wallet}
              title="Настройте свой кошелек"
              desc="Подключите его к Метамаску или банковской карте."
            />
            <CardGuide
              imgUrl={CollectionCreate}
              title="Создайте NFT "
              desc="Загрузите свою работу и настройте свой Nft. Добавьте название, изображение и минимальную цену.."
            />
            <CardGuide
              imgUrl={Earning}
              title="Начни зарабатывать!"
              desc="Начните зарабатывать, продавая свои NFT или торгуя другими"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
