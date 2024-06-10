import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNftsForSale } from "../../../store/slices/nft";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";

export default function Nfts() {
  const dispatch = useDispatch();
  const {
    nftsForSale: { data },
    loading,
    error,
  } = useSelector((state) => state.nft);

  useEffect(() => {
    dispatch(fetchNftsForSale());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-[60px] bg-zinc-700">
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="flex justify-start items-center flex-wrap">
          {data &&
            data.map((nft) => (
              <CardMoreNft
                key={nft.id}
                imgUrl={nft.nftImage}
                title={nft.name}
                avatar={nft.userAvatar}
                user={nft.userName}
                price={`${nft.price}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
