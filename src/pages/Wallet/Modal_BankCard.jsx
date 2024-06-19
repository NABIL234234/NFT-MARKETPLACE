import React, { useState } from "react";

const BankCardModal = ({ open, onClose, onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-2xl mb-4">Enter Bank Card Details</h3>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="mb-2 p-2 w-full bg-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={cardExpiryDate}
          onChange={(e) => setCardExpiryDate(e.target.value)}
          className="mb-2 p-2 w-full bg-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="mb-4 p-2 w-full bg-gray-700 rounded"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-600 hover:bg-gray-500  px-4 py-2 rounded">Cancel</button>
          <button onClick={() => onSubmit({ cardNumber, cardExpiryDate, cvv })} className="bg-purple-600  hover:bg-white hover:text-black px-4 py-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BankCardModal;
