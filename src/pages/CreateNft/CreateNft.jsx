// components/CreateNftComponent.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createNft } from "../../store/slices/nft";

// images
import { RiNftFill } from "react-icons/ri";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";

export default function CreateNft() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const { createdNft, nftLoading, nftError } = useSelector(
    (state) => state.nft
  );

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("nftImage", data.nftImage[0]);

      const { nftImage, ...remainingData } = data;

      for (let key in remainingData) {
        formData.append(key, data[key]);
      }
      const resultAction = await dispatch(createNft(formData));
      console.log("Созданный NFT:", resultAction.payload);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-white font-bold mb-6">Create NFT</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
            Name <MdDriveFileRenameOutline />
            </label>
            <input
              type="text"
            
              {...register("name", { required: true })}
              className={`appearance-none rounded-xl relative block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-700"
              } bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">Это поле обязательно.</p>
            )}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              Price <MdOutlinePriceChange />
            </label>
            <input
              type="number"
              
              {...register("price", { required: true })}
              className={`appearance-none rounded-xl relative block w-full px-3 py-2 border ${
                errors.price ? "border-red-500" : "border-gray-700"
              } bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-1">Это поле обязательно.</p>
            )}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              Image (URL) <RiNftFill  className="pt-[2px]"/>
            </label>
            <input
              type="file"
              {...register("nftImage", { required: true })}
              className={`appearance-none rounded-xl relative block w-full px-3 py-2 border ${
                errors.nftImage ? "border-red-500" : "border-gray-700"
              } bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
            />
            {errors.nftImage && (
              <p className="text-red-500 text-xs mt-1">Это поле обязательно.</p>
            )}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              description <MdDriveFileRenameOutline />
            </label>
            <textarea
              {...register("description", { required: true })}
              className={`appearance-none rounded-xl relative block w-full px-3 py-2 border ${
                errors.description ? "border-red-500" : "border-gray-700"
              } bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">Это поле обязательно.</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:text-black bg-purple-600 hover:bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                nftLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={nftLoading}
            >
              Create NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}