import React from "react";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";
import See from "../../../components/buttons/See";
import { useNavigate } from "react-router";
import  mockNfts  from "../../../../server/MockData"; // Импортируем mock данные

export default function MoreNft() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/shop");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="pt-12 mdd:pt-40">
        <div className="max-w-6xl mx-auto px-5 font-mono">
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
}
