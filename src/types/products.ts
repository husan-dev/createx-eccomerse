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
