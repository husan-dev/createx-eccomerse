import { getBlogCategories } from "@api/blog";
import { Paragraph, Title } from "@components/typography";
import { useQuery } from "@tanstack/react-query";
import { IBlogCategory } from "@typess/blog";
import { Divider, Input, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";

function Panel({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog-category", i18n.language],
    queryFn: () => getBlogCategories(i18n.language),
  });
  if (isLoading) {
    return (
      <div className="flex flex-col gap-5">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              style={{ width: "100%" }}
              className="flex flex-col"
            >
              <Skeleton.Input block active />
            </div>
          ))}
      </div>
    );
  }
  console.log(data, "blog-c");

  if (error) return <p>Xatolik yuz berdi: error</p>;
  return (
    <div className={` ${className}`}>
      <Input size="large" className="rounded-sm" suffix={<IoSearch />} />
      <Divider />
      <Title className="!text-[20px] !mb-5">Blog Categories</Title>
      <ul>
        <li className="flex justify-between">
          <Paragraph className="font-bold hover:cursor-pointer hover:!text-main">
            All
          </Paragraph>
          <Paragraph>
            {data.data.reduce(
              (count: number, item: IBlogCategory) =>
                count + item.attributes.countBlog,
              0
            )}
          </Paragraph>
        </li>
        {data.data.map((item: IBlogCategory) => (
          <li key={item.id} className="flex justify-between">
            <Paragraph className="font-bold hover:cursor-pointer hover:!text-main">
              {item.title}
            </Paragraph>
            <Paragraph>{item.attributes.countBlog}</Paragraph>
          </li>
        ))}
      </ul>
      <Divider />
      <Title className="!text-[20px]">Featered Posts</Title>
      <Divider />
      <Title className="!text-[20px]">Tags</Title>
    </div>
  );
}

export default Panel;
