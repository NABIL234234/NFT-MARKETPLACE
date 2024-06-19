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
            <h2 className="font-semibold text-5xl"> How it works</h2>
            <p className="text-xl pt-3">Find out how to get started</p>
          </div>
          <div className="flex justify-start flex-wrap mt-[48px] mb-[80px]">
            <CardGuide
              imgUrl={Wallet}
              title="Setup Your wallet"
              desc=" Set up your wallet of choice. Connect it to the Animarket by
            clicking the wallet icon in the top right corner."
            />
            <CardGuide
              imgUrl={CollectionCreate}
              title="Create Collection"
              desc="Upload your work and setup your collection. Add a description, social links and floor price."
            />
            <CardGuide
              imgUrl={Earning}
              title="Start Earning"
              desc="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
