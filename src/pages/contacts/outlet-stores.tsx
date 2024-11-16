import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IOutletStores } from "@typess/contacts";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getStores } from "@api/contacts";
import { Skeleton } from "antd";
import { Title } from "@components/typography";
function OutletStores() {
  const { i18n } = useTranslation();
  const { data, isLoading, error } = useQuery({
    queryKey: ["outlet-stores", i18n.language],
    queryFn: () => getStores(i18n.language),
  });
  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:gap-7 md:grid-cols-2">
      {isLoading
        ? Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex flex-col">
                <Skeleton.Image className="!w-full !h-[150px] mb-2" active />
                <Skeleton className="!h-[70px]" active />
              </div>
            ))
        : data.map((item: IOutletStores) => <Card key={item.id} item={item} />)}
    </div>
  );
}

export default OutletStores;

function Card({ item }: { item: IOutletStores }) {
  return (
    <div className="transition-all border rounded-sm cursor-pointer hover:scale-105 hover:shadow-md">
      <img
        style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        className="w-full h-[150px]"
        src={`${import.meta.env.VITE_BASE_URL}${item.img.url}`}
        alt=""
      />

      <div className="p-3">
        <Title className="!text-[20px]">{item.title}</Title>
        <ul>
          <li className="flex items-center gap-1 mb-2">
            {<IoPhonePortraitOutline />}
            {item.phone}
          </li>
          <li className="flex items-center gap-1 mb-2">
            {<CiMail />}
            {item.email}
          </li>
          <li className="flex items-center gap-1 mb-2">
            {<CiClock2 />}
            {item.workTime}
          </li>
          <li className="flex items-center gap-1 mb-2">
            {<IoLocationOutline />}
            {item.location}
          </li>
        </ul>
        {}
      </div>
    </div>
  );
}
