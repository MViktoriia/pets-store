import { instance } from './auth';

export const fetchListOfProductCategories = async (
  page: number,
  page_size: number,
) => {
  const { data } = await instance.get(
    `/shop/?&page=${page}&page_size=${page_size}`,
  );
  return data;
};

export const fetchProductCategory = async (category_slug: string) => {
  const { data } = await instance.get(`/shop/${category_slug}/`);
  return data;
};

export const fetchProductSubCategory = async (
  category_slug: string,
  subcategory_slug: string,
) => {
  const { data } = await instance.get(
    `/shop/${category_slug}/${subcategory_slug}/`,
  );
  return data;
};

export const fetcheProductLowerCategory = async (
  category_slug: string,
  subcategory_slug: string,
  lower_category_slug: string,
  min_price: string,
  max_price: string,
  manufacturer: string,
  type_characteristic: string,
  search: string,
  ordering: string,
  page: number,
  page_size: number,
) => {
  const { data } = await instance.get(
    `/shop/${category_slug}/${subcategory_slug}/${lower_category_slug}?&page=${page}&page_size=${page_size}&min_price=${min_price}&max_price=${max_price}&manufacturer=${manufacturer}&type_characteristic=${type_characteristic}&search=${search}&ordering=${ordering}}/`,
  );
  return data;
};

export const fetcheOneProduct = async (
  category_slug: string,
  subcategory_slug: string,
  lower_category_slug: string,
  product_slug: string,
) => {
  const { data } = await instance.get(
    `/shop/${category_slug}/${subcategory_slug}/${lower_category_slug}/${product_slug}/`,
  );
  return data;
};
