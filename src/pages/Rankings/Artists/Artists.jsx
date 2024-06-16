import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArtistsCard from "../../../components/ArtistsCard/ArtistsCard";
import { fetchUsersRank, fetchUserRank } from "../../../store/slices/rankings";

export default function Rankings() {
  const dispatch = useDispatch();
  const { rank, rankLoading, rankError } = useSelector((state) => state.rankings);

  useEffect(() => {
    const days = 7;
    dispatch(fetchUsersRank({ days }));
    dispatch(fetchUserRank({ days }));
  }, [dispatch]);

  useEffect(() => {
    console.log('rank:', rank);
    console.log('rankError:', rankError);
  }, [rank, rankError]);

  if (rankLoading) {
    return <div>Loading...</div>;
  }

  if (rankError) {
    return <div>Error: {rankError}</div>;
  }

  if (!rank) {
    return <div>No data available</div>;
  }

  if (!Array.isArray(rank)) {
    return <div>Rank is not an array</div>;
  }

  return (
    <div className="pt-[20px]">
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div>
          {rank.map((user) => (
            <ArtistsCard
              key={user.id}
              imgUrl={user.profileImage}
              nickName={user.username}
              change={user.statistic}
              sold={user.countOfSoldNft}
              volume={user.volume}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
