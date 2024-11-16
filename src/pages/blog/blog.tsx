import { getBlog } from "@api/blog";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import { useTranslation } from "react-i18next";

function Blog() {
  const { i18n } = useTranslation();
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", i18n.language],
    queryFn: () => getBlog(i18n.language),
  });
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Skeleton.Input key={index} active block />
          ))}
      </div>
    );
  }

  if (error) return <p>Xatolik yuz berdi: error</p>;
  console.log(data?.data);
  return <div>{data?.data}</div>;
}

export default Blog;
