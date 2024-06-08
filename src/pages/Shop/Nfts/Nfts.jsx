import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllNfts } from "../../../store/slices/nft";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";

export default function Nfts() {
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.nft);

  useEffect(() => {
    dispatch(fetchAllNfts());
  }, []);

  useEffect(() => {
    dispatch(fetchAllNfts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div className="pt-[60px] bg-zinc-700">
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="flex justify-start items-center flex-wrap">
          {profile.data.createdNfts.map((nft) => (
            <CardMoreNft
              key={nft.id}
              imgUrl={nft.nftImage}
              title={nft.name}
              avatar={nft.userAvatar}
              user={nft.userName}
              price={`${nft.price} ETH`}
              Bid={`${nft.bid} wETH`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
