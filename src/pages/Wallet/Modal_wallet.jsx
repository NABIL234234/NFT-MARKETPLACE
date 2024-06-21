import React, { useState } from "react";

const WalletModal = ({ open, onClose, onSubmit, walletAddress, setWalletAddress, walletPassword, setWalletPassword }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!walletAddress) tempErrors.walletAddress = "Wallet Address is required.";
    if (!walletPassword) tempErrors.walletPassword = "Wallet Password is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4">
          <h3 className="text-2xl mb-4">Введите данные кошелька</h3>
          <input
            type="text"
            placeholder="Адрес кошелька"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="mb-2 p-2 w-full bg-gray-700 rounded"
          />
          {errors.walletAddress && <p className="text-red-500 text-sm">{errors.walletAddress}</p>}
          <input
            type="password"
            placeholder="Пароль кошелька"
            value={walletPassword}
            onChange={(e) => setWalletPassword(e.target.value)}
            className="mb-4 p-2 w-full bg-gray-700 rounded"
          />
          {errors.walletPassword && <p className="text-red-500 text-sm">{errors.walletPassword}</p>}
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded">отмена</button>
          <button onClick={handleSubmit} className="bg-purple-600 hover:bg-white hover:text-black px-4 py-2 rounded">отправить</button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
