import { IBase } from "./repeat";

export interface IBlog extends IBase {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  img: { url: string };
  category: {
    title: string;
  };
  markdown: string;
}
export interface IBlogCategory extends IBase {
  title: string;
  countBlog: number;
  tags: string[];
}
