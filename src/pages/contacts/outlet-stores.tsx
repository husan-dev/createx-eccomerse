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
import { useMemo } from "react";
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
    <div className="grid grid-cols-1 gap-5 md:gap-7 sm:grid-cols-2">
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
  const data = useMemo(
    () => [
      { key: 1, title: item.phone, icon: <IoPhonePortraitOutline /> },
      { key: 2, title: item.email, icon: <CiMail /> },
      { key: 3, title: item.workTime, icon: <CiClock2 /> },
      { key: 4, title: item.location, icon: <IoLocationOutline /> },
    ],
    [item]
  );
  return (
    <div className="transition-all border rounded-sm cursor-pointer hover:shadow-md">
      <img
        className="w-full aspect-[3/1.7]"
        src={`${import.meta.env.VITE_BASE_URL}${item.img.url}`}
        alt="store"
      />

      <div className="p-3">
        <Title className="!text-[20px]">{item.title}</Title>
        <ul>
          {data.map((i) => (
            <li
              key={i.key}
              className="flex items-center text-[14px] gap-1 mb-2"
            >
              {i.icon}
              {i.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
