import { Paragraph } from "./typography";

function Card() {
  return (
    <div>
      <img
        className="w-full"
        src="https://avatars.mds.yandex.net/i?id=90ee4481648dad4ac2c9a4f57b75bed1-4227431-images-thumbs&n=13"
        alt=""
      />
      <Paragraph className=" !mb-2 text-xl font-semibold">
        Summer Clothes
      </Paragraph>
      <Paragraph className="!m-0 text-2xl font-bold">12$</Paragraph>
    </div>
  );
}

export default Card;
