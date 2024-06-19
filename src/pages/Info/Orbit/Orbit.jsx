import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNftInfo } from "../../../store/slices/nft"; // Assuming your slice is correctly imported

export default function NftDetails() {
  const { id } = useParams(); // Assuming you only need the id from params
  const dispatch = useDispatch();
  const nft = useSelector((state) => state.nft.nft);
  const loading = useSelector((state) => state.nft.loading);
  const error = useSelector((state) => state.nft.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchNftInfo(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (nft) {
      console.log("NFT data:", nft);
    }
  }, [nft]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!nft) {
    return <p>NFT not found</p>;
  }

  return (
    <>
      <div
        className="relative w-full h-[650px] rounded-[12px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${nft.nftImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={nft.nftImage} alt="" className="object-cover" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="max-w-[400px]">
          <h2 className="text-white font-semibold text-5xl mt-6">{nft.name}</h2>
          <p className="text-stone-400 text-lg">{nft.description}</p>
          {/* Link to owner's profile using ownerId */}
          <Link to={`/profile/${nft.ownerId}`}>
            <div className="mt-9">
              <h4 className="text-stone-400 text-lg">Created By</h4>
              <div className="flex items-center gap-4">
                <h4 className="text-white font-semibold">{nft.creatorUsername}</h4>
              </div>
            </div>
          </Link>
          <div className="mt-4">
            <h4 className="text-stone-400 text-lg">Description</h4>
            <p className="text-white">{nft.description}</p>
          </div>
          <div className="mt-4">
            <h4 className="text-stone-400 text-lg font-semibold">Details</h4>
            <div className="flex items-center gap-4 mt-2">
              <h4 className="text-white font-semibold">View on Etherscan</h4>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <h4 className="text-white font-semibold">View Original</h4>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-stone-400 text-lg font-semibold">Price</h4>
            <p className="text-white">{nft.price} $</p>
          </div>
        </div>
      </div>
    </>
  );
}
