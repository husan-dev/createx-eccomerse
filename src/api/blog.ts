import api from "./axios";

export const getBlogs = async (lng: string) => {
  const res = await api.get(
    `/blogs?locale=${lng}&populate=img&populate=category&fields=title,subtitle,date,slug`
  );
  return res.data;
};

export const getBlog = async (lng: string, slug: string) => {
  const res = await api.get(
    `/blogs?locale=${lng}&populate=img&populate=category&filters[slug][$eq]=${slug}`
  );
  return res.data.data;
};

export const getBlogCategories = async (lng: string) => {
  const res = await api.get(`/blog-categories?locale=${lng}`);
  return res.data;
};
