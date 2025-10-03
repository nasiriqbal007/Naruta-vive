import React from "react";
import { Heart } from "lucide-react";

const SimpleProductCard = ({ product }) => {
  return (
    <div
      className=" bg-white p-8
      pop-up-card
    "
    >
      <div className="flex justify-between">
        <div className="text-start">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <Heart className="text-right" />
      </div>

      <div className="items-center justify-center flex flex-1 p-8">
        <img src={product.image} alt={product.name} className=" object-cover" />
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="text-left">
          <h2 className="font-xl">${product.price}</h2>
          <p className="line-through">${product.oldPrice}</p>
        </div>

        <button className="btn-secondary heading border-[#151515] w-full sm:auto">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SimpleProductCard;
