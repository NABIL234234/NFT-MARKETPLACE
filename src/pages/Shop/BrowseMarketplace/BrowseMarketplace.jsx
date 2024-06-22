import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNftsForSale, transactions } from "../../../store/slices/nft";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";
import Title from "../../../components/Title/Title";
import Search from "../../../assets/IMAGE/PLAY.SVG/nav/search.svg";

const Modal = ({
  isOpen,
  onClose,
  onSell,
  nftName,
  nftPrice,
  onPaymentChange,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("META_MASK_WALLET");

  const handleSell = () => {
    onSell(paymentMethod);
    onClose();
  };

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
    onPaymentChange(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-lg font-bold mb-4">Confirm Sale</h2>
        <p>
          Вы действительно хотите купить {nftName} за {nftPrice}?
        </p>
        <div className="mt-4">
          <label className="block mb-2">Способ оплаты:</label>
          <select
            className="p-2 border border-gray-300 rounded"
            value={paymentMethod}
            onChange={handleChange}
          >
            <option value="META_MASK_WALLET">Кошелек MetaMask</option>
            <option value="BANK_CARD">Банковская карта</option>
          </select>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button
            className="bg-purple-700 text-white px-4 py-2 rounded"
            onClick={handleSell}
          >
            Купить
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={onClose}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default function BrowseMarketplace() {
  const dispatch = useDispatch();
  const {
    nftsForSale: { data },
    loading,
    error,
  } = useSelector((state) => state.nft);
  const [nftList, setNftList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNft, setSelectedNft] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("META_MASK_WALLET");

  useEffect(() => {
    dispatch(fetchNftsForSale());
  }, [dispatch]);

  const filterNft = (searchText) => {
    if (!searchText) {
      return data;
    }
    return data.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredNft = filterNft(searchTerm);
      setNftList(filteredNft);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm, data]);

  useEffect(() => {
    setNftList(data);
  }, [data]);

  const handleSellClick = (nft) => {
    setSelectedNft(nft);
    setIsModalOpen(true);
  };

  const handleSell = (paymentMethod) => {
    if (selectedNft) {
      dispatch(
        transactions({ nftId: selectedNft.id, meansOfPayment: paymentMethod })
      );
    }
  };

  const handlePaymentChange = (method) => {
    setSelectedPaymentMethod(method);
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
            mainText="Торговая площадка"
            miniText="Подберите NFT в торговой площадке на любой вкус!"
          />
          <div className="relative">
            <img
              className="absolute  top-[56%] left-[88%] rdd:left-[90%] rd:left-[92%] smm:left-[93%] sm:left-[94%] mdd:left-[95%] lgg:left-[96%] w-[22px]"
              src={Search}
              alt="search"
            />
            <input
              className="w-full p-[13px] rounded-2xl bg-zinc-700 text-white outline-none pr-[60px] mt-[30px]"
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Найдите свои любимые NFT"
            />
          </div>
          <div className="flex justify-center mt-[80px] pb-[10px] ">
            <div className="flex justify-center items-center ">
              <h3 className="text-xl text-white font-semibold">NFTs</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 bg-zinc-700">
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
                  creatorUsername={nft.ownerUsername}
                  dollarPrice={`${nft.dollarPrice}`}
                  ethereumPrice={`${nft.ethereumPrice}`}
                  ownerId={nft.ownerId}
                  onIconClick={() => handleIconClick(nft.id)}
                  onDelete={() => handleDelete(nft.id)}
                  onCancel={() => handleCancel(nft.id)}
                  onWalletClick={() => handleSellClick(nft)}
                  BuyIcon
                />
              ))
            ) : (
              <div>NFT не найдено</div>
            )}
          </div>
        </div>
      </div>

      {selectedNft && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSell={handleSell}
          nftName={selectedNft.name}
          nftPrice={selectedNft.price}
          onPaymentChange={handlePaymentChange}
        />
      )}
    </>
  );
}
