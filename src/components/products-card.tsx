import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { Paragraph } from "./typography";
import { useState } from "react";
import { Product } from "@typess/products";
import { Rate } from "antd";

function Card({ item }: { item: Product }) {
  const [like, setLike] = useState(false);
  return (
    <div className="overflow-hidden cursor-pointer">
      <div className="relative overflow-hidden bg-gray-400 border">
        <img
          className="w-full hover:scale-105 transition-all overflow-hidden select-none aspect-[3/3.5] object-cover"
          src={import.meta.env.VITE_BASE_URL + item.media.url}
          alt="product image"
        />
        <div className="absolute top-2 left-2">
          <Rate disabled value={item.star as number} />
        </div>
        {/* <Paragraph className="absolute py-1 hover:scale-105 transition-all px-2 !m-0 text-white bg-red-600 rounded-md top-3 left-3">
          50%
        </Paragraph> */}
        <div
          onClick={() => setLike(!like)}
          className="absolute flex items-center justify-center p-2 bg-white border rounded-full group bottom-2 right-2"
        >
          {like ? (
            <FaHeart className="transition-all !text-red-500 group-hover:scale-110" />
          ) : (
            <FaRegHeart className="transition-all group-hover:scale-110" />
          )}
        </div>
      </div>

      <Paragraph className=" !mb-2 text-xl font-semibold line-clamp-2 lowercase">
        {item.name}
      </Paragraph>
      <Paragraph className="!m-0 text-2xl font-bold">
        $
        {item.price.toLocaleString("en-Us", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Paragraph>
    </div>
  );
}

export default Card;
