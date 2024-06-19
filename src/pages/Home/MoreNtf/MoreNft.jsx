import React, { useEffect } from "react";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";
import See from "../../../components/buttons/See";
import { useNavigate } from "react-router";
import mockNfts from "../../../../server/MockData"; // Импортируем mock данные
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MoreNft() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleGetStarted = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/shop");
    } else {
      navigate("/login");
    }
  };

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
    <div className="pt-12 mdd:pt-40">
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="mb:flex items-center mdd:pb-16">
            <div className="font-semibold text-white">
              <h2 className="text-4xl">Discover More NFTs</h2>
              <p className="text-xl pt-3">Explore new trending NFTs</p>
            </div>
            <div className="flex mb:hidden justify-start flex-wrap">
              {mockNfts.map((nft) => (
                <CardMoreNft
                  key={nft.id}
                  id={nft.id}
                  imgUrl={nft.nftImage}
                  title={nft.name}
                  avatar={nft.avatar}
                  user={nft.creatorUsername}
                  price={nft.price}
                />
              ))}
            </div>
            <See onClick={handleGetStarted} />
          </div>

          <div className="hidden mb:flex justify-start flex-wrap">
            {mockNfts.map((nft) => (
              <CardMoreNft
                key={nft.id}
                id={nft.id}
                imgUrl={nft.nftImage}
                title={nft.name}
                avatar={nft.avatar}
                user={nft.creatorUsername}
                price={nft.price}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
