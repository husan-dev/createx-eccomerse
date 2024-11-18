import api from "./axios";

export const getBlogL = async (lng: string) => {
  const res = await api.get(
    `/blogs?locale=${lng}&populate=img&populate=category&fields=title,subtitle,date&pagination[page]=1&pagination[pageSize]=2`
  );
  return res.data.data;
};
