import React, { useEffect, useState } from "react";
import { fetchProfileInfo, pushNftToMarket, deleteNft, cancelSelling } from "../../../store/slices/nft";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function NftsProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.nft);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNft, setSelectedNft] = useState(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProfileInfo(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile || !profile.data || !profile.data.createdNfts) {
    return <div>No created NFTs available.</div>;
  }

  const handleSellNft = (nftId) => {
    dispatch(pushNftToMarket(nftId))
      .unwrap()
      .then(() => {
        dispatch(fetchProfileInfo(id));
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancelSelling = (nftId) => {
    dispatch(cancelSelling(nftId))
      .unwrap()
      .then(() => {
        dispatch(fetchProfileInfo(id));
        setIsCancelModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteNft = (nftId) => {
    dispatch(deleteNft(nftId))
      .unwrap()
      .then(() => {
        dispatch(fetchProfileInfo(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openSellModal = (nft) => {
    setSelectedNft(nft);
    setIsModalOpen(true);
  };

  const openCancelModal = (nft) => {
    setSelectedNft(nft);
    setIsCancelModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNft(null);
    setIsModalOpen(false);
    setIsCancelModalOpen(false);
  };

  return (
    <div className="pt-[60px] bg-zinc-700">
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="flex justify-start items-center flex-wrap">
          {profile.data.createdNfts.map((nft) => (
            <CardMoreNft
              key={nft.id}
              id={nft.id}
              imgUrl={nft.nftImage}
              title={nft.name}
              avatar={nft.userAvatar}
              creatorUsername={nft.ownerUsername}
              dollarPrice={`${nft.dollarPrice}`}
              ethereumPrice={`${nft.ethereumPrice}`}
              ownerId={nft.ownerId}
              isForSale={nft.isForSale} 
              onIconClick={() => openSellModal(nft)}
              onDelete={() => handleDeleteNft(nft.id)}
              onCancel={() => openCancelModal(nft)} 
              iconsAvailable
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl mb-4">Confirm Sale</h2>
            <p>
              Are you sure you want to sell {selectedNft.name} for {selectedNft.price}?
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleSellNft(selectedNft.id)}
              >
                Sell
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isCancelModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl mb-4">Cancel Sale</h2>
            <p>
              Are you sure you want to cancel the sale of {selectedNft.name}?
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleCancelSelling(selectedNft.id)}
              >
                Cancel Sale
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
