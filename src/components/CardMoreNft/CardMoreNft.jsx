import React from "react";

export default function CardMoreNft({imgUrl, title, avatar, user, price, Bid}) {
  return (
    <>
      <div>
        <div className="w-[330px] h-[469px] bg-zinc-700 rounded-3xl">
          <div>
            <img src={imgUrl} alt="Galaxy" />
          </div>
          <div className="text-white p-6">
            <div className="">
              <h4 className="text-xl">{title}</h4>
              <div className="flex gap-2 pt-[5px]">
                <img src={avatar} alt="Moon" />
                <h5 className="">{user}</h5>
              </div>
            </div>
            <div className="flex pt-[25px]">
              <div>
                <h5 className="text-stone-400">Price</h5>
                <h5 className="">{price}</h5>
              </div>
              <div className="ml-auto">
                <h5 className="text-stone-400">Highest Bid</h5>
                <h5 className="">{Bid}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
