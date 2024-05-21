import { Product } from '@/lib/types';

interface AllProducts {
  count: number;
  next: string;
  previous: string;
  results: Product[];
}
interface Categories {
  count: number;
  next: string;
  previous: string;
  results: [];
}

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const buildUrl = (...paths: string[]) =>
  `http://ec2-52-59-30-228.eu-central-1.compute.amazonaws.com/api/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

// List of products sorted by creation date in descending order.
export const getAllProducts = (init?: RequestInit) => {
  return sendRequest<AllProducts>(buildUrl('shop', 'products'), init);
};

//List of categories .
export const getCategories = (init?: RequestInit) => {
  return sendRequest<Categories>(buildUrl('shop'), init);
};
