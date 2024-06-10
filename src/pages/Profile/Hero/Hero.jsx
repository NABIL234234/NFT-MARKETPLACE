import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileInfo, changeProfilePhoto } from "../../../store/slices/nft";
import "./Hero.css";
import { motion } from "framer-motion";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { SlUserFollow } from "react-icons/sl";
import { useParams } from "react-router";
import DefaultPhoto from "../../../assets/IMAGE/SECTION/Astro.png";

const TABS = [
  { label: "Created", value: "createdNfts" },
  { label: "Owned", value: "ownedByNfts" },
];

export default function Hero() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.nft);
  const data = profile?.data || {};
  const [selectedTab, setSelectedTab] = useState("createdNfts");
  const [followersCount, setFollowersCount] = useState(data?.followersCount || 0);
  const [isFollowed, setIsFollowed] = useState(localStorage.getItem("isFollowed") === "true");
  const [imagePreview, setImagePreview] = useState(localStorage.getItem("profileImage") || DefaultPhoto);

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileInfo(id));
    } else {
      console.error("ID должен быть числом");
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (data) {
      setImagePreview(data.avatar || DefaultPhoto);
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
      localStorage.setItem("isFollowed", "true");
    }
  };

  const changeAvatar = (event) => {
    const photoData = event.target.files[0];
    if (photoData) {
      const formData = new FormData();
      formData.append("image", photoData);

      // Показать временное превью
      const temporaryImageURL = URL.createObjectURL(photoData);
      setImagePreview(temporaryImageURL);

      dispatch(changeProfilePhoto(formData)).then((response) => {
        if (response.payload && response.payload.avatarUrl) { // Убедитесь, что возвращаем правильный URL
          const newAvatarUrl = response.payload.avatarUrl; // Используйте URL, возвращенный сервером
          setImagePreview(newAvatarUrl);
          localStorage.setItem("profileImage", newAvatarUrl);
        }
      }).catch((error) => {
        console.error("Error changing profile photo:", error);
        // Вернуться к предыдущему изображению в случае ошибки
        setImagePreview(localStorage.getItem("profileImage") || DefaultPhoto);
      });
    }
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
          <div className="block mdd:flex items-center">
            <h2 className="text-white text-4xl font-semibold">
              {data?.username || "Unknown user"}
            </h2>
            <div className="flex gap-[20px] ml-auto">
              <button
                className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl transition ease-in-out delay-15 text-white border-2 border-purple-500 hover:bg-purple-500 active:bg-purple-700 p-4 mt-6"
                onClick={handleFollow}
              >
                <SlUserFollow />
                Follow
              </button>
            </div>
          </div>
          <div className="flex gap-[8px] sm:gap-[40px] smm:gap-[15px] mt-[30px] text-xl smm:text-2xl text-white">
            <div>
              <h2 className="font-semibold">{data?.volume}+</h2>
              <h2 className="text-sm smm:text-xl">Volume</h2>
            </div>
            <div>
              <h2 className="font-semibold">+</h2>
              <h2 className="text-sm smm:text-xl">Sold NFT</h2>
            </div>
            <div>
              <h2 className="font-semibold">{followersCount}+</h2>
              <h2 className="text-sm smm:text-xl">Subscribers</h2>
            </div>
          </div>
          <div className="pt-[30px]">
            <h4 className="text-stone-400 text-lg">Links</h4>
            <div className="w-72% flex gap-[12px] pt-[5px] text-purple-500">
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
        <div className="flex flex-col items-center mt-[20px] relative">
          <div className="flex gap-[116px] pb-2">
            {TABS.map((tab) => (
              <div key={tab.value} className="relative">
                <h3
                  className={`text-white  cursor-pointer text-xl ${
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
      </div>
    </>
  );
}
