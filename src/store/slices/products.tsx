import { makeAutoObservable } from "mobx";
class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }
}
const productStore = new ProductStore();
export default productStore;
