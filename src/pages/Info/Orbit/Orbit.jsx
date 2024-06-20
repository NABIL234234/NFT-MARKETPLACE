import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchNftInfo } from "../../../store/slices/nft"; // Assuming your slice is correctly imported
import mockNfts from "../../../../server/MockData"; // Импорт моковых данных из файла mockData

export default function Orbit() {
  const { id } = useParams(); // Получаем параметр id из URL
  const dispatch = useDispatch();
  const nft = useSelector((state) => state.nft.nft);
  const loading = useSelector((state) => state.nft.loading);
  const error = useSelector((state) => state.nft.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchNftInfo(id));
    }
  }, [dispatch, id]);

  // Если Redux данные не загружены, используем моковые данные
  const fallbackNft = mockNfts.find((item) => item.id === parseInt(id));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!nft && !fallbackNft) {
    return <p>NFT not found</p>;
  }

  const displayNft = nft || fallbackNft;

  return (
    <>
      <div
        className="relative w-full h-[650px] rounded-[12px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${displayNft.nftImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={displayNft.nftImage} alt="" className="object-cover" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="max-w-[400px]">
          <h2 className="text-white font-semibold text-5xl mt-6">
            {displayNft.name}
          </h2>
          <Link to={`/profile/${displayNft.ownerId}`}>
            <div className="mt-9">
              <h4 className="text-stone-400 text-lg">Created By</h4>
              <div className="flex items-center gap-4">
                <h4 className="text-2xl font-semibold text-purple-600">
                  {displayNft.creatorUsername}
                </h4>
              </div>
            </div>
          </Link>

          <div className="mt-4">
            <h4 className="text-stone-400 text-lg font-semibold">Details</h4>
            <div className="flex items-center gap-4 mt-2">
              <h4 className="text-white font-semibold">
                {displayNft.createdAt}
              </h4>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <h4 className="text-white font-semibold">Original</h4>
            </div>
          </div>
          <div className="mt-4 mb-5">
            <h4 className="text-stone-400 text-lg font-semibold">Price</h4>
            <p className="text-white">{displayNft.dollarPrice} $</p>
            <p className="text-white">{displayNft.ethereumPrice} ETH</p>
          </div>
        </div>
      </div>
    </>
  );
}
