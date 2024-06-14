import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNftsForSale } from "../../../store/slices/nft";
import { BsBandaidFill } from "react-icons/bs";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";
import Title from "../../../components/Title/Title";

// images
import Search from "../../../assets/IMAGE/PLAY.SVG/nav/search.svg";

export default function BrowseMarketplace() {
  const dispatch = useDispatch();
  const { nftsForSale: { data }, loading, error } = useSelector((state) => state.nft);
  const [nftList, setNftList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchNftsForSale());
  }, [dispatch]);

  const filterNft = (searchText, listOfNft) => {
    if (!searchText) {
      return listOfNft;
    }
    return listOfNft.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredNft = filterNft(searchTerm, data);
      setNftList(filteredNft);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm, data]);

  useEffect(() => {
    setNftList(data);
  }, [data]);

  const handleIconClick = (id) => {
    console.log(`Icon clicked for NFT ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete clicked for NFT ID: ${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div>
          <Title
            mainText="Browse Marketplace"
            miniText=" Browse through more than 50k NFTs on the NFT Marketplace."
          />
          <div className="relative">
            <img
              className="absolute top-[56%] left-[88%] rdd:left-[90%] rd:left-[92%] smm:left-[93%] sm:left-[94%] mdd:left-[95%] lgg:left-[96%] w-[22px]"
              src={Search}
              alt="search"
            />
            <input
              className="w-full p-[13px] rounded-2xl bg-zinc-700 text-white outline-none pr-[60px] mt-[30px]"
              type="text"
              placeholder="Search your favourite NFTs"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex mt-[80px]">
            <div className="flex justify-center items-center gap-[16px] w-[525px]">
              <h3 className="text-white font-semibold">NFTs</h3>
              <div className="bg-zinc-400 w-[47px] pt-0.5 pb-0.5 px-2.5 rounded-full">
                <h5 className="text-white">300</h5>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[16px] w-[525px]">
              <h3 className="text-stone-400 font-semibold">Collection</h3>
              <div className="bg-zinc-400 w-[37px] pt-0.5 pb-0.5 px-2.5 rounded-full">
                <h5 className="text-white">70</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[60px] bg-zinc-700">
        <div className="max-w-6xl mx-auto px-5 font-mono">
          <div className="flex justify-start items-center flex-wrap">
            {nftList && nftList.length > 0 ? (
              nftList.map((nft) => (
                <CardMoreNft
                  key={nft.id}
                  id={nft.id}
                  imgUrl={nft.nftImage}
                  title={nft.name}
                  avatar={nft.userAvatar}
                  user={nft.owner}
                  price={`${nft.price}`}
                  ownerId={nft.ownerId}
                  onIconClick={() => handleIconClick(nft.id)}
                  onDelete={() => handleDelete(nft.id)}
                />
              ))
            ) : (
              <div className="flex justify-center text-center gap-2 w-full text-2xl text-purple-500">
                <h3>No NFTs found </h3>
                <BsBandaidFill />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
