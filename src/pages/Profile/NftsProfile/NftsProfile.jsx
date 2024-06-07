import React, { useEffect } from "react";
import { fetchProfileInfo } from "../../../store/slices/nft";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function NftsProfile() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.nft);

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileInfo(id));
    }
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>No profile data available.</div>;
  }

  return (
    <div className="pt-[60px] bg-zinc-700">
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="flex justify-start items-center flex-wrap">
          {profile.createdNfts.map((nft) => (
            <CardMoreNft
              key={nft.id}
              imgUrl={nft.nftImage}
              title={nft.name}
              avatar={profile.profileImage}
              user={profile.username}
              price={`${nft.price}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
