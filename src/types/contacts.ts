import { IBase } from "./repeat";

export interface IFaqs extends IBase {
  locale: "uz" | "en" | "ru";
  title: string;
  answer: string;
}

export interface Img extends IBase {
  url: string;
}

export interface IOutletStores extends IBase {
  phone: string;
  email: string;
  workTime: string;
  location: string;
  img: Img;
  title: string;
}
