export interface ISelectedFilters {
  key: filterDataKey;
  value: string | null | [number, number];
}

export type filterDataKey = "brand" | "size" | "color" | "material";

export type TFilterData = {
  price: [number, number] | null;
  brand: string | null;
  color: string | null;
  material: string | null;
  size: string | null;
};
interface ProductCategory {
  documentId: string;
  name: string;
}

export type Product = {
  price: number;
  name: string;
  order: number;
  media: { url: string };
  views: number;
  star: number;
  slug: string;
  category: ProductCategory;
  mainCateogory: ProductCategory;
  humanCategory: ProductCategory;
  documentId: string;
  brand: string;
  variants: {
    id: string;
    main: {
      id: string;
      quantity: number;
      color: string;
    };
    sizes?: {
      id: string;
      globSize: string;
      sizeEU: string;
      sizeUS: string;
      sizeUK: string;
      sizeJPN: string;
    }[];
  }[];
};

export type HumanCategory = {
  order: number;
  name: string;
};

export interface SubCategory {
  slug: string;
  order: number;
  name: string;
  documentId: string;
}

export interface ProductMainCategory {
  order: number;
  documentId: string;
  name: string;
  slug: string;
  subCategories: SubCategory[];
}
