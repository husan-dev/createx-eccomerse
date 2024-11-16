import api from "./axios";

export const getFaqs = async (lng: string) => {
  const res = await api.get(`/faqs?locale=${lng}&sort=order:asc`);
  return res.data.data;
};

export const getStores = async (lng: string) => {
  const res = await api.get(`/outlet-stores?locale=${lng}&populate=img`);
  return res.data.data;
};
