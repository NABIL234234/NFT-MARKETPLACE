// components/CreateNftComponent.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createNft } from "../../store/slices/nft";

export default function CreateNft() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const dispatch = useDispatch();
  const { createdNft, nftLoading, nftError } = useSelector(
    (state) => state.nft
  );

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("nftImage", data.nftImage[0])

      const {nftImage, ...remainingData} = data;
      
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Создать NFT</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Имя
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className={`shadow appearance-none border ${
              errors.name ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">Это поле обязательно.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Цена
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            className={`shadow appearance-none border ${
              errors.price ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.price && (
            <p className="text-red-500 text-xs italic">Это поле обязательно.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Изображение (URL)

          </label>
          <input
            type="file"
            {...register("nftImage", { required: true })}
            className={`shadow appearance-none border ${
              errors.nftImage ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.nftImage && (
            <p className="text-red-500 text-xs italic">Это поле обязательно.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Описание
          </label>
          <textarea
            {...register("description", { required: true })}
            className={`shadow appearance-none border ${
              errors.description ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.description && (
            <p className="text-red-500 text-xs italic">Это поле обязательно.</p>
          )}
        </div>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            nftLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Создать NFT
        </button>
      </form>
      
    </div>
  );
}
