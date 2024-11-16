import { getFaqs } from "@api/contacts";
import { useQuery } from "@tanstack/react-query";
import { IFaqs } from "@typess/contacts";
import { Collapse, Skeleton } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaMinus, FaPlus } from "react-icons/fa6";

function Faq() {
  const { i18n } = useTranslation();
  // const [showSkeleton, setShowSkeleton] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ["faqs", i18n.language],
    queryFn: () => getFaqs(i18n.language),
  });

  const items = useMemo(() => {
    return data
      ? data.map((item: IFaqs) => ({
          key: item.documentId,
          label: item.title,
          children: item.answer,
        }))
      : [];
  }, [data]);

  if (isLoading) {
    return (
      <>
        <div className="flex flex-col gap-4">
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <Skeleton.Input key={index} active block />
            ))}
        </div>
      </>
    );
  }

  if (error) return <p>Xatolik yuz berdi: error</p>;

  return (
    <>
      <Collapse
        className="rounded-md"
        defaultActiveKey={["1"]}
        expandIconPosition={"end"}
        bordered={false}
        ghost={true}
        expandIcon={({ isActive }) =>
          isActive ? (
            <FaMinus className="!text-main !text-lg" />
          ) : (
            <FaPlus className="!text-main  !text-lg" />
          )
        }
        items={items}
      />
    </>
  );
}

export default Faq;
