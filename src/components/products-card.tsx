import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { Paragraph } from "./typography";
import { useState } from "react";
import { Rate } from "antd";

function Card() {
  const [like, setLike] = useState(false);
  return (
    <div className="overflow-hidden cursor-pointer">
      <div className="relative bg-gray-400 border">
        <img
          className="w-full"
          src="https://avatars.mds.yandex.net/i?id=90ee4481648dad4ac2c9a4f57b75bed1-4227431-images-thumbs&n=13"
          alt=""
        />
        <div className="absolute top-2 right-2">
          <Rate />
        </div>
        <Paragraph className="absolute py-1 hover:scale-105 transition-all px-2 !m-0 text-white bg-red-600 rounded-md top-3 left-3">
          50%
        </Paragraph>
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

      <Paragraph className=" !mb-2 text-xl font-semibold">
        Summer Clothes
      </Paragraph>
      <Paragraph className="!m-0 text-2xl font-bold">12$</Paragraph>
    </div>
  );
}

export default Card;
