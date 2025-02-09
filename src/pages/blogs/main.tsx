import { getBlogs } from "@api/blog";
import { Paragraph, Title } from "@components/typography";
import { useQuery } from "@tanstack/react-query";
import { IBlog } from "@typess/blog";
import { Divider, Skeleton, Space } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MainBlogs() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", i18n.language],
    queryFn: () => getBlogs(i18n.language),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-7">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} style={{ width: "100%" }} className="flex flex-col">
            <Skeleton.Image
              style={{ width: "100%", height: "300px" }}
              active
              className="mb-3"
            />
            <Skeleton active />
          </div>
        ))}
      </div>
    );
  }

  if (error) return <p>Xatolik yuz berdi: {(error as Error).message}</p>;

  return (
    <>
      {data?.data.map((item: IBlog) => (
        <div key={item.id} className="mb-[30px]">
          <img
            src={`${import.meta.env.VITE_BASE_URL}${item.img.url}`}
            alt={item.title}
            className="w-full mb-4"
          />
          <Space className="mb-3 !text-gray-500" size="small">
            <Paragraph className="!m-0 !text-gray-500">
              {item.category?.title || "No Category"}
            </Paragraph>
            <Divider className="bg-gray-500" type="vertical" />
            <Paragraph className="!m-0 !text-gray-500">
              {dayjs(item.date).format("MMMM D, YYYY")}
            </Paragraph>
            <Divider className="bg-gray-500" type="vertical" />
            <Paragraph className="flex !m-0 items-center gap-2 !text-gray-500">
              <FaRegComment />
              noComment
            </Paragraph>
          </Space>
          <Title
            onClick={() => navigate(item.slug)}
            className="!text-[20px] hover:text-main hover:cursor-pointer"
          >
            {item.title}
          </Title>
          <Paragraph className="line-clamp-2">{item.subtitle}</Paragraph>
        </div>
      ))}
    </>
  );
}

export default MainBlogs;
