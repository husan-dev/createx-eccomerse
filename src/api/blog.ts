import api from "./axios";

export const getBlog = async (lng: string) => {
  const res = await api.get(`/blog?locale=${lng}`);
  return res;
};
