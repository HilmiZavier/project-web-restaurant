import React, { useState } from "react";

const DrinkSelector = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleOrder = () => {
    alert(`Anda memesan minuman sejumlah ${quantity}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="card w-96 bg-base-100 shadow-xl p-5">
        <figure>
          <div className="h-32 w-full bg-gray-300 flex justify-center items-center text-gray-600">
            gambar
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Nama Minuman</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="btn btn-outline btn-primary">Panas</button>
            <button className="btn btn-outline btn-secondary">Dingin</button>
            <button className="btn btn-outline btn-primary">Gelas Besar</button>
            <button className="btn btn-outline btn-secondary">Gelas Kecil</button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className="btn btn-error text-lg"
              onClick={handleDecrement}
              disabled={quantity === 0}
            >
              -
            </button>
            <span className="text-xl mx-4">{quantity}</span>
            <button
              className="btn btn-success text-lg"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button className="btn btn-primary mt-4 w-full" onClick={handleOrder}>
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkSelector;
