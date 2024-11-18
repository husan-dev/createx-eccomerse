import api from "./axios";

export const getBlogs = async (lng: string) => {
  const res = await api.get(
    `/blogs?locale=${lng}&populate=img&populate=category&fields=title,subtitle,date`
  );
  return res.data;
};

export const getBlog = async (lng: string, slug: string) => {
  const res = await api.get(`/blogs?locale=${lng}&populate=img`);
  return res.data;
};

export const getBlogCategories = async (lng: string) => {
  const res = await api.get(`/blog-categories?locale=${lng}`);
  return res.data;
};
