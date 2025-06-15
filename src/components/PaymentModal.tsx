
import React from "react";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (mode: "cod" | "online") => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ open, onClose, onSelect }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[1000] bg-black/30 flex items-center justify-center">
      <div className="bg-white px-8 py-7 rounded-xl shadow-2xl relative max-w-[360px] w-full">
        <button className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-red-400" onClick={onClose}>
          &times;
        </button>
        <h2 className="font-bold text-xl mb-5 text-gray-900 text-center">Select Payment Mode</h2>
        <button
          className="w-full bg-yellow-400 text-black font-bold rounded-lg py-3 mb-3 hover:bg-yellow-500 text-lg transition"
          onClick={() => onSelect("cod")}
        >
          Cash On Delivery
        </button>
        <button
          className="w-full bg-black text-white font-bold rounded-lg py-3 hover:bg-gray-800 text-lg transition"
          onClick={() => onSelect("online")}
        >
          Online Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
