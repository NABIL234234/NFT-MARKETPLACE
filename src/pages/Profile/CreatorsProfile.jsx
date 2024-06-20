import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { SlUserFollow } from "react-icons/sl";
import { useParams } from "react-router-dom";
import UserData from "../../../server/UserData";

const TABS = [
  { label: "Created", value: "createdNfts" },
  { label: "Owned", value: "ownedByNfts" },
];

export default function CreatorsProfile() {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("createdNfts");
  const [followersCount, setFollowersCount] = useState(0);
  const [isFollowed, setIsFollowed] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [soldNft, setSoldNft] = useState(0); // Initialize with 0, as it's a number

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (id) {
      const profile = UserData[id];
      if (profile) {
        setProfileData(profile);
        setImagePreview(profile.imgUrl);
        setFollowersCount(profile.followersCount || 0);
        setSoldNft(profile.soldNft || 0); // Set soldNft directly as a number
      } else {
        console.error("Profile not found");
      }
    } else {
      console.error("ID должен быть числом");
    }
  }, [id]);

  if (!profileData) {
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
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(photoData);
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
          <div className="block md:flex items-center">
            <h2 className="text-white text-4xl font-semibold">
              {profileData.nickName || "Unknown user"}
            </h2>
            <div className="flex gap-20 ml-auto">
              <button
                className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl transition ease-in-out delay-15 text-white border-2 border-purple-500 hover:bg-purple-500 active:bg-purple-700 p-4 mt-6"
                onClick={handleFollow}
              >
                <SlUserFollow />
                Follow
              </button>
            </div>
          </div>
          <div className="flex gap-8 sm:gap-40 smm:gap-15 mt-[20px] text-xl smm:text-2xl text-white">
            <div>
              <h2 className="font-semibold">{profileData.volume}+</h2>
              <h2 className="text-sm smm:text-xl">Volume</h2>
            </div>
            <div>
              <h2 className="font-semibold">{soldNft}+</h2>
              <h2 className="text-sm smm:text-xl">Sold NFT</h2>
            </div>
            <div>
              <h2 className="font-semibold">{followersCount}+</h2>
              <h2 className="text-sm smm:text-xl">Subscribers</h2>
            </div>
          </div>
          <div className="pt-[20px]">
            <h4 className="text-stone-400 text-lg">Links</h4>
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
                  key={tab.value} // Add unique key
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
      </div>
    </>
  );
}
