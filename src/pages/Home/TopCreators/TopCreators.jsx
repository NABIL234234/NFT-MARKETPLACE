import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardCreators from "../../../components/CardCreators/CardCreators";
import { useNavigate } from "react-router-dom";
import UserData from "../../../../server/UserData";
import ViewRankings from "../../../components/buttons/ViewRankings";

export default function TopCreators() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [creators, setCreators] = useState([]);

  const handleGetStarted = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/rankings");
    } else {
      navigate("/login");
    }
  };

  const handleProfileClick = (id) => {
    navigate(`/CreatorsProfile/${id}`);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    setCreators(Object.values(UserData));
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="pt-12 mdd:pt-40 px-5">
      <div className="max-w-6xl mx-auto font-mono">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex items-center pb-[20px] mdd:pb-[60px]">
            <div className="font-semibold text-white">
              <h2 className="text-3xl mdd:text-5xl">Top creators</h2>
              <p className="text-lg sm:text-xl pt-3">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>
            <ViewRankings onClick={handleGetStarted} />
          </div>
          <div className="flex flex-wrap justify-center">
            {creators.map((creator) => (
              <CardCreators
                key={creator.id}
                number={creator.id}
                imgUrl={creator.imgUrl}
                nickName={creator.nickName}
                ETH={creator.ETH}
                onClick={() => handleProfileClick(creator.id)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
