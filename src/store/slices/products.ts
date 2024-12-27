import { filterDataKey, ISelectedFilters, TFilterData } from "@typess/products";
import { makeAutoObservable } from "mobx";
interface ISortData {
  sortBy: "name" | "price";
  sort: "asc" | "desc" | null;
}
interface Pagination {
  page: number;
  pageSize: number;
}
class ProductsStore {
  //filterData
  filterData: TFilterData = {
    price: null,
    brand: null,
    color: null,
    material: null,
    size: null,
  };

  pagination: Pagination = {
    page: 1,
    pageSize: 12,
  };
  setPagination<K extends keyof Pagination>(key: K, value: Pagination[K]) {
    this.pagination[key] = value;
  }

  sortData: ISortData = {
    sortBy: "name",
    sort: "asc" as "asc" | "desc" | null,
  };

  setSortData(value: string) {
    const [sortBy, sort] = value.split("-");
    this.sortData.sortBy = sortBy as "name" | "price";
    this.sortData.sort = sort as "asc" | "desc";
  }
  getSortData() {
    return `${this.sortData.sortBy}:${this.sortData.sort}`;
  }
  setFilerData<K extends keyof TFilterData>(key: K, value: TFilterData[K]) {
    this.filterData[key] = value;
  }

  resetFilterData() {
    this.filterData = {
      price: null,
      brand: null,
      color: null,
      material: null,
      size: null,
    };
  }

  //hide filter
  hideFilter = false;

  toggleHideFilter() {
    this.hideFilter = !this.hideFilter;
  }

  //selectedFilters
  selectedFilters: ISelectedFilters[] = [];

  resetSelectedFilter() {
    this.selectedFilters = [];
  }
  deleteSelectedFilter(key: filterDataKey) {
    this.selectedFilters = this.selectedFilters.filter(
      (item) => item.key !== key
    );
  }
  updateSelectedFilters(key: filterDataKey, value: string | [number, number]) {
    const isTrue = this.selectedFilters.some((item) => item.key === key);
    const newSelectedFilters = isTrue
      ? this.selectedFilters.map((item) => {
          if (item.key === key) {
            return { ...item, value };
          }
          return item;
        })
      : [
          ...this.selectedFilters,
          {
            key,
            value,
          },
        ];
    this.selectedFilters = newSelectedFilters;
  }

  searchMaterialInput: string = "";

  setSearchMaterialInput(value: string) {
    this.searchMaterialInput = value;
  }
  //other data
  materials: { value: string; title: string }[] = [
    { value: "cotton", title: "Cotton" },
    { value: "cashmere", title: "Cashmere" },
    { value: "denim", title: "Denim" },
    { value: "silk", title: "Silk" },
    { value: "wool", title: "Wool" },
    { value: "linen", title: "Linen" },
    { value: "polyester", title: "Polyester" },
    { value: "nylon", title: "Nylon" },
    { value: "rayon", title: "Rayon" },
    { value: "leather", title: "Leather" },
    { value: "spandex", title: "Spandex" },
    { value: "flannel", title: "Flannel" },
    { value: "velvet", title: "Velvet" },
    { value: "fleece", title: "Fleece" },
    { value: "satin", title: "Satin" },
    { value: "chiffon", title: "Chiffon" },
    { value: "organza", title: "Organza" },
    { value: "tweed", title: "Tweed" },
    { value: "suede", title: "Suede" },
    { value: "jersey", title: "Jersey" },
  ];

  get searchMaterialData() {
    return this.materials.filter((item) =>
      item.title.toLowerCase().includes(this.searchMaterialInput.toLowerCase())
    );
  }

  sizes = [
    { title: "XS", value: "xs" },
    { title: "S", value: "s" },
    { title: "M", value: "m" },
    { title: "L", value: "l" },
    { title: "XL", value: "xl" },
    { title: "Plus Size", value: "plus_size" },
  ];

  colors = [
    { title: "Black", value: "black", color: "#3B3B3B" }, // iliq qora
    { title: "White", value: "white", color: "#F1F1F1" }, // iliq oq
    { title: "Red", value: "red", color: "#FF6961" }, // och qizil
    { title: "Green", value: "green", color: "#A8D08D" }, // och iliq yashil
    { title: "Blue", value: "blue", color: "#89CFF0" }, // iliq och ko‘k
    { title: "Yellow", value: "yellow", color: "#FFD580" }, // iliq och sariq
    { title: "Orange", value: "orange", color: "#FFB347" }, // och iliq to‘q sariq
    { title: "Pink", value: "pink", color: "#FFB6C1" }, // iliq och pushti
    { title: "Purple", value: "purple", color: "#D7A9E3" }, // iliq och binafsha
    { title: "Brown", value: "brown", color: "#C69C6D" }, // iliq jigarrang
    { title: "Gray", value: "gray", color: "#BEBEBE" }, // iliq och kulrang
    { title: "Cyan", value: "cyan", color: "#B2EBF2" }, // iliq och tsian
    { title: "Magenta", value: "magenta", color: "#FF9BBA" }, // iliq och magenta
    { title: "Lime", value: "lime", color: "#D0E68F" }, // iliq och limon
    { title: "Olive", value: "olive", color: "#B5A642" }, // iliq och zaytun
    { title: "Maroon", value: "maroon", color: "#B04A57" }, // iliq och bordo
    { title: "Navy", value: "navy", color: "#7289DA" }, // iliq och to‘q ko‘k
    { title: "Teal", value: "teal", color: "#69A8A5" }, // iliq och tillo ko‘k
    { title: "Silver", value: "silver", color: "#D3D3D3" }, // iliq kumushrang
    { title: "Gold", value: "gold", color: "#FFD966" }, // iliq oltin
  ];

  searchBrandInput: string = "";

  setSearchBrandInput(value: string) {
    this.searchBrandInput = value;
  }
  brands = [
    { title: "Adidas", value: "adidas" },
    { title: "Puma", value: "puma" },
    { title: "Dior", value: "dior" },
    { title: "Chanel", value: "chanel" },
    { title: "Zara", value: "zara" },
    { title: "Armani", value: "armani" },
    { title: "Nike", value: "nike" },
    { title: "Gucci", value: "gucci" },
    { title: "Louis Vuitton", value: "louis-vuitton" },
    { title: "Prada", value: "prada" },
    { title: "Burberry", value: "burberry" },
    { title: "Versace", value: "versace" },
    { title: "Hermès", value: "hermes" },
    { title: "Rolex", value: "rolex" },
    { title: "Cartier", value: "cartier" },
    { title: "H&M", value: "hm" },
    { title: "Uniqlo", value: "uniqlo" },
    { title: "Under Armour", value: "under-armour" },
    { title: "Levi's", value: "levis" },
    { title: "New Balance", value: "new-balance" },
    { title: "Balenciaga", value: "balenciaga" },
    { title: "Tommy Hilfiger", value: "tommy-hilfiger" },
    { title: "Calvin Klein", value: "calvin-klein" },
    { title: "Fendi", value: "fendi" },
    { title: "Lacoste", value: "lacoste" },
    { title: "BOSS", value: "boss" },
    { title: "Gap", value: "gap" },
    { title: "Fila", value: "fila" },
    { title: "Diesel", value: "diesel" },
    { title: "Mango", value: "mango" },
  ];

  get searchBrandData() {
    return this.brands.filter((item) =>
      item.title.toLowerCase().includes(this.searchBrandInput.toLowerCase())
    );
  }

  filterBrands = [];
  constructor() {
    makeAutoObservable(this);
  }
}
const productsStore = new ProductsStore();
export default productsStore;
