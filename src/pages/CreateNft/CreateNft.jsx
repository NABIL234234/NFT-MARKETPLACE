import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createNft } from "../../store/slices/nft";
import { RiNftFill } from "react-icons/ri";
import { MdOutlinePriceChange, MdDriveFileRenameOutline } from "react-icons/md";
import LiveNftCard from "../../components/LiveNftCard/LiveNftCard";
import nftImagePreview from "../../assets/IMAGE/SECTION/Astro.png";

export default function CreateNft() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createdNft, nftLoading, nftError } = useSelector(
    (state) => state.nft
  );

  const [previewImage, setPreviewImage] = useState(nftImagePreview);
  const [nftName, setNftName] = useState("");
  const [nftPrice, setNftPrice] = useState("");
  const [nftDescription, setNftDescription] = useState("");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("nftImage", data.nftImage[0]);
      for (let key in data) {
        if (key !== "nftImage") {
          formData.append(key, data[key]);
        }
      }
      const resultAction = await dispatch(createNft(formData));
      console.log("Созданный NFT:", resultAction.payload);
      if (resultAction.payload) {
        const userId = localStorage.getItem("userId"); // Получаем userId из localStorage
        navigate(`/profile/${userId}`);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-4 bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl text-white font-bold mb-6">Создать NFT</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                Название <MdDriveFileRenameOutline />
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                onChange={(e) => setNftName(e.target.value)}
                className={`appearance-none rounded-xl relative block w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  Это поле обязательно.
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                Цена <MdOutlinePriceChange />
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                onChange={(e) => setNftPrice(e.target.value)}
                className={`appearance-none rounded-xl relative block w-full px-3 py-2 border ${
                  errors.price ? "border-red-500" : "border-gray-700"
                } bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
              />
              {errors.price && (
                <p className="text-red-500 text-xs mt-1">
                  Это поле обязательно.
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                Изображение (URL) <RiNftFill className="pt-[2px]" />
              </label>
              <input
                type="file"
                {...register("nftImage", { required: true })}
                onChange={handleImageChange}
                className={`appearance-none rounded-xl relative block w-full px-3 py-2 border ${
                  errors.nftImage ? "border-red-500" : "border-gray-700"
                } bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
              />
              {errors.nftImage && (
                <p className="text-red-500 text-xs mt-1">
                  Это поле обязательно.
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:text-black bg-purple-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                nftLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={nftLoading}
            >
              {nftLoading ? "Создание..." : "Создать NFT"}
            </button>
            {nftError && (
              <p className="text-red-500 text-xs mt-2">Ошибка: {nftError}</p>
            )}
          </form>
        </div>
        <div className="w-full md:w-1/2 flex  p-4">
          <LiveNftCard
            imgUrl={previewImage}
            title={nftName || "Название NFT"}
            avatar={previewImage}
            user={"Moon"}
            price={nftPrice || "0"}
          />
        </div>
      </div>
    </div>
  );
}
