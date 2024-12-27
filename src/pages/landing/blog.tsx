import { getBlogL } from "@api/landing";
import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { useQuery } from "@tanstack/react-query";
import { IBlog } from "@typess/blog";
import { Button, Divider, Skeleton } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { FaRegComment } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Blog() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog-landing", i18n.language],
    queryFn: () => getBlogL(i18n.language),
  });
  if (isLoading) {
    return (
      <Container className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              style={{ width: "100%" }}
              className="flex flex-col"
            >
              <Skeleton.Image
                style={{ width: "100%", height: "300px" }}
                active
                className="mb-3"
              />
              <Skeleton active />
            </div>
          ))}
      </Container>
    );
  }

  if (error) return <p>Xatolik yuz berdi: error</p>;
  return (
    <Container>
      <div className="flex items-center justify-between mb-[20px]">
        <Title className="!mb-0 !text-2xl sm:!text-3xl md:!text-4xl">
          Fashion Blogs
        </Title>
        <Button
          className="rounded-none"
          onClick={() => navigate("blog")}
          size="large"
        >
          View More
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {data.map((item: IBlog) => (
          <div
            key={item.id}
            className="flex flex-col border-2 rounded shadow-xl"
          >
            <img
              src={`${import.meta.env.VITE_BASE_URL}${item.img.url}`}
              alt="image"
              className="w-full aspect-[5/2.7] select-none"
            />
            <div className="flex flex-col justify-between flex-grow h-auto p-5">
              <Title className="!text-[20px] line-clamp-2 hover:text-main hover:cursor-pointer">
                {item.title}
              </Title>
              <div className="mb-3 !text-gray-500 gap-2 flex-wrap flex items-center">
                <Paragraph className="!m-0 text-nowrap !text-gray-500 ">
                  {item.category.title}
                </Paragraph>
                <Divider className="bg-gray-500 " type="vertical" />
                <Paragraph className="!m-0 text-nowrap !text-gray-500">
                  {dayjs(item.date).format("MMMM D, YYYY")}
                </Paragraph>
                <Divider className="bg-gray-500 " type="vertical" />
                <Paragraph className="flex !m-0 items-center gap-2 !text-gray-500">
                  <FaRegComment className="!size-[14px] flex-shrink-0" />
                  noComment
                </Paragraph>
              </div>
              <Paragraph className="line-clamp-2">{item.subtitle}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Blog;
