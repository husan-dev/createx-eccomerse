import { getBlog } from "@api/blog";
import { Paragraph, Title } from "@components/typography";
import { useQuery } from "@tanstack/react-query";
import { Divider, Space, Tag } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { FaRegComment } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // HTML ni o‘qish uchun
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

function MainBlog() {
  const params = useParams();
  const { i18n } = useTranslation();
  const blogSlug = params.blog ? params.blog : "";
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", i18n.language],
    queryFn: () => getBlog(i18n.language, blogSlug),
  });
  console.log(data);
  if (isLoading) return <div>salom</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <div className=" mx-auto !max-w-[600px] mt-[35px]">
        <Title className="!text-[40px] !font-bold">{data[0].title}</Title>
        <Space className="mb-3 !text-gray-500" size={"small"}>
          <Paragraph className="!m-0 !text-gray-500">
            {data[0].category?.title}
          </Paragraph>

          <Divider className="bg-gray-500 " type="vertical" />
          <Paragraph className="!m-0 !text-gray-500">
            {dayjs(data[0].date).format("MMMM D, YYYY")}
          </Paragraph>
          <Divider className="bg-gray-500 " type="vertical" />
          <Paragraph className="flex !m-0 items-center gap-2 !text-gray-500">
            <FaRegComment />
            noComment
          </Paragraph>
        </Space>
      </div>
      <Divider />
      <div className="mx-auto !max-w-[600px]">
        <img
          src={`${import.meta.env.VITE_BASE_URL}${data[0].img.url}`}
          alt="image"
          className="w-full mb-4"
        />
        <Title className="!font-semibold !text-[20px] !leading-[1.47]">
          {data[0].subtitle}
        </Title>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="mb-[20px]"
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            h1: ({ ...props }) => (
              <h1 style={{ color: "blue", fontSize: "2rem" }} {...props} />
            ),
            h2: ({ ...props }) => (
              <h2
                style={{
                  color: "darkgreen",
                  fontSize: "1.5rem",
                  marginTop: "20px",
                  marginBottom: "7px",
                }}
                {...props}
              />
            ),
            ul: ({ ...props }) => (
              <ul
                style={{ listStyleType: "circle", marginLeft: "20px" }}
                {...props}
              />
            ),
          }}
        >
          {data[0].markdown}
        </ReactMarkdown>
        <Space>
          <Title className="!m-0 !text-[20px]">Tags:</Title>
          <Space>
            {data[0].tags.map((item: string) => (
              <Tag key={item}>#{item}</Tag>
            ))}
          </Space>
        </Space>
      </div>
      <Divider />
    </>
  );
}

export default MainBlog;
