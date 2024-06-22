import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { SlUserFollow } from "react-icons/sl";
import {
  fetchProfileInfo,
  changeProfilePhoto,
  pushNftToMarket,
  deleteNft,
  cancelSelling,
} from "../../../store/slices/nft";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";
import "./Hero.css";

const TABS = [
  { label: "Создано", value: "createdNfts" },
  { label: "Принадлежит", value: "ownedNfts" },
];

export default function Hero() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.nft);
  const data = profile?.data || {};
  const [selectedTab, setSelectedTab] = useState("createdNfts");
  const [followersCount, setFollowersCount] = useState(
    data?.followersCount || 0
  );
  const [transactionVolume, setTransactionVolume] = useState(
    data?.transactionVolume || 0
  );
  const [countOfSoldNft, setCountOfSoldNft] = useState(
    data?.countOfSoldNft || 0
  );
  const [isFollowed, setIsFollowed] = useState(false);
  const [imagePreview, setImagePreview] = useState(() => {
    return localStorage.getItem("avatarUrl") || data?.avatar;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNft, setSelectedNft] = useState(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileInfo(id))
        .then((response) => {
          console.log("Profile info response:", response);
        })
        .catch((error) => {
          console.error("Error fetching profile info:", error);
        });
    } else {
      console.error("ID должен быть числом");
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (data) {
      const avatar = localStorage.getItem("avatarUrl") || data.avatar;
      setImagePreview(avatar);
      setIsFollowed(data.isFollowed || false);
      setTransactionVolume(data.transactionVolume || 0);
      setCountOfSoldNft(data.countOfSoldNft || 0);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleFollow = () => {
    if (!isFollowed) {
      const newFollowersCount = followersCount + 1;
      setFollowersCount(newFollowersCount);
      setIsFollowed(true);
    }
  };

  const changeAvatar = (event) => {
    const photoData = event.target.files[0];
    if (photoData) {
      const formData = new FormData();
      formData.append("multipartFile", photoData);

      dispatch(changeProfilePhoto(formData))
        .then((response) => {
          console.log("Change profile photo response:", response);
          if (response.payload && response.payload.data) {
            const newAvatarUrl = response.payload.data;
            setImagePreview(newAvatarUrl);
            localStorage.setItem("avatarUrl", newAvatarUrl);
          }
        })
        .catch((error) => {
          console.error("Error changing profile photo:", error);
        });
    }
  };

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
    <>
      <div className="HeaderChannel" />
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="relative avatar-container">
          <label htmlFor="avatar-upload" className="avatar-label">
            <img src={imagePreview} className="avatar-image" alt="Profile" />
          </label>
          <input
            id="avatar-upload"
            type="file"
            onChange={changeAvatar}
            style={{ display: "none" }}
          />
        </div>
        <div>
          <div className="block md:flex items-center">
            <h2 className="text-white text-4xl font-semibold">
              {data?.username || "Unknown user"}
            </h2>
            <div className="flex gap-20 ml-auto">
              <button
                className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl transition ease-in-out delay-15 text-white border-2 border-purple-500 hover:bg-purple-500 active:bg-purple-700 p-4 mt-6"
                onClick={handleFollow}
              >
                <SlUserFollow />
                Подписаться
              </button>
            </div>
          </div>
          <div className="flex gap-8 sm:gap-40 smm:gap-15 mt-[20px] text-xl smm:text-2xl text-white">
            <div>
              <h2 className="font-semibold">{transactionVolume}+</h2>
              <h2 className="text-sm smm:text-xl">Объем транзакции</h2>
            </div>
            <div>
              <h2 className="font-semibold">{countOfSoldNft}+</h2>
              <h2 className="text-sm smm:text-xl">NFT продано</h2>
            </div>
            <div>
              <h2 className="font-semibold">{followersCount}+</h2>
              <h2 className="text-sm smm:text-xl">Подписчиков</h2>
            </div>
          </div>
          <div className="pt-[20px]">
            <h4 className="text-stone-400 text-lg">Ссылки</h4>
            <div className="w-72 flex gap-[20px] pt-5 text-purple-500">
              <a
                href="https://www.instagram.com/magic_nftmarcketplace?igsh=ZmplY3c0ZTI4eWI5"
                className="text-3xl"
              >
                <CiInstagram />
              </a>
              <a href="https://t.me/magic_nft_marketplace" className="text-3xl">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20 relative">
          <div className="flex gap-[150px] pb-2">
            {TABS.map((tab) => (
              <div key={tab.value} className="relative">
                <h3
                  className={`text-white cursor-pointer text-xl ${
                    selectedTab === tab.value ? "text-purple-600" : ""
                  }`}
                  onClick={() => handleTabChange(tab.value)}
                >
                  {tab.label}
                </h3>
                {selectedTab === tab.value && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 h-0.5 bg-purple-600 w-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-[60px] bg-zinc-750">
          <div className="max-w-6xl mx-auto px-5 font-mono">
            <div className="flex justify-start items-center flex-wrap mb-6">
              {selectedTab === "createdNfts" && 
                profile.data.createdNfts.map((nft) => (
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
              {selectedTab === "ownedNfts" &&
                profile.data.ownedNfts.map((nft) => (
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
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl mb-4">Confirm Sale</h2>
            <p>
              Вы уверены что хотите продать {selectedNft.name}{" "}
              {selectedNft.price}?
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleSellNft(selectedNft.id)}
              >
                Продать
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
      {isCancelModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Отменить продажу NFT</h2>
            <p className="mb-6">
              Вы уверены, что хотите отменить продажу {selectedNft.name}?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => handleCancelSelling(selectedNft.id)}
              >
                Отменить
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                onClick={closeModal}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
