import api from "./axios";
import productsStore from "@store/slices/products";

export const getProducts = async () => {
  try {
    const response = await api.post("graphql", {
      query: `query Products($sort: [String], $pagination: PaginationArg,  $filters: ProductFiltersInput) {
    products(sort: $sort, pagination: $pagination, filters: $filters) {
      price
      name
      order
      media {
        url
      }
      views
      star
      slug
      category {
        documentId
        name
      }
      mainCateogory {
        documentId
        name
      }
      humanCategory {
        name
        documentId
      }
      documentId
      brand
      variants {
        ... on ComponentProductWomenAccesoriesVariant {
          id
             main {
            id
            quantity
            color
          }
          sizeEU
          sizeUS
          sizeUK
          sizeJPN
          globSize
        }
        ... on ComponentProductWomenShoesVariant {
          main {
            id
            quantity
            color
          }
        }
        ... on ComponentProductWomenClothesVariant {
             main {
            id
            quantity
            color
          }
          sizes {
            id
            sizeEU
            sizeUS
            sizeUK
            sizeJPN
            globSize
          }
          id
        }
      }
    }
  }`,
      variables: {
        sort: [productsStore.getSortData()],
        pagination: {
          page: productsStore.pagination.page,
          pageSize: productsStore.pagination.pageSize,
        },
        filters: {
          material: {
            contains:
              productsStore.filterData.material === null
                ? ""
                : productsStore.filterData.material,
          },
          brand: {
            contains:
              productsStore.filterData.brand === null
                ? ""
                : productsStore.filterData.brand,
          },
          price: productsStore.filterData.price
            ? {
                gte: productsStore.filterData.price[0] ?? 0,
                lte: productsStore.filterData.price[1] ?? 0,
              }
            : undefined,
        },
      },
    });
    if (response.status === 200) {
      return response.data.data.products;
    }
  } catch (error) {
    console.error("Error fetching human categories:", error);
  }
  return [];
};
export const getHumanCategories = async (lang: string) => {
  try {
    const response = await api.post("graphql", {
      query: `query HumanCategories($sort: [String], $locale: I18NLocaleCode) {
        humanCategories(sort: $sort, locale: $locale) {
          order
          slug
          name
        }
      }`,
      variables: { sort: ["order"], locale: lang },
    });
    if (response.status === 200) {
      return response.data.data.humanCategories;
    }
  } catch (error) {
    console.error("Error fetching human categories:", error);
  }
  return [];
};
export const getProductCategories = async (lang: string) => {
  try {
    const response = await api.post("graphql", {
      query: `
        query ProductMainCategories($locale: I18NLocaleCode, $sort: [String]) {
          productMainCateogories(locale: $locale, sort: $sort) {
            order
            documentId
            name
            slug
            subCategories {
              slug
              order
              name
              documentId
            }
          }
        }
      `,
      variables: { sort: ["order"], locale: lang },
    });
    if (response.status === 200) {
      return response.data.data.productMainCateogories;
    }
  } catch (error) {
    console.error("Error fetching product categories:", error);
  }
  return [];
};
