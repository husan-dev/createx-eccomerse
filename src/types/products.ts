export interface ISelectedFilter {
  key: "brand" | "size" | "color" | "material";
  payload: string | null | [number, number];
  actionType: ActionTypes;
}

export type ActionTypes =
  | "SET_SIZE"
  | "SET_BRAND"
  | "SET_PRICE"
  | "SET_COLOR"
  | "SET_MATERIAL";

export type Action =
  | { type: "SET_SIZE"; payload: string | null }
  | { type: "SET_BRAND"; payload: string | null }
  | { type: "SET_PRICE"; payload: [number, number] }
  | { type: "SET_COLOR"; payload: string | null }
  | { type: "SET_MATERIAL"; payload: string | null };

export type State = {
  price: [number, number] | null;
  brand: string | null;
  color: string | null;
  material: string | null;
  size: string | null;
};

export const dispatchAction = (type: ActionTypes, payload: any): Action => {
  return { type, payload };
};
