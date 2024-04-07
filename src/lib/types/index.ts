export interface Manufacturer {
  id: string;
  trade_brand: string;
  country: string;
  country_brand_registration: string;
}

export interface Image {
  id: string /*need to clarify the type */;
  image: string /*need to clarify the type */;
  product: string /*need to clarify the type */;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  productCode: string;
  price: string;
  priceDiscount: string;
  categories: string;
  disciuntPercentage: string;
  typesProduct: string /*need to clarify what is it and it type */;
  image: string;
  rating: string;
  manufacturer: Manufacturer;
  description: string;
  images: Image;
}
