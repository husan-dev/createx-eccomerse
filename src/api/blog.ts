import api from "./axios";

export const getBlog = async (lng: string) => {
  const res = await api.get(
    `/blogs?locale=${lng}&populate=img&populate=category&fields=title,subtitle,date`
  );
  return res.data;
};

export const getBlogCategories = async (lng: string) => {
  const res = await api.get(`/blog-categories?locale=${lng}`);
  console.log(res.data, "blog-categories");
  return res.data;
};
