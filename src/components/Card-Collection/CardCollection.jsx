import React from "react";

export default function CardCollection({imgUrl, imgUrl2, imgUrl3,CollectionName, avatarUrl,nickName}) {
  return (
    <>
      <div className="pt-8 sm:pt-16">
        <div>
          <div>
            <img src={imgUrl} alt="DOG" />
          </div>
          <div className="flex pt-4 gap-4">
            <div>
              <img src={imgUrl2} alt="CAT" />
            </div>
            <div>
              <img src={imgUrl3} alt="BEAR" />
            </div>
            <div className="flex justify-center items-center p-6 bg-purple-500 rounded-2xl">
              <h3 className="pl-1.5 text-white  font-semibold">1025+</h3>
            </div>
          </div>
          <div className="text-white pt-3">
            <h4 className="text-lg">{CollectionName}</h4>
            <div className="flex pt-2 gap-2">
              <img
                src={avatarUrl}
                alt="fox"
              />
              <h5>{nickName}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
